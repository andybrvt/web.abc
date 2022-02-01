import React, { useState, useEffect } from 'react';
import './Blocks.css';

export const BlocksContainer = (props) => {

  const [editor, setEditor] = useState(null)

  useEffect(() => {
    if(props.editor !== null){
      setEditor(props.editor);
      // props.editor.BlockManager.add('your-block', {
      //   label: 'Label',
      //   category: 'Some category',
      //   content: '<div>Content</div>',
      // });
      // props.editor.BlockManager.add('your-block-1', {
      //   label: 'Label2',
      //   category: 'Some category 3',
      //   content: '<div>Content</div>',
      // });
      const blockManager = props.editor.BlockManager
      console.log(blockManager.getAll())
      const newBlocks = props.editor.BlockManager.render([
       {label: 'Label text', content: '<div>Content</div>'}
     ], {external:true})

     const newBlocks2 = props.editor.BlockManager.render([
       {label: 'Label text new', content: '<div>Content</div>'}

     ], {external: true})

     document.getElementById('blocks').appendChild(newBlocks);
     document.getElementById('blocks').removeChild(newBlocks);
     document.getElementById('blocks').appendChild(newBlocks2);

    }
  }, [props.editor])


  return(
    <div id = "blocks">
    </div>
  )
}
