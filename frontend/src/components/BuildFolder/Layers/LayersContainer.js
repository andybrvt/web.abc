import React, { useState, useEffect } from 'react';


export const LayersContainer = (props) => {

  const [editor, setEditor] = useState(null);

  useEffect(() => {

    if(props.editor !== null){
      setEditor(props.editor)
    }
  }, [props.editor])

  return(
    <div class = "layers-container"></div>
  )
}
