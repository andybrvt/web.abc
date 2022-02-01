import React, { useState, useEffect } from 'react';
import './Blocks.css';
import {basicBlocks} from './BasicBlocks/BlockButton'

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


    }
  }, [props.editor])

  const removeFirstChild = () => {
    const current = document.getElementById("blocks")
    const firstChild = current.firstChild
    if(firstChild){
      firstChild.remove()
    }
  }

  useEffect(() => {

    console.log(props.category)
    const category = props.category

    if(category === "basic"){
      removeFirstChild()
      const newBlocks = editor.BlockManager.render(
         basicBlocks, {external:true})

      document.getElementById('blocks').appendChild(newBlocks);


    }

    if(category === "shapes"){

      removeFirstChild()
      const newBlocks = editor.BlockManager.render([
         {label: 'Label text 3', content: '<div>Content</div>'}
       ], {external:true})

      document.getElementById('blocks').appendChild(newBlocks);


    }

    if(category === "pens"){
      removeFirstChild()
      const newBlocks = editor.BlockManager.render([
         {label: 'Label text 4', content: '<div>Content</div>'}
       ], {external:true})

      document.getElementById('blocks').appendChild(newBlocks);


    }

    if(category === "colors"){
      removeFirstChild()
      const newBlocks = editor.BlockManager.render([
         {label: 'Label text 5', content: '<div>Content</div>'}
       ], {external:true})

      document.getElementById('blocks').appendChild(newBlocks);

    }

  }, [props.category])


  return(
    <div id = "blocks">
    </div>
  )
}
