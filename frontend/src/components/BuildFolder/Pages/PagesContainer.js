import React, { useState, useEffect, useCallback } from 'react';
import "./Pages.css";
import { ChevronDownIcon,AddIcon, CloseIcon } from '@chakra-ui/icons'
import { Menu, Dropdown, Button, Space } from 'antd';
import axios from 'axios';
import { Input } from '@chakra-ui/react'

// MAKE SURE TO DO A FUNCTION FOR DELETING IN THE BACKEND THE PAGE CORRECTLY

export const PagesContainer = (props) => {

  const [editor, setEditor] = useState(null);
  const [pageManager, setPageManager] = useState(null);

  const [pages, setPages] = useState([]);
  const [curPageID, setcurPageID]=useState("page-1")
  const [pageName, setPageName] = useState(null);
  const [pageCondition, changePageCondition] = useState(false);
  const [prevPageName, setPrevPageName] = useState(null);

  const escFunction = useCallback((event) => {

      if (event.key === "Escape") {
        changePageCondition(false)

      }



  }, []);


  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {


    if(props.editor !== null){
      const pm = props.editor.Pages;
      setEditor(props.editor)
      setPageManager(props.editor.Pages)

      setPagesMethod(pm.getAll())


      props.editor.on('page', () => {
        setPages([...pm.getAll()])
        setcurPageID(pm.getSelected().getId())
        setPageName(pm.getSelected().get("name"))

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
      const name = pageManager.getSelected().get("name")
      return name;
    }
    return "Undefined"
  }


  const selectPage = (page) => {

    setcurPageID(page.id)
    setPageName(pageManager.get(page.id).attributes.name)
    if(pageManager !== null){
      return pageManager.select(page)
    }
  }

  const removePage = (websiteId) => {
    if(pageManager !== null){
      console.log(websiteId)

      axios.post(`${global.API_ENDPOINT}/builder/deleteWebsitePage/${websiteId}`)

      return pageManager.remove(websiteId)
      // put an axios call here


    }
  }



  const addPage = () => {
    if(pageManager !== null){

      const websiteId = props.websiteId
      const len = pageManager.getAll().length+1;

      var formData = new FormData()
      formData.append("name", `Page ${len}`)

      axios.post(`${global.API_ENDPOINT}/builder/addWebsitePage/${websiteId}`, formData)
      .then(res =>{
        console.log(res.data)

        pageManager.add({
          id: `${res.data.pageId}`,
          name: `Page ${len}`,
          component: "<div>New Page</div>"
        })

        const newPage = pageManager.get(`${res.data.pageId}`)
        pageManager.select(newPage);

      })

      // const len = pageManager.getAll().length+1;
      // pageManager.add({
      //   id: `page ${len}`,
      //   name: `Page ${len}`,
      //   component:"<div>New Page</div>"
      // })
      // const newPage = pageManager.get(`page ${len}`)
      // pageManager.select(newPage);
    }
  }

  const menu = (
        <Menu className = "menuContianer">
          {
            pages.map((pg, index) =>{
              return(

                <Menu.Item
                  key = {pg.id}
                  >
                  <div class = "menuContianerItem">
                    <div
                      onClick = {() => selectPage(pg)}
                      className = "menuContianerText">
                      {pg.get('name')}

                    </div>
                    <div
                      class = "menuCloseButton"
                      onClick = {() => removePage(pg.id)}><CloseIcon /></div>


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
    <div class= "cover-page">


        <div>
          {
             pageCondition ?

            <div>
              {/*
                <input type="text" defaultValue={pageName} onKeyPress={(event) => {
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

                */}
                <Input
                  onKeyPress = {(event)=> {
                    const key = event.which || event.keyCode;
                    console.log(key)
                    if(key === 13){
                      pageManager.get(curPageID).set({ id: curPageID, name: event.target.value })
                      changePageCondition(false)
                    }

                  }}
                  value = {pageCondition ? prevPageName : pageName}
                  onChange = {(e) => setPrevPageName(e.target.value)}
                  variant='flushed'
                  placeholder='Page Name' />

            </div>

          :

            <div

              onDoubleClick = {() => {
                setPrevPageName(pageName)
                changePageCondition(true)
              }}>
              {pageName}
            </div>
          }

        </div>

        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
          <div>
            <ChevronDownIcon />
          </div>
        </Dropdown>

    </div>
  )
}
