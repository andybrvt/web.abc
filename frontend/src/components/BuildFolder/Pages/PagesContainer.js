import React, { useState, useEffect } from 'react';
import "./Pages.css";

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
    if(pageManager !== null){
      const len = pageManager.getAll().length+1;
      pageManager.add({
        id: `page ${len}`,
        name: `Page ${len}`,
        component:"<div>New Page</div>"
      })

    }
  }

  return(
    <div>
      <div class= "pages-wrap">
        <div
          onClick= {() => addPage()}
          class = "add-page">
          Add new page
        </div>

        <div class= "pages">
          {
            pages.map((pg, index) =>{
              return(
                <div>
                  <div
                    class={"page "+ (isSelected(pg) ? "selected" : "")}
                    key = {pg.id}
                    onClick = {() => selectPage(pg)}>
                    {pg.get('name')}
                  </div>
                  <span onClick = {() => removePage(pg)}>X</span>
                </div>

              )

            })
          }

        </div>


      </div>
    </div>
  )
}
