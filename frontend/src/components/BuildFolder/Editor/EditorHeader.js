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
  Spinner,
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

  const [showLoader, setShowLoader] = useState(true)
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

    const openCallDouble = () =>{
      props.storeEditor()
      setTimeout(() => {
        setShowLoader(false)

      }, 2500)
      onOpen(true)
    }

    const closeCallDouble = () =>{
      setShowLoader(true)
      onClose(true)
    }

  return(
    <div className = "editorHeaderContainer">
        <div class="editorHeader">

          <div class="logoContainer">

            <a class = "logoHref" href= "/home">web.abc</a>


          </div>

          <div className = "pageDropContainer">
            {/*
            <PagesContainer
              websiteId = {websiteId}
              editor = {editorMain} />
              */}
          </div>

          <div className = "rightHeader">
              <div class = "rightHeaderItem">
                <Tooltip label="Preview" aria-label='A tooltip'>

                  <IconButton
                    onClick={
                    openCallDouble
                    }
                    aria-label='Search database'  icon={<FontAwesomeIcon style={{color:'#1890ff'}} icon={faPlay} />}  >
                </IconButton>
                </Tooltip >
              </div>
              <div class = "rightHeaderItem">
                <Button>Deploy</Button>
              </div>
              <div class = "rightHeaderItem">
                <ProfileDropDown/>
              </div>
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
            onClose={closeCallDouble}
          >
            <ModalOverlay />
            <ModalContent style={{padding:100}} >
              <ModalCloseButton/>
              {showLoader?
                <div class="outer">
                  <div>
                    <div class="inner">
                      <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                      />
                    </div>
                    <div class="">
                    <div class="summaryHeader">Deploying website... </div>
                    </div>
                  </div>
                </div>
              :
              <div style={{height:450}}>
                <ModalBody style={{display:'flex', flexDirection:'row'}} pb={10}>
                  <Lottie
                     options={defaultOptions}
                     height={200}
                     width={200}
                  />
                  <div class="loadingio-spinner-spin-2whtxrqb0wh"><div class="ldio-acynehsphbr">
                  </div> </div>

                </ModalBody>


                <ModalBody pb={6}>
                  <Center>
                    <div class="summaryHeader">Your website has been deployed! </div>

                  </Center>
                  <div class="summaryLinkContainer">
                    <Center>
                      <Tag>
                      <div class="summaryLink">

                        <a href={"/previewPage/" + props.websiteId +"/"+ props.currentPage} >{"localhost:3000/previewPage/" + props.websiteId +"/"+ props.currentPage} </a>
                      </div>
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


              </div>

              }

            </ModalContent>
            <ModalFooter>

              <Button onClick={closeCallDouble}>Close</Button>
            </ModalFooter>
          </Modal>


        </div>



  )
}
