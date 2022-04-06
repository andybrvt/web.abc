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
import { useMoralis, useMoralisWeb3Api, useMoralisCloudFunction } from "react-moralis";


export const SellNFTModal = (props) => {


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
        <ModalHeader>Choose which NFT you want to display on your website</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className = "nftHolder">
            {/*
              nftImgs.map((image, index) => {
                console.log(image)
                return(
                  <img width={100} height={100} src={image}/>
                )
              })
            */}







          </div>

          {/*
            <ImagePicker
              images = {nftImgs.map((image, index) => ({src:image.img, value:index}))}
              onPick = {onPickImages.bind(this)}
              multiple
              />

            */}



            <ImagePickerCustom
              nftImgs = {nftImgs}
              onPick = {onPickImages}
              allSelected = {allSelected}
               />

        </ModalBody>
        <ModalFooter>
          
          <Button onClick={onCloseModal}>Close</Button>
          <Button
            colorScheme='blue'
            onClick={onApplyImages}>Apply</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
