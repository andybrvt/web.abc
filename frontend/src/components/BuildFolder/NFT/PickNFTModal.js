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
import './PickNFTModal.css'
import $ from 'jquery';
import ImagePicker from 'react-image-picker'
import ImagePickerCustom from '../../UsefulComponents/ImagePicker';
import { useEthers } from "@usedapp/core";



export const PickNFTModal  = (props) => {

  const {activateBrowserWallet, account, chainId } = useEthers();

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
      address: "0xbaad3c4bc7c33800a26aafcf491ddec0a2830fab",
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

  const onCloseModal = () =>{
    setNft([])
    setNFTImgs([])
    setImages([])
    props.onClose()
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

            <div class = "nftNameText">{img.name}</div>

          </div>


        </div>

      )


    })
    // target.append(<div>did this work</div>)
    setNft([])
    setNFTImgs([])
    setImages([])
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
