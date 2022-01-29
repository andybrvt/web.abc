import React, { useState, useEffect } from 'react';
import "./Pages.css";

export const PagesContainer = (props) => {

  const [editor, setEditor] = useState(null);
  const [pageManager, setPageManager] = useState(null);

  const [pages, setPages] = useState([]);
  const [currentSelected, setCurrentSelected] = useState(null);

  useEffect(() => {
    if(props.editor !== null){
      const pm = props.editor.Pages;
      setEditor(props.editor)
      setPageManager(props.editor.Pages)

      setPagesMethod(pm.getAll())

      setCurrentSelected(pm.getSelected().id)
    }
  }, [props.editor])


  const setPagesMethod = (pages) => {
    setPages(oldArray => [...oldArray, ...pages])
  }

  // this function is to show which page is selected right now
  const isSelected = (page) => {
    if(pageManager !== null){
      console.log(pageManager.getSelected(), 'selected here')
      return pageManager.getSelected().id === page.id;
    }

    return false;
  }

  const selectPage = (page) => {
    if(pageManager !== null){
      setCurrentSelected(page.id)
      return pageManager.select(page)
    }
  }

  const removePage = (pageId) => {
    if(pageManager !== null){
      return pageManager.remove(pageId)
    }
  }

  const addPage = () => {
    if(pageManager !== null){
      const len = pageManager.getAll().length;
      pageManager.add({
        name: `Page ${len+1}`,
        component:"<div>New Page</div>"
      })

    }
  }

  return(
    <div>
      <div class= "pages-wrap">
        <div class = "add-page">
          Add new page
        </div>

        <div class= "pages">
          {
            pages.map((pg, index) =>{
              return(
                <div
                  class={"page "+ (currentSelected === pg.id ? "selected" : "")}
                  key = {pg.id}
                  onClick = {() => selectPage(pg)}>
                  {pg.get('name')}
                </div>

              )

            })
          }

        </div>


      </div>
    </div>
  )
}
