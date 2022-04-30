import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { useColorModeValue, Stack, Button,
    Divider,
    Textarea,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Spinner,
    useDisclosure,

    BreadcrumbSeparator,} from '@chakra-ui/react';
import { ChevronRightIcon} from '@chakra-ui/icons'
import * as dateFns from 'date-fns';
import { Header } from '../Header';
import { CreateLayers } from './CreateLayers';
import { ShowNFTGenerated } from './ShowNFTGenerated';
import { useClipboard } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboard, faXMark  } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Steps } from 'antd';
import { useEthers,} from "@usedapp/core";
import axios from 'axios';
import { useMoralisWeb3Api } from "react-moralis";

import './StartCollection.css';

const { Step } = Steps;
export const StartCollection = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure()


    const { account, chainId} = useEthers()


    const { hasCopied, onCopy }  = useClipboard('0x495f947276749ce646')
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [collectionSize, setCollectionSize] = useState(0);
    const [current, setCurrent] = useState(0);

    const [layers, setLayers] = useState([{name: "Base", required: false, images: [], rarity: [] }])

    const [renderedProject, setRenderedProject] = useState({})
    const [renderedImages, setRenderedImages] = useState([])




    const addNewLayer = () => {
      setLayers([...layers, {name: "Base", required: false, images: [], rarity: []}])
    }

    const onNameChange = (e, index) => {
      setLayers(
        layers.map((layer,i) => index === i ? {
          ...layer,
          name: e.target.value
        }: layer)
      )
    }

    const onRarityChange = (e, index, rarityIndex) => {
      console.log(e, index, rarityIndex)
      setLayers(
        layers.map((layer, i)=> index === i ? {
          ...layer,
          rarity: layer.rarity.map((rare, idx)=> idx === rarityIndex ? e : rare)
        }: layer)
      )
    }

    const layerImageChange = (e, index) => {

      const array = Array.from(e.target.files)
      const arrLen =e.target.files.length
      const rarityArr = Array(arrLen).fill(10)


      setLayers(
        layers.map((layer,i) => index === i ? {
          ...layer,
          images: [...layer.images, ...array],
          rarity: rarityArr
        }: layer)
      )

    }



    const generateNFT = () => {

      console.log(layers)
      onOpen()
      const formData = new FormData()
      const configList = []

      layers.map((item, index) => {

        const configObj = {
          id: index+1,
          name: item.name,
          directory: item.name,
          required: item.required,
          rarity_weights: item.rarity
        }
        configList.push(configObj)


        item.images.map((image, i) => {
          formData.append(`${item.name}-image`, image)
        })
      })

      const configStr = JSON.stringify(configList)


      formData.append("config", configStr)
      formData.append("count", collectionSize)
      formData.append("collectionName", name)
      formData.append('owner', account)


      axios.post(`${global.API_ENDPOINT}/nftSetup/GenerateNFTs`,
        formData,
        {
          headers: {"content-type": "multipart/form-data"},



        },

      ).then(res => {
        const project = res.data.project
        const nft_imgs = res.data.nfts_imgs

        setRenderedProject(project)
        setRenderedImages(nft_imgs)

        onClose()
        incrementStep()



      })



    }

    const onInputSetName = (e) => {
        setName(e.target.value)
    }

    const onInputSetDescription = (e) => {
      setDescription(e.target.value)
    }

    const onInputSetCollectionSize = (e) => {
      setCollectionSize(e.target.value)
    }


    const navHome = () => {
        props.history.push("/home")
    }

    const onChange = current => {
        setCurrent(current)
      };

    const incrementStep = () => {
      setCurrent(current + 1)
    }

    const decrementStep = () => {
      setCurrent(current - 1)
    }

  var data = props.data
  return(
    <div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div style = {{
                textAlign: 'center'
              }}>
              <Spinner size='xl' />
              <div>Generating your NFTs</div>

            </div>

          </ModalBody>

        </ModalContent>
      </Modal>

        <div class="startCollectionContainer">

            <div class = "collectionTopContainer">
              <div class="contractBreadCrumb">

              <CloseButton onClick={navHome} size='lg' colorScheme='red'/>
                  <div style={{marginTop:10, display:'flex', flexDirection:'row'}}>
                    Step 1/5


                  </div>
                  <div style={{marginTop:25, marginBottom:25}}>
                    <Steps onChange={onChange} size="small" current={current}>
                        <Step title="Metadata" />
                        <Step title="Layers" />
                        <Step title="Traits" />
                        <Step title="Confirmation" />
                    </Steps>
                  </div>


            {current==0 ?
                <div>
                  <div> Let's grab some info</div>
                  <div>
                    <FormControl>
                        <FormLabel isRequired htmlFor='email'>Title of Collection</FormLabel>
                        <Input
                          value = {name}
                            style={{width:'50%'}} onChange = {onInputSetName} placeholder='Enter name' />
                        <FormLabel isRequired htmlFor='first-name'>Description </FormLabel>
                        <Textarea
                          value = {description}
                          onChange = {onInputSetDescription}
                          style={{width:'50%'}} placeholder='Here is a sample placeholder' />

                        <FormLabel isRequired  htmlFor='email'>Collection Size</FormLabel>
                        <Input
                          value = {collectionSize}
                        onChange = {onInputSetCollectionSize}
                        style={{width:'50%'}} id='email' type='email' />
                    </FormControl>
                  </div>
                </div>



              :

              current === 1 ?
                  <div>
                    <CreateLayers
                      // generateNFT = {generateNFT}
                      layers = {layers}
                      setLayers= {setLayers}
                      addNewLayer = {addNewLayer}
                      onNameChange = {onNameChange}
                      onRarityChange = {onRarityChange}
                      layerImageChange = {layerImageChange}
                    ></CreateLayers>
                  </div>

                :

                current === 2 ?

                <ShowNFTGenerated
                  renderedImages = {renderedImages}
                  />

                :

                <div>Hi 3</div>

              }


              {current==1?
              <div class="collectionButton">

                <div style={{flexDirection:'row', display:'flex'}}>
                  <div class="collectionPreviousButton" >
                    <Button onClick={decrementStep}> Previous</Button>
                  </div>
                  <Button onClick={generateNFT}> Generate NFTs</Button>

                </div>


              </div>

              :
              <div class="collectionButton">
                <Button onClick={incrementStep}> Next</Button>

              </div>
              }

              </div>
            </div>

        </div>

        <Header/>
        <Divider style={{color:'#CBD5E0',}}/>



    </div>

  )
}
