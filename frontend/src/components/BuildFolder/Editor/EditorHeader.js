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
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay  } from '@fortawesome/free-solid-svg-icons'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
// import {PagesContainer} from './BuildFolder/Pages/PagesContainer'
import ProfileDropDown from './ProfileDropDown';
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { useLottie } from "lottie-react";
export const EditorHeader = (props) => {
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
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
          size="4xl"
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>You did it! </ModalHeader>
            <ModalCloseButton />

            <ModalBody style={{display:'flex', flexDirection:'row'}} pb={10}>

              <Box style={{marginRight:50}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'} alt={'Rear view of modern home with pool'} />
                <Box p='6'>
                    <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                      <Badge borderRadius='full' px='3' colorScheme='teal'>
                        New
                      </Badge>
                      <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                      >
                        Time &bull; 10 minutes
                      </Box>
                    </Box>
                    <div
                      style={{fontWeight:'bold', fontSize:20}}
                    >
                      Personal Website
                    </div>
                    <div style={{marginTop:5}}>
                      Show yourself on the blockchain

                    </div>

                  </Box>
              </Box>



            </ModalBody>


            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Your website has been deployed!</FormLabel>
                  <TwitterShareButton
                    title={"I just deployed my personal website on @web.abc. Check it out!"}
                    url={"https://peing.net/ja/"}
                    // hashtags={["hashtag1", "hashtag2"]}
                  >
                    <TwitterIcon size={32} round />
                    Twitterでもshare
                  </TwitterShareButton>
              </FormControl>

            </ModalBody>

            <ModalFooter>

              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

    </div>




  )
}
