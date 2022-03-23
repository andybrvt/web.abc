import React, { useState, useEffect } from 'react';
import { Stack, HStack, VStack, Box, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay, faTrash, faEye, faSave, faSquare, faSquareFull } from '@fortawesome/free-solid-svg-icons'


export const RoundedCornersSelector = (props) => {

  const [editorMain, setEditor] = useState(null);



  useEffect(() => {

    if(props.editor !== null){
      setEditor(props.editor)
    }

  }, [props.editor])

  const onRounded = () => {
    editorMain.getSelected().setStyle({
      "border-radius": '25px;'
    })
  }

  const onSharp = () => {
    editorMain.getSelected().setStyle({
      "border-radius": '0px;'
    })
  }

  return(
    <HStack>
      <IconButton
        onClick = {onRounded}
        aria-label='Search database' icon={<FontAwesomeIcon icon ={faSquare} />} />
      <IconButton
        onClick = {onSharp}
        aria-label='Search database' icon={<FontAwesomeIcon icon ={faSquareFull} />} />


    </HStack>
  )
}
