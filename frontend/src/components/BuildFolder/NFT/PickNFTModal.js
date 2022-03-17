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
import ImagePicker from 'react-image-picker'
import './PickNFTModal.css'


export const PickNFTModal  = (props) => {


  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [nft, setNft] = useState([])
  const [nftImgs, setNFTImgs] = useState([])
  const [editorMain, setEditorMain] = useState(null)

  const [images, setImages] = useState([])

  useEffect(() => {

    console.log(props.isOpen)
    if(props.isOpen){
      fetchNFTs()
    }
  }, [props.isOpen])


  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])

  const fetchNFTs = async() => {
    const options = {
      chain: "eth",
      address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
    }


    const nftList = await Web3Api.account.getNFTs(options);
    setNft(nftList.result)

    nftList.result.forEach(function(nft){
      let url = fixURL(nft.token_uri)


      fetch(url)
      .then(response => response.json())
      .then(data => {
        setNFTImgs(oldArray => [...oldArray, {img: fixURL(data.image), name: data.name}])
        // console.log(data.image)

        // $("#content").html($("#content").html()+"<img width=100 height=100 src='"+fixURL(data.image)+"'/>" )

      })

    })




  }


  const fixURL = (url) => {
    if(url !== null && url !== undefined){
      if(url.startsWith("ipfs")){
        console.log(url.split("ipfs://").slice(-1)[0])
        return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://").slice(-1)[0]
      }
      else {
        return url+"?format=json"
      }

    }
  }


  const onPickImages = (list) => {
    console.log(list)
    setImages(list)
  }

  const onApplyImages = () => {

    const target = editorMain.getSelected()

    images.forEach(img => {
      console.log(img)
      target.append(
        <div class = "nftContainers">

          <div class = "nftCards">
            <img class = "nftImages" src = {img.src}/>
          </div>

          <div class = "nftName">

            <div class = "nftNameText">This is a name of the nft</div>

          </div>


        </div>

      )


    })
    // target.append(<div>did this work</div>)
    props.onClose()
  }

  return(
    <Modal
      motionPreset = "none"
      onClose={props.onClose}
      isOpen={props.isOpen}
      scrollBehavior={props.scrollBehavior}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
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


          <ImagePicker
            images = {nftImgs.map((image, index) => ({src:image.img, value:index}))}
            onPick = {onPickImages.bind(this)}
            multiple
            />


        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Close</Button>
          <Button
            colorScheme='blue'
            onClick={onApplyImages}>Apply</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
