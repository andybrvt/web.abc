import React, { useState, useEffect } from 'react';
import './Blocks.css';

export const BlocksContainer = (props) => {

  const [editor, setEditor] = useState(null)

  useEffect(() => {
    if(props.editor !== null){
      setEditor(props.editor);
      props.editor.BlockManager.add('your-block', {
        label: 'Label',
        category: 'Some category',
        content: '<div>Content</div>',
      });
    }
  }, [props.editor])


  return(
    <div id = "blocks">
    </div>
  )
}
