import React, { useState, useEffect } from 'react';
import {
  Menu, Select,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  Slider,
  Box,
  Button,
  Link,
  FormControl,
  FormLabel,
  Code,
  Modal, ModalBody, ModalFooter, ModalHeader,
  ModalOverlay, ModalCloseButton, ModalContent,
  useDisclosure,
  FormErrorMessage,
  IconButton,
  Input, Divider,
  Text,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Dragger } = Upload;
export const TrashModal= (props) => {
  const [modalCondition, triggermodalCondition] = useState(false)

  const [fileList, setFileList] = useState(null)

  const onCloseModal = () =>{
    props.closeModal()
  }

  const clearCanvas = () => {
    props.editor.runCommand('core:canvas-clear')
      props.onlySave()
      props.closeModal()
  
    
  }



  return (
    <div>
    <Modal
      isCentered
      motionPreset='slideInBottom'
      // onClose={onClose}
      isOpen={props.visible}
      scrollBehavior={props.scrollBehavior}
      size = {'lg'}
    >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Clear canavas</ModalHeader>
      <ModalBody>
        <Text style={{fontSize:18}}>
        Are you sure you want to do this?

        </Text>
          
      </ModalBody>

      <ModalFooter>
        <Button 
        onClick={() => clearCanvas()}
         colorScheme='red' mr={3}>
          Clear
        </Button>
        <Button 
        onClick={onCloseModal}
        >
          Close
          </Button>
      </ModalFooter>
    </ModalContent>


    </Modal>
    </div>
  );
}
