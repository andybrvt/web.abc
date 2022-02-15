import React, { useState, useEffect } from 'react';
import './Blocks.css';
import {ButtonBlocks} from './BasicBlocks/ButtonBlocks';
import {TextBlocks} from './BasicBlocks/TextBlocks';
import {LineBlocks} from './BasicBlocks/LineBlocks';
import {InputBlocks} from './BasicBlocks/Input/InputBlocks';
import {Shapes} from './Shapes/Shapes'
import {TemplateBlocks} from './BasicBlocks/TemplateBlocks';
import {ModernTemplateBlocks} from './BasicBlocks/ModernTemplateBlocks';
import {LinkBlocks} from './BasicBlocks/LinkBlocks';
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
    const lineBlocks = editor.BlockManager.render(
        LineBlocks, {external:true})
    const inputBlocks = editor.BlockManager.render(
        InputBlocks, {external:true})
    const templateBlocks = editor.BlockManager.render(
        TemplateBlocks, {external: true})
    const mTemplateBlocks = editor.BlockManager.render(
        ModernTemplateBlocks, {external: true}
    )
    const linkBlocks = editor.BlockManager.render(
        LinkBlocks, {external: true}
    )



    document.getElementById('blocks').appendChild(buttonBlocks);
    document.getElementById('blocks').appendChild(textBlocks);
    document.getElementById('blocks').appendChild(lineBlocks);
    document.getElementById('blocks').appendChild(inputBlocks);
    document.getElementById("blocks").appendChild(templateBlocks);
    document.getElementById("blocks").appendChild(mTemplateBlocks);
    document.getElementById("blocks").appendChild(linkBlocks);

    const categories = editor.BlockManager.getCategories();
    categories.each(category => {
    	category.set('open', false).on('change:open', opened => {
    		opened.get('open') && categories.each(category => {
                category !== opened && category.set('open', false)
            })
    	})
    })

  }

    if(category === "shapes"){

      removeAllChild()
      const shapeBlock = editor.BlockManager.render(
         Shapes, {external:true})

      document.getElementById('blocks').appendChild(shapeBlock);


    }

    if(category === "pens"){
      removeAllChild()
      const newBlocks = editor.BlockManager.render([
         {label: 'Label text 4', content: '<div>Content</div>'}
       ], {external:true})
      document.getElementById('blocks').appendChild(newBlocks);
    }



    if(category === "input"){
      removeAllChild()
      const newBlocks = editor.BlockManager.render([
         {label: 'Label text 4', content: '<div>Content</div>'}
       ], {external:true})

       const inputBlocks = editor.BlockManager.render(
          InputBlocks, {external:true})

      document.getElementById('blocks').appendChild(inputBlocks);
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
