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
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  HStack
} from '@chakra-ui/react';
import './InitialEditorModal.css'

import { faFacebook, faInstagram, faTwitter, faDiscord  } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const gradientList = [
  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(to right, #DECBA4, #3E5151)',
  'linear-gradient(to right, #8360c3, #2ebf91)',
  'linear-gradient(to right, #8e2de2, #4a00e0)',
  'linear-gradient(to right, #fffbd5, #b20a2c)',
  'linear-gradient(to right, #5433ff, #20bdff, #a5fecb)',
  'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
  'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
  'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
  'linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)',
  'linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)',
  'linear-gradient(to top, #accbee 0%, #e7f0fd 100%)',
  'linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)',
  'linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
  'linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%)',
  'linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)',
  'linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)',
  'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
  'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)'


]

export const InitialEditorModal = (props) => {

  const [editorMain, setEditorMain] = useState(null);

  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [linkedin, setLinkedin] = useState("");


  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])

  const onCloseModal = () => {

    props.onClose();
  }

  const onApplyChanges = () => {


      // const target = editorMain.getSelected();
      const wrapper = editorMain.getWrapper()
      const el = wrapper.find('.social-media-footer-block')[0]
      console.log(el)

      el.components("")
      el.append(
        <div class = "social-media-footer-container">
          {
            facebook !== "" ?

            <div class = "socialMediaIcon">
              <a class = " facebookIcon">
                <i class="fab fa-facebook"></i>
              </a>

            </div>

            :

            ""
          }
          {
            instagram !== "" ?

            <div class = "socialMediaIcon">
              <a class = "instagramIcon">
                <i class="fab fa-instagram"></i>
              </a>

            </div>

            :

            ""

          }
          {
            twitter !== "" ?

            <div class = "socialMediaIcon">
              <a class = "twitterIcon">
                <i class="fa fa-twitter"></i>
              </a>

            </div>
            :

            ""
          }
          {
            discord  !== "" ?
            <div class = "socialMediaIcon">
              <a class = 'discordIcon'>
                <i class="fab fa-discord"></i>
              </a>
            </div>

            :
            ""
          }
          {
            linkedin !== "" ?
            <div class = "socialMediaIcon">
              <a class = 'linkedInIcon'>
                <i class="fab fa-linkedin"></i>
              </a>
            </div>

            :
            ""

          }

        </div>
      )

      el.set("script", `
        function script(props){
          const facebook = document.getElementsByClassName("facebookIcon")[0]
          const instagram = document.getElementsByClassName("instagramIcon")[0]
          const twitter = document.getElementsByClassName("twitterIcon")[0]
          const discord = document.getElementsByClassName("discordIcon")[0]
          const linkedin = document.getElementsByClassName("linkedInIcon")[0]

          if(facebook){
            facebook.href ="${facebook}";
            facebook.target = "_blank"
          }
          if(instagram){
            instagram.href ="${instagram}";
            instagram.target   = "_blank"
          }
          if(twitter){
            twitter.href ="'${twitter}";
            twitter.target = "_blank"
          }
          if(discord){
            discord.href ="${discord}";
            discord.target = "_blank"
          }
          if(linkedin){
            linkedin.href ="${linkedin}";
            linkedin.target = "_blank"
          }
        }
      `)

    props.onClose();
  }

  const setWrapperBackground = (gradient) => {
    console.log(editorMain.Canvas.getBody())
    console.log(editorMain.getWrapper().getEl())
    editorMain.getWrapper().setStyle({
      background: gradient+';'
    })
  }

  return(
    <Modal
      motionPreset = "none"
      onClose={onCloseModal}
      isOpen={props.isOpen}
      // isOpen={true}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Setup basics</ModalHeader>
        <ModalCloseButton />
        <ModalBody>

          <div class = "upperInitialEditorMContainer">
            <div>
              Link your social media to your website
            </div>

            <Stack spacing = {4}>


                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<i class="fab fa-facebook"></i>}
                  />
                <Input
                  value = {facebook}
                  onChange = {e => setFacebook(e.target.value)}
                   type='tel' placeholder='https://' />
                </InputGroup>
              <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<i class="fab fa-instagram"></i>}
                  />
                <Input
                  value = {instagram}
                  onChange = {e => setInstagram(e.target.value)}
                  type='tel' placeholder='https://' />
              </InputGroup>

              <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<i class="fab fa-twitter"></i>}
                  />
                <Input
                  value = {twitter}

                  onChange = {e => setTwitter(e.target.value)}
                  type='tel' placeholder='https://' />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement

                    pointerEvents='none'
                    children={  <i class="fab fa-discord"></i>}
                  />
                <Input
                  value = {discord}
                  onChange = {e => setDiscord(e.target.value)}

                  type='tel' placeholder='https://' />

                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<i class="fab fa-linkedin"></i>}
                  />
                <Input
                  value= {linkedin}
                  onChange = {e => setLinkedin(e.target.value)}

                  type='tel' placeholder='https://' />
                </InputGroup>

            </Stack>

          </div>
          <div>
          </div>

          {/*
            <div class = "lowerInitialEditorMContainer">
              <div>Set background</div>

              <div class = 'wrapperHContainer'>
                {
                  gradientList.map((gradient, index)=> {


                    return(
                      <div style = {{
                          background: gradient,
                        }}
                        onClick = {() => setWrapperBackground(gradient)}
                        class="wrapperHBoxItem"></div>

                    )
                  })
                }

              </div>

            </div>


            <div>
              ***Don't worry, you can change this later, just select the background
              on LAYERS (body) and change.
            </div>



            */}

        </ModalBody>
        <ModalFooter>
          <Button onClick={onCloseModal}>Close</Button>
          <Button
            colorScheme='blue'
            onClick={onApplyChanges}>Apply</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
