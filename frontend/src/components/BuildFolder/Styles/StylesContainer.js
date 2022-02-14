import React, { useState, useEffect } from 'react';

export const StylesContainer = (props) => {

  const [editor, setEditor] = useState(null);

  useEffect(() => {
    if(props.editor !== null){
      setEditor(props.editor)
    }
  }, [props.editor])

  return(
    <div class = "styles-container">


      <div>
      </div>
    </div>

  )
}
