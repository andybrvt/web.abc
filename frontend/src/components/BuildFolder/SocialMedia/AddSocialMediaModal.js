import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';


// Modal to add in social media for the website
// once it it set, you will set the social media properly
export const AddSocialMediaModal = (props) => {

  const [editorMain, setEditorMain] = useState(null);


  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])

  const onCloseModal = () => {

    props.onClose();
  }

  const onApplySocialMedia = () => {

  }

  return(
    <Modal
      motionPreset = "none"
      onClose={onCloseModal}
      isOpen={props.isOpen}
      scrollBehavior={props.scrollBehavior}
      size = {'6xl'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add in your social media. Dont worry about the blank ones</ModalHeader>
        <ModalCloseButton />
        <ModalBody>






        </ModalBody>
        <ModalFooter>

          <Button onClick={onCloseModal}>Close</Button>
          <Button
            colorScheme='blue'
            onClick={onApplySocialMedia}>Apply</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )



}
