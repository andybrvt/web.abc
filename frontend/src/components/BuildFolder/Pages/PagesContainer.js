import React, { useState, useEffect } from 'react';


export const PagesContainer = (props) => {

  const [editor, setEditor] = useState(null);
  const [pageManager, setPageManager] = useState(null);
  const [pages, setPages] = useState([]);


  useEffect(() => {
    if(props.editor !== null){
      const pm = props.editor.Pages;
      setEditor(props.editor)
      setEditor(props.editor.Pages)

      setPagesMethod(pm.getAll())

    }
  }, [props.editor])


  const setPagesMethod = (pages) => {
    setPages(oldArray => [...oldArray, pages])
  }

  // this function is to show which page is selected right now
  const isSelected = (page) => {
    if(pageManager !== null){
      return pageManager.getSelected().id === page.id;
    }

    return false;
  }

  // const selectedPage = (pageId)

  return(
    <div>
      This will be for the pages
    </div>
  )
}
