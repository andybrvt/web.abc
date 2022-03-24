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
  Tooltip,
  Tag,
  Image,
  Badge,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay  } from '@fortawesome/free-solid-svg-icons'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
// import {PagesContainer} from './BuildFolder/Pages/PagesContainer'
import ProfileDropDown from './ProfileDropDown';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Lottie from 'react-lottie';
import './EditorHeader.css'
import animationData from './lotties/confetti';



export const EditorHeader = (props) => {
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  return(
    <div className = "editorHeaderContainer">
        <div class="editorHeader">
          <div class="logoFont">web.abc</div>
        </div>
        <div className = "pageDropContainer">
          {/*
          <PagesContainer
            websiteId = {websiteId}
            editor = {editorMain} />
            */}
        </div>

        <div className = "rightHeader">

          <div class="rightHeaderProfile">
            <Tooltip label="Preview" aria-label='A tooltip'>
              <IconButton
                onClick={onOpen}
                // onClick={() => showPreview()}
                size="sm" aria-label='Search database'  icon={<FontAwesomeIcon style={{color:'#1890ff'}} icon={faPlay} />}  >
                // <div>Publish</div>
            </IconButton>

            </Tooltip>

            <Divider style={{height:30, marginRight:25}} type="vertical"/>
            <div>
              <ProfileDropDown/>

            </div>
            <Divider style={{height:30}} type="vertical"/>
            {/*
              <Button style={{marginLeft:10, marginRight:10}} size="sm" colorScheme='blue' variant='solid'>
                Publish
              </Button>
              */}
          </div>

        </div>



        <Modal
          // size="3m"
          // size="3xl"
          size="3xl"
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          // isOpen={true}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent style={{padding:100}} >

            <ModalCloseButton/>

            <ModalBody style={{display:'flex', flexDirection:'row'}} pb={10}>
              <Lottie
                 options={defaultOptions}
                 height={200}
                 width={200}
              />


            </ModalBody>


            <ModalBody pb={6}>
              <Center>
                <div class="summaryHeader">Your website has been deployed! </div>

              </Center>
              <div class="summaryLinkContainer">
                <Center>
                  <Tag>
                  <div class="summaryLink"><a href="www.google.com">www.google.com </a></div>
                  </Tag>
                </Center>
              </div>
              <Center>
                  <div class="twitterHeader"> Share on Twitter </div>
                  <TwitterShareButton
                    style={{marginTop:20}}
                    title={"I just deployed my personal website on @web.abc. Check it out!"}
                    url={"https://peing.net/ja/"}
                    // hashtags={["hashtag1", "hashtag2"]}
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </Center>

            </ModalBody>


          </ModalContent>
          <ModalFooter>

            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </Modal>

    </div>




  )
}
