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
import './PickNFTModal.css'
import $ from 'jquery';
import ImagePickerCustom from '../../UsefulComponents/ImagePicker';
import { useEthers } from "@usedapp/core";
import { Checkbox } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';


export const NFTRoadMapModal  = (props) => {

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [editorMain, setEditorMain] = useState(null)

  const {websiteId, buildType} = useParams()

  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])




  const onCloseModal = () =>{

    props.onClose()
  }



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

        <ModalCloseButton />
        <ModalBody>
          Hi

        </ModalBody>

        <ModalFooter>


        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
