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
  Input,
  Textarea
} from '@chakra-ui/react';
import { useMoralis, useMoralisWeb3Api, useMoralisCloudFunction } from "react-moralis";
import './PickNFTModal.css'
import $ from 'jquery';
import ImagePickerCustom from '../../UsefulComponents/ImagePicker';
import { useEthers } from "@usedapp/core";
import { Checkbox } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import './NFTRoadMapModal.css';
import { CloseIcon } from '@chakra-ui/icons'


export const NFTRoadMapModal  = (props) => {

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [editorMain, setEditorMain] = useState(null)

  const [numberId, setNumberId] = useState(0)
  const [inputsInfo, setInputsInfo] = useState([{id: 0, title: "", text: ""},])

  const {websiteId, buildType} = useParams()

  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])




  const onCloseModal = () =>{

    setNumberId(0)
    setInputsInfo([{id: 0, title: "", text: ""},])
    props.onClose()
  }

  const onAddInputPress = () => {
    const value = numberId
    console.log(value)
    setNumberId(numberId +1)

    setInputsInfo([...inputsInfo, {id: value+1,  title: "",text: ""}])


  }

  const onInputChange = (e, id, type) => {


    if(type === "input"){
      setInputsInfo(
        inputsInfo.map(input => input.id === id ? {
            ...input,
            title: e.target.value
          } : input
        )
      )
    }

    if(type === "text"){
      setInputsInfo(
        inputsInfo.map(input => input.id === id ? {
            ...input,
            text: e.target.value
          } : input
        )
      )
    }


  }

  const enterKeyPress = (event) => {

    if(event.key === "Enter"){

      const value = numberId
      setNumberId(numberId +1)

      setInputsInfo([...inputsInfo, {id: value+1,  title: "",text: ""}])


    }
  }


  const onSubmitRoadMap = () => {

    console.log(inputsInfo)
    const selectedBlock = editorMain.getSelected()

    inputsInfo.map((item) => {

      selectedBlock.append(
        <div>
          <div>{item.title}</div>
          <div>{item.text}</div>
        </div>
      )
    })


    onCloseModal()

  }

  const deleteInput = (itemId) => {
    const newList = inputsInfo.filter((item) => item.id !== itemId)

    if(numberId !== 0){
      setNumberId(numberId -1)

    }
    setInputsInfo(newList)
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

                    <div className = "stepsHeader">
                      <div>Step #{item.id+1}</div>
                      <div onClick = {() => deleteInput(item.id)} className = "removeX">
                        <CloseIcon color="red.500" />
                      </div>
                    </div>

                    <Input
                      onChange = {(e) => onInputChange(e,item.id, 'input')}
                      autoFocus
                      onKeyDown={enterKeyPress}
                      type="text" class="form-control" placeholder={`Step #${item.id}`} aria-label="Username" aria-describedby="basic-addon1" />

                    <div class = "textAreaContainer">
                      <Textarea
                        onChange = {(e) => onInputChange(e,item.id, 'text')}
                        placeholder='What are you gonna do?' />
                    </div>
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
          <Button onClick={onCloseModal}>Close</Button>
          <Button
            colorScheme='blue'
            onClick={onSubmitRoadMap}>Apply</Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
