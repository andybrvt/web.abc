import React, { useState, useEffect } from 'react';
import './Blocks.css';
import {ButtonBlocks} from './BasicBlocks/ButtonBlocks';
import {TextBlocks} from './BasicBlocks/TextBlocks';
import {Shapes} from './Shapes/Shapes'

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

  const removeAllChild = () => {
    const current = document.getElementById("blocks")
    // const firstChild = current.firstChild
    // if(firstChild){
    //   firstChild.remove()
    // }
    while(current.firstChild){
      current.removeChild(current.firstChild)
    }
  }

  useEffect(() => {

    console.log(props.category)
    const category = props.category

    if(category === "basic"){
      removeAllChild()
    const buttonBlocks = editor.BlockManager.render(
       ButtonBlocks, {external:true})
    const textBlocks = editor.BlockManager.render(
       TextBlocks, {external:true})

      document.getElementById('blocks').appendChild(buttonBlocks);
      document.getElementById('blocks').appendChild(textBlocks);


    }

    if(category === "shapes"){

      removeAllChild()
      const newBlocks = editor.BlockManager.render(
         Shapes, {external:true})

      document.getElementById('blocks').appendChild(newBlocks);


    }

    if(category === "pens"){
      removeAllChild()
      const newBlocks = editor.BlockManager.render([
         {label: 'Label text 4', content: '<div>Content</div>'}
       ], {external:true})

      document.getElementById('blocks').appendChild(newBlocks);


    }

    if(category === "colors"){
      removeAllChild()
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
