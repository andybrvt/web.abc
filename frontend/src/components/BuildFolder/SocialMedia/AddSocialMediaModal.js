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
  Stack
} from '@chakra-ui/react';


// Modal to add in social media for the website
// once it it set, you will set the social media properly
export const AddSocialMediaModal = (props) => {

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

  const onApplySocialMedia = () => {

    const target = editorMain.getSelected();
    console.log(target)
    console.log(facebook)
    target.components("")
    target.append(
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
              <i class="fab fa-twitter"></i>
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

    target.set("script", `
      function script(props){
        const facebook = document.getElementsByClassName("facebookIcon")[0]
        const instagram = document.getElementsByClassName("instagramIcon")[0]
        const twitter = document.getElementsByClassName("twitterIcon")[0]
        const discord = document.getElementsByClassName("discordIcon")[0]
        const linkedin = document.getElementsByClassName("linkedInIcon")[0]

        if(facebook){
          facebook.href ="https://www.facebook.com/andy.le.169/";
          facebook.target = "_blank"
        }
        if(instagram){
          instagram.href ="https://www.facebook.com/andy.le.169/";
          instagram.target = "_blank"
        }
        if(twitter){
          twitter.href ="https://www.facebook.com/andy.le.169/";
          twitter.target = "_blank"
        }
        if(discord){
          discord.href ="https://www.facebook.com/andy.le.169/";
          discord.target = "_blank"
        }
        if(linkedin){
          linkedin.href ="https://www.facebook.com/andy.le.169/";
          linkedin.target = "_blank"
        }
      }
    `)

    props.onClose()


  }

  return(
    <Modal
      motionPreset = "none"
      onClose={onCloseModal}
      isOpen={props.isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add in your social media. Dont worry about the blank ones</ModalHeader>
        <ModalCloseButton />
        <ModalBody>


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
