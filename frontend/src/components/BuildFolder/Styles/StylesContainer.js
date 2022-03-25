import React, { useState, useEffect } from 'react';
import {
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import {SectorContainer} from './SectorContainer';
import "./StylesContainer.css";
import { WrapperGradientSelector } from './WrapperGradientSelector';
import { RoundedCornersSelector } from './RoundedCornersSelector';
import { ShadowSelector } from './ShadowSelector';
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
          const montserrat="'Montserrat', sans-serif"
          const opensans="'Open Sans', sans-serif;";
          const merriwether="'Merriweather', sans-serif;";
          fontProperty.setOptions([]);

          const robotoFont = { id: roboto, label: roboto.split(',')[0] };
          const ralewayFont = { id: raleway, label: raleway.split(',')[0] };
          const latoFont = { id: lato, label: lato.split(',')[0] };
          const poppinsFont = { id: poppins, label: poppins.split(',')[0] };
          const merriwetherFont = { id: merriwether, label: merriwether.split(',')[0] };
          const opensansFont = { id: opensans, label: opensans.split(',')[0] };
          const montserratFont = { id: montserrat, label: montserrat.split(',')[0] };

          fontProperty.setOptions([...fontProperty.getOptions(), robotoFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), ralewayFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), latoFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), poppinsFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), opensansFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), merriwetherFont]);
          fontProperty.setOptions([...fontProperty.getOptions(), montserratFont]);
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
        props.blockType === "image" ?

        <div>
          <RoundedCornersSelector editor = {editorMain}/>
          <ShadowSelector editor = {editorMain} />
        </div>

      :

      ""


      }

      {
        props.blockType === "wrapper" ?

        <WrapperGradientSelector editor = {editorMain}/>
        :
        ''
      }

    </Stack>

  )
}
