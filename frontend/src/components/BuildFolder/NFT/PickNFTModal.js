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


export const PickNFTModal  = (props) => {

  const {activateBrowserWallet, account, chainId } = useEthers();

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [nft, setNft] = useState([])
  const [nftImgs, setNFTImgs] = useState([])
  const [editorMain, setEditorMain] = useState(null)
  const [allSelected, setAllSelected] = useState(false)

  const [images, setImages] = useState([])

  const [curUrl, setCurUrl] = useState("");

  const {websiteId, buildType} = useParams()


  const {fetch} = useMoralisCloudFunction(
    "fetchJSON",
    {theUrl: curUrl},
    { autoFetch: false }

  )

  useEffect(() => {

    console.log(props.isOpen)
    if(props.isOpen){
      fetchNFTsCloud()
    }
  }, [props.isOpen])


  useEffect(() => {
    if(props.editor !== null){
      setEditorMain(props.editor)
    }
  }, [props.editor])


  useEffect(() => {

    fetch({
      onSuccess: (data) => {

        console.log(data)
        if(data.status === 302){
          const newUrl = data.headers.location
          setCurUrl(newUrl)
        } else {

          setNFTImgs(oldArray => [...oldArray, {img: fixURL(data.data.image), name: data.data.name}])

        }


      },
      onError: (err) => console.log(curUrl, 'here is the errors')

    })
  }, [curUrl])


  const fetchNFTsCloud = async() => {
    const options = {
      chain: "eth",
      // address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
      address: "0x53a19F44548182602b3B665AB9B9717735Ed53be",
      // address: "0x53a19F44548182602b3B665AB9B9717735Ed53be",

    };

    const nftList = await Web3Api.account.getNFTs(options);
    console.log(nftList)
    setNft(nftList.result)


    nftList.result.forEach( async(nft) => {

        const metadata = JSON.parse(nft.metadata)

        if(metadata !== null){
          if(metadata.name === undefined){
            console.log(metadata)
          }

          setNFTImgs(oldArray => [...oldArray, {img: fixURL(metadata.image), name: metadata.name}])


        } else if(nft.token_uri !== null){
          let url = fixURL(nft.token_uri)

          setCurUrl(url)


        }



      })


  }




  const fetchNFTs = async() => {
    const options = {
      chain: "eth",
      // address: account,
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

  const onSelectAll = () => {
    setAllSelected(true)
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


    setNft([])
    setNFTImgs([])
    setImages([])
    props.onClose()
  }



    const onApplySellImages = () => {



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

            <div class = "buyButtonContainer">
              <div>0.5 eth</div>
              <div>
                <button type="button" class="btn btn-primary">Buy</button>
              </div>

            </div>


          </div>

        )


      })


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
        {
          buildType === "personal" ?

          <ModalHeader>Choose which NFT you want to display on your website</ModalHeader>

          :

          <ModalHeader>Choose which NFT you want to sell on your website</ModalHeader>


        }
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
          {/*
            <Checkbox  isChecked = {allSelected} onChange= {(e) => setAllSelected(e.target.checked)} >Select All</Checkbox>

            */}
          <Button onClick={onCloseModal}>Close</Button>
          <Button
            colorScheme='blue'
            onClick={
              buildType === "personal" ?

              onApplyImages

              :

              onApplySellImages

            }>Apply</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
