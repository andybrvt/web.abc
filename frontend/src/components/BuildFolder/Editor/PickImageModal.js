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
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import $ from 'jquery';

import { useEthers } from "@usedapp/core";
import { Checkbox } from '@chakra-ui/react'


export const PickImageModal  = (props) => {

  const {activateBrowserWallet, account, chainId } = useEthers();

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [nft, setNft] = useState([])
  const [nftImgs, setNFTImgs] = useState([])
  const [editorMain, setEditorMain] = useState(null)
  const [allSelected, setAllSelected] = useState(false)

  const [images, setImages] = useState([])

  useEffect(() => {



  }, [props.isOpen])


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
      <div>text</div>
    </Modal>
  )
}
