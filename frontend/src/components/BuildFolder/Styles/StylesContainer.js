import React, { useState, useEffect } from 'react';
import {
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import {SectorContainer} from './SectorContainer';
import "./StylesContainer.css";
export const StylesContainer = (props) => {

  const [editorMain, setEditor] = useState(null);
  const [sectors, setSectors] = useState([]);
  if(props.editor !== null){
  console.log(props.editor)
  const sector1=props.editor.StyleManager.getSector('typography');
  console.log(sector1)
  const property = sector1.getProperties()
  console.log(property)
}
  // return function in useEffect will be the unmount
  useEffect(() => {
    if(props.editor !== null){
      const tempEditor = props.editor
      setEditor(props.editor)
      props.editor.on('style:custom', props =>{
        setSectors(tempEditor.StyleManager.getSectors({visible:true}))
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
      <div class = "styles-manager">
        {sectors.map((item,index) => {
          console.log(item)
          return(
            <SectorContainer
              blockType={props.blockType}
              sector = {item}/>
          )
        })}
      </div>

    </Stack>

  )
}
