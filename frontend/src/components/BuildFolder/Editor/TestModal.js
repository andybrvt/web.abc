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

const { Dragger } = Upload;
export const TestModal= (props) => {
  const [modalCondition, triggermodalCondition] = useState(false)

  const [fileList, setFileList] = useState(null)
  {/*
  useEffect(() => {
    if(props.editor !== null){
      props.editor.on('asset:custom', props =>{
        // props.editor.Modal.close();
        console.log("OPEN IMAGE")
        triggermodalCondition(true)
      })

    }
  }, [props.editor])
  */}
  {/*
    editorMain.getComponents().add(

  <img
    width={200}
    height={150}
      src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>)



    */}

    {/*
      props.editor.addComponents(
        <img data-gjs-type="Image" data-gjs-prop="Image" src={fileList[0].thumbUrl}/>, {at: 1}
          )

      */}

    const uploadImage=()=> {
      console.log(fileList)
      console.log(fileList[0].thumbUrl)
      console.log(fileList[0].originFileObj)
      console.log(fileList[0].originFileObj.thumbUrl)
      const component = props.editor.addComponents(
        <img data-gjs-type="image" src={fileList[0].thumbUrl}/>, {at: 2}
          )[0]; 
      // component.set('draggable',false)
      // component.setTraits([{ type: 'Image',}])
      // component.set({
      //  type: 'image',
      //  name: 'Image',
      // });
      props.closeModal()
    }

  const onClose = () =>{

    props.closeModal()
  }


  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };


  const onChange = ({ fileList: newFileList }) => {
    console.log(fileList)
    setFileList(newFileList);

    console.log(newFileList)
  };
  return (
    <div>
    <Modal
      motionPreset='slideInBottom'
      // onClose={onClose}
      isOpen={props.visible}
      scrollBehavior={props.scrollBehavior}
      size = {'3xl'}
    >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Upload Image</ModalHeader>
      <ModalBody pb={10}>
        <Dragger
          style={{marginBottom:50}}
          listType="picture-card"
          onChange={onChange}
           onPreview={onPreview}
          {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Currently only one image upload is supported
      </p>
    </Dragger>
      </ModalBody>

      <ModalFooter>
        <Button onClick={() => uploadImage()} colorScheme='blue' mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>


    </Modal>
    </div>
  );
}
