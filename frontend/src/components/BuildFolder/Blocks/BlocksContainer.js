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
import {ImageBlocks} from './BasicBlocks/ImageBlocks';
import {InformationalBlocks} from './BasicBlocks/InformationalBlocks';  
import {HeaderBlocks} from './BasicBlocks/HeaderBlocks';
import {FooterBlocks} from './BasicBlocks/FooterBlocks';
import {NFTShowcaseBlocks} from './Web3Blocks/NFTShowcaseBlocks';
import {NFTCollectionTemplates} from './BasicBlocks/NFTCollectionTemplates/NFTCollectionTemplates';
import {SocialMediaFooterBlocks} from './BasicBlocks/SocialMediaFooterBlocks';

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

    const nftCollectionTemplates = editor.BlockManager.render(
      NFTCollectionTemplates, {external: true}
  )
    const imageBlocks = editor.BlockManager.render(
      ImageBlocks, {external: true}
    )
    const infoBlocks = editor.BlockManager.render(
      InformationalBlocks, {external:true}
    )
    const headerBlocks = editor.BlockManager.render(
      HeaderBlocks, {external: true}
    )
    const footerBlocks = editor.BlockManager.render(
      FooterBlocks, {external: true}
    )
    const nftBlocks = editor.BlockManager.render(
      NFTShowcaseBlocks, {external: true}
    )
    const socialMediaFooter = editor.BlockManager.render(
      SocialMediaFooterBlocks, {external:true}
    )



    document.getElementById("blocks").appendChild(mTemplateBlocks);
    document.getElementById("blocks").appendChild(nftBlocks);
    document.getElementById("blocks").appendChild(templateBlocks);
    document.getElementById("blocks").appendChild(infoBlocks);
    document.getElementById("blocks").appendChild(headerBlocks);
    document.getElementById("blocks").appendChild(footerBlocks);
    document.getElementById('blocks').appendChild(buttonBlocks);
    document.getElementById('blocks').appendChild(textBlocks);
    // document.getElementById('blocks').appendChild(lineBlocks);
    // document.getElementById('blocks').appendChild(inputBlocks);
    document.getElementById("blocks").appendChild(linkBlocks);
    document.getElementById("blocks").appendChild(imageBlocks);
    document.getElementById("blocks").appendChild(socialMediaFooter);
    document.getElementById("blocks").appendChild(nftCollectionTemplates);

    const categories = editor.BlockManager.getCategories();
    categories.each(category => {
    	category.set('open', false).on('change:open', opened => {
    		opened.get('open') && categories.each(category => {
                category !== opened && category.set('open', false)
            })
    	})
    })

  }

    
  }, [props.category])



  return(
    <div id = "blocks">
    </div>
  )
}
