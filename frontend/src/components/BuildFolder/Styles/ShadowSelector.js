import React, { useState, useEffect } from 'react';
import { Stack, HStack, VStack, Box, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faMoon, faEye, faSave, faSquare, faSquareFull } from '@fortawesome/free-solid-svg-icons'


export const ShadowSelector = (props) => {

  const [editorMain, setEditor] = useState(null);



  useEffect(() => {

    if(props.editor !== null){
      setEditor(props.editor)
    }

  }, [props.editor])

  const onShadow = () => {

    const curStyle = editorMain.getSelected().getStyle()
    curStyle['box-shadow'] = "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
    editorMain.getSelected().setStyle(curStyle)
  }

  const onNoShadow = () => {
    const curStyle = editorMain.getSelected().getStyle()
    curStyle['box-shadow'] ="rgba(0, 0, 0, 0) 0px 0px 0px 0px;"
    editorMain.getSelected().setStyle(curStyle)
  }

  return(
    <HStack>
      <IconButton
        onClick = {onShadow}
        aria-label='Search database' icon={<FontAwesomeIcon icon ={faAdjust} />} />
      <IconButton
        onClick = {onNoShadow}
        aria-label='Search database' icon={<FontAwesomeIcon icon ={faMoon} />} />


    </HStack>
  )
}
