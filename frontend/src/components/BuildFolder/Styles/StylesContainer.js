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
          return(
            <SectorContainer sector = {item}/>
          )
        })}
      </div>

    </Stack>

  )
}
