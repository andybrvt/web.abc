import React, { useState, useEffect } from 'react';
import {
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import {SectorContainer} from './SectorContainer';
import "./StylesContainer.css";
import {WrapperGradientSelector} from './WrapperGradientSelector';
export const StylesContainer = (props) => {

  const [editorMain, setEditor] = useState(null);
  const [sectors, setSectors] = useState([]);
  if(props.editor !== null){
    const sector1=props.editor.StyleManager.getSector('typography');
    const property = sector1.getProperties()
  }
  // return function in useEffect will be the unmount
  useEffect(() => {
    if(props.editor !== null){
      const tempEditor = props.editor
      setEditor(props.editor)
      props.editor.on('style:custom', props =>{
        setSectors(tempEditor.StyleManager.getSectors({visible:true}))
      })

      props.editor.on('load', ()=> {

          const tempEditor = props.editor
          let styleManager = props.editor.StyleManager;
          let typographySector = props.editor.StyleManager.getSector('typography');
          let fontProperty = props.editor.StyleManager.getProperty('typography', 'font-family');
          const roboto = "'Roboto', sans-serif;";
          const raleway="'Raleway', sans-serif";
          const lato="'Lato', sans-serif";
          const poppins="'Poppins', sans-serif"
          fontProperty.setOptions([]);
          
          const robotoFont = { id: roboto, label: roboto.split(',')[0] };
          const ralewayFont = { id: raleway, label: raleway.split(',')[0] };
          const latoFont = { id: lato, label: lato.split(',')[0] };
          const poppinsFont = { id: poppins, label: poppins.split(',')[0] };

          console.log(fontProperty.getOptions())
          fontProperty.setOptions([...fontProperty.getOptions(), robotoFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), ralewayFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), latoFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), poppinsFont]);
          console.log(fontProperty.getOptions())
          {/*
          let fontProperty = props.editor.StyleManager.getProperty('Typography', 'font-family');
          let list = fontProperty.get('list');
          list.push({ value: 'Roboto, Arial, sans-serif', name: 'Roboto' });
          fontProperty.set('list', list);
          styleManager.render();
          */}



      })


      return () => {
        props.editor.off('style:custom', props => {

          setSectors(tempEditor.StyleManager.getSectors({visible:true}))

        })
      }
    }

    // for unmount

  }, [props.editor])


  const testClick = ()=> {
    console.log(editorMain.getWrapper())
    editorMain.getWrapper().setStyle({
      background: "linear-gradient(#e66465, #9198e5);"
    })
  }

  return(



    <Stack
      bg={useColorModeValue('white', 'gray.900')}
      style={{height:'100%'}}
      boxShadow={'lg'}
      p={5}
      rounded={'xl'}
      // align={'center'}
      pos={'relative'}
      >

        <div class={`${(props.blockType) ? "testThis" : ""}`}>
          <div class="blockTypeHeader">
            {props.blockType}
          </div>
        </div>
      <div>
        {sectors.map((item,index) => {
          return(
            <SectorContainer
              blockType={props.blockType}
              sector = {item}/>
          )
        })}
      </div>
      {
        props.blockType === "wrapper" ?

        <WrapperGradientSelector editor = {editorMain}/>
        :
        ''
      }

    </Stack>

  )
}
