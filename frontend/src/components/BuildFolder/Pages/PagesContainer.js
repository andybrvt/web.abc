import React, { useState, useEffect } from 'react';
import "./Pages.css";
import { ChevronDownIcon,AddIcon } from '@chakra-ui/icons'
import { Menu, Dropdown, Button, Space } from 'antd';



export const PagesContainer = (props) => {

  const [editor, setEditor] = useState(null);
  const [pageManager, setPageManager] = useState(null);

  const [pages, setPages] = useState([]);
  const [curPageID, setcurPageID]=useState("page-1")
  const [pageName, SetPageName] = useState(null);
  const [pageCondition, changePageCondition] = useState(false);
  useEffect(() => {
    if(props.editor !== null){
      const pm = props.editor.Pages;
      setEditor(props.editor)
      setPageManager(props.editor.Pages)

      setPagesMethod(pm.getAll())

      props.editor.on('page', () => {
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

    setcurPageID(page.id)
    SetPageName(pageManager.get(page.id).attributes.name)
    if(pageManager !== null){
      return pageManager.select(page)
    }
  }

  const removePage = (pageId) => {
    if(pageManager !== null){
      return pageManager.remove(pageId)
    }
  }

  const triggerPage=(name)=> {
    changePageCondition(true)


  }

  const addPage = () => {
    if(pageManager !== null){

      // NEED TO FIX THIS, ID FOR PAGES USING THE PAGE LENGTH IS NOT
      // GOOD, IT LEADS YOU TO NOT BE ABLE TO CREATE PAGES BECUASE OF CONFLICINT
      // PAGE IDS
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
                  // onClick = {() => selectPage(pg)}
                  >
                  <div className = "menuContianerText">
                    {pg.get('name')}


                  </div>

                  <div onClick = {() => removePage(pg.id)}>X</div>
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


        <div
          onClick = {() => triggerPage(getCurrentPage())}>
          { pageCondition?
            <div><input type="text" defaultValue={pageName} onKeyPress={(event) => {
            const key = event.which || event.keyCode;
            if (key === 13) { //enter key

              // https://github.com/artf/grapesjs/issues/3878
              // console.log(pageManager.getMain())
                // pageManager.get(curPageID).set({ id: curPageID, name: event.target.value })
                pageManager.get(curPageID).set({ id: curPageID, name: event.target.value })
                editor.on('storage:store', function(e) {
                    console.log('Stored ', e);
              })
            }
          }} autoFocus={true}/>
            <Dropdown overlay={menu} placement="bottomCenter" trigger={['hover']}>
          <ChevronDownIcon />
          </Dropdown>
      </div>

          :
          <div>
            {getCurrentPage()} <ChevronDownIcon />
        </div>
          }

        </div>


    </div>
  )
}
