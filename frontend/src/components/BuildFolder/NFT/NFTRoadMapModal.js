import React, { useState, useEffect, useRef } from 'react';
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
  Input
} from '@chakra-ui/react';
import { useMoralis, useMoralisWeb3Api, useMoralisCloudFunction } from "react-moralis";
import './PickNFTModal.css'
import $ from 'jquery';
import ImagePickerCustom from '../../UsefulComponents/ImagePicker';
import { useEthers } from "@usedapp/core";
import { Checkbox } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import './NFTRoadMapModal.css';

export const NFTRoadMapModal  = (props) => {

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [editorMain, setEditorMain] = useState(null)
  const [inputs, setInputs] = useState({1:"",})

  const {websiteId, buildType} = useParams()

  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])




  const onCloseModal = () =>{

    props.onClose()
  }

  const enterKeyPress = (event) => {

    console.log(event.key)
    if(event.key === "Enter"){

      const container = document.getElementById("roadMapInputContainer")
      console.log(container)
      const input =  document.createElement("input");
      input.className = "form-control";
      input.type = "text";
      input.placeholder = "step";

      const inputContainer = document.createElement("div");
      inputContainer.className = "inputContainer";

      inputContainer.append(input)
      container.append(inputContainer)




    }
  }



  return(
    <Modal
      motionPreset = "none"
      onClose={onCloseModal}
      isOpen={props.isOpen}
      scrollBehavior={props.scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent>

        <ModalCloseButton />
        <ModalBody>
            <div>NFT Project RoadMap</div>

            <div id ="roadMapInputContainer">
              <input
                onKeyDown={enterKeyPress}
                type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

            </div>

        </ModalBody>

        <ModalFooter>


        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
