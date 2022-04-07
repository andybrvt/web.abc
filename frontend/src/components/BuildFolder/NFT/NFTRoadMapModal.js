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

  const [numberId, setNumberId] = useState(0)
  const [inputsInfo, setInputsInfo] = useState([{id: 0, text: ""},])

  const {websiteId, buildType} = useParams()

  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])




  const onCloseModal = () =>{

    props.onClose()
  }

  const onAddInputPress = () => {
    const value = numberId
    setNumberId(numberId +1)

    setInputsInfo([...inputsInfo, {id: value+1, text: ""}])


  }
  const enterKeyPress = (event) => {

    if(event.key === "Enter"){

      const value = numberId
      setNumberId(numberId +1)

      setInputsInfo([...inputsInfo, {id: value+1, text: ""}])


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

            {
              inputsInfo.map((item, index) => {

                return(
                  <div key = {item.id} class ="inputContainer">

                    <div>Step #{item.id}</div>
                    <input
                      autoFocus
                      onKeyDown={enterKeyPress}
                      type="text" class="form-control" placeholder={`Step #${item.id}`} aria-label="Username" aria-describedby="basic-addon1" />

                  </div>

                )
              })

            }


        </ModalBody>
        <ModalBody>
          <Button
            onClick = {onAddInputPress}
            colorScheme='blue'>Add New Step</Button>
        </ModalBody>

        <ModalFooter>


        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
