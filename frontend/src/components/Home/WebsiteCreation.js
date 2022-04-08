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
  Center,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined, InboxOutlined} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import axios from 'axios';
const { Dragger } = Upload;



export const WebsiteCreation= (props) => {
  const [profileURL, setProfileURL] = useState(false)
  const [loading, setLoading] = useState(false)   // loading
  
  const [fileList, setFileList] = useState(false)   // loading
  const [username, setUsername] = useState(null)   // loading
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

  };

  const createWebSite = (type) => {

    // Now you can create your website
    const formData = new FormData()
    formData.append("owner", props.account)
    formData.append("name", username)
    formData.append('type', type)

    axios.post(`${global.API_ENDPOINT}/builder/createWebsite`, formData)
    .then(res => {

      props.history.push(`/build/${res.data}/${type}`, {
        websiteId: res.data
      })

    })

  }


  return (
    <div>
        <Center>

          <div style={{width:600}}>

          {/* <QueueAnim
            style={{display:'flex', flexDirection:'row'}}
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}
            delay={300}> */}
            <div class="addLinkHeader">Enter profile picture</div>
            <Dragger
              style={{marginBottom:50}}
              listType="picture-card"
              onChange={onChange}
                // onPreview={onPreview}
              {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Only the first image will be considered
              </p>
            </Dragger>

            <Image
            width={200}
            src={fileList[0]?fileList[0].url:null}
          />



            <div class="addLinkHeader">Enter your username</div>
                <Input 
                onChange = {(e)=>{setUsername(e.target.value)}} 
                placeholder='Enter username' />
       
          {/* </QueueAnim> */}
          </div>
          <div class="positionFooter"> 
            <Button onClick={() => createWebSite("personal")} colorScheme='blue' mr={3}>
              Next
            </Button>
            <Button 
            // onClick={()=>setTriggerChoice("")}
            >Back</Button>
          </div>
        </Center>
    </div>
  );
}
