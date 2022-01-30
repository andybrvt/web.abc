import React, { useState, useEffect } from 'react';
import "./Pages.css";
import { ChevronDownIcon,AddIcon } from '@chakra-ui/icons'
import { Menu, Dropdown, Button, Space } from 'antd';


export const PagesContainer = (props) => {

  const [editor, setEditor] = useState(null);
  const [pageManager, setPageManager] = useState(null);

  const [pages, setPages] = useState([]);

  useEffect(() => {
    if(props.editor !== null){
      const pm = props.editor.Pages;
      setEditor(props.editor)
      setPageManager(props.editor.Pages)

      setPagesMethod(pm.getAll())

      props.editor.on('page', () => {
        console.log('update pages')
        setPages([...pm.getAll()])
      })
    }
  }, [props.editor])


  const setPagesMethod = (pages) => {
    setPages(oldArray => [...oldArray, ...pages])
  }

  // this function is to show which page is selected right now
  const isSelected = (page) => {
    if(pageManager !== null){
      return pageManager.getSelected().id === page.id;
    }

    return false;
  }

  const getCurrentPage = () => {
    if(pageManager !== null){
      return pageManager.getSelected().get("name");
    }
    return "Undefined"
  }

  const selectPage = (page) => {
    if(pageManager !== null){
      return pageManager.select(page)
    }
  }

  const removePage = (pageId) => {
    if(pageManager !== null){
      return pageManager.remove(pageId)
    }
  }

  const addPage = () => {
    console.log('add pages')
    if(pageManager !== null){
      console.log('add pages here too')
      const len = pageManager.getAll().length+1;
      pageManager.add({
        id: `page ${len}`,
        name: `Page ${len}`,
        component:"<div>New Page</div>"
      })
      const newPage = pageManager.get(`page ${len}`)
      pageManager.select(newPage);
    }
  }

  const menu = (
        <Menu className = "menuContianer">
          {
            pages.map((pg, index) =>{
              return(
                <Menu.Item
                  // class={"menuContianerText"+ (isSelected(pg) ? "selected" : "")}
                  key = {pg.id}
                  onClick = {() => selectPage(pg)}
                  >
                  <div className = "menuContianerText">
                    {pg.get('name')}


                  </div>

                </Menu.Item>

              )

            })
          }

          <Menu.Item
            // class={"menuContianerText"+ (isSelected(pg) ? "selected" : "")}
            onClick= {() => addPage()}
            >
            <div className = "menuContianerText">

              <AddIcon /> Add Page

            </div>

          </Menu.Item>
        </Menu>
      );

  return(
    <div>

      <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
        <div>{getCurrentPage()} <ChevronDownIcon /></div>
      </Dropdown>

    </div>
  )
}
