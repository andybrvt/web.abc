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

export const InitialEditorModal = (props) => {


  const onCloseModal = () => {

    props.onClose();
  }

  const onApplyChanges = () => {

    props.onClose();
  }

  console.log(props.isOpen, 'this modal here')
  return(
    <Modal
      motionPreset = "none"
      onClose={onCloseModal}
      isOpen={props.isOpen}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Set up so basics</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            Put some social media so people can find you. Choose a background that

          </div>

          <Stack spacing = {4}>

            {/*
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





              */}


          </Stack>


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
