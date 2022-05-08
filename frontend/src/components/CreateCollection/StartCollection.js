import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import {
  useColorModeValue, Stack, Button,
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
    Spinner,
    useDisclosure,
    Tooltip,
    Box,
    HStack,
    BreadcrumbSeparator,} from '@chakra-ui/react';
import * as dateFns from 'date-fns';
import { Header } from '../Header';
import { CreateLayers } from './CreateLayers';
import { ShowNFTGenerated } from './ShowNFTGenerated';
import { CreateContractCollection } from './CreateContractCollection';
import { useClipboard } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboard, faXMark  } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Steps } from 'antd';
import { useEthers, useEtherBalance, useCall, useCalls, useContractCall, useContractFunction} from "@usedapp/core";
import { Contract } from '@ethersproject/contracts'
import Web3 from 'web3'
import { useMoralis, useMoralisWeb3Api, useMoralisCloudFunction } from "react-moralis";
import { CopyIcon } from '@chakra-ui/icons'
import { useParams } from 'react-router-dom';

import axios from 'axios';
import './StartCollection.css';
import CoreCreationContract from '../../chain-info/contracts/CoreCreationContract';
import BasicERC721a from '../../chain-info/contracts/BasicERC721a';

import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';
import {CopyToClipboard} from 'react-copy-to-clipboard';


require('dotenv').config()
var fs = require('fs');


const PINATA_BASE_URL = "https://api.pinata.cloud"
const endpoint = "/pinning/pinFileToIPFS"
const endpointJson = "/pinning/pinJSONToIPFS"


{/*
  Before all this
  --> Create the website object


  Steps of how this whole process goes
  1--> put name, description, collection number
  2--> generate the NFT art
  3--> Create project
  4--> Now generate the metadata
  5--> Add metadata to each of the images project
  6--> Upload images to ipfs --> upload images to metadata --> then to ipfs
  7--> Get baseURI
  8--> create contract with adding the baseURI in


  */}

const { Step } = Steps;
export const StartCollection = (props) => {


    const {websiteId} = useParams()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isMetadataOpen, onOpen:onMetadataOpen, onClose:onMetadataClose } = useDisclosure()
    const { isOpen:isContractOpen, onOpen:onContractOpen, onClose:onContractClose} = useDisclosure()
    const { isOpen:isFinishedContractOpen, onOpen:onFinishedContractOpen, onClose:onFinishedContractClose} = useDisclosure()

    const [recentContract, setRecentContract] = useState("")
    const { account, chainId} = useEthers()
    const { web3 } = useMoralis()
    const Web3Api = useMoralisWeb3Api()
    // Page 1
    const { hasCopied, onCopy }  = useClipboard('0x495f947276749ce646')
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [collectionSize, setCollectionSize] = useState(0);
    const [current, setCurrent] = useState(0);


    // Page 2
    const [layers, setLayers] = useState([{name: "Base", required: false, images: [], rarity: [] }])

    // Page 3
    const [renderedProject, setRenderedProject] = useState({})
    const [renderedImages, setRenderedImages] = useState([])

    // Page 4
    const [contractName, setContractName] = useState("")
    const [contractSymbol, setContractSymbol] = useState("")
    const [maxMint, setMaxMint] = useState(0)
    const [maxSupply, setMaxSupply] = useState(0)
    const [mintRate, setMintRate]= useState(0)
    const [baseURI, setBaseURI] = useState("")


    // in order for a contract to work you are gonna need abi and address
    const { abi } = CoreCreationContract

    // here is the address
    const coreCreationContractAddress = chainId ? networkMapping[String(chainId)]['CoreCreationContract'][0] : constants.AddressZero
    // convert the abi to interface
    const coreCreationContractInterface = new utils.Interface(abi)
    // Now you have both the abi and interface you can make the interface object
    const coreCreationContract = new Contract(coreCreationContractAddress, coreCreationContractInterface)



    // This is just to test the mint function
    const basicERC721a_abi  = BasicERC721a['abi']
    const basicERC721aAddress = "0xD6A145812CAc76A174370a75535bcd83674E80db"
    const basicERC721aInterface = new utils.Interface(basicERC721a_abi)
    const basicERC721aContract = new Contract(basicERC721aAddress, basicERC721aInterface)






    const fetchNFTsCloud = async() => {
      const options = {
        chain: "rinkeby",
        // address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
        address: account,
        // address: "0x53a19F44548182602b3B665AB9B9717735Ed53be",

      };

      const nftList = await Web3Api.account.getNFTs(options);
      console.log(nftList)

    }


    // Now you can use the core creation function
    const { send: createERC721, state: createERC721State } = useContractFunction(
      coreCreationContract,
      "createBasicERC721",
      {transactionName: "createBasicERC721"}
    )

    const { send: createERC721A, state: createERC721AState } = useContractFunction(
      coreCreationContract,
      "createBasicERC721A",
      {transactionName: "createBasicERC721A"}
    )


    const {send: mint, stat: mintState} = useContractFunction(
      basicERC721aContract,
      "mint",
      {transactionName: 'mint'}
    )


    const createBasicERC721Press = (e) => {
      // createERC721("Test", "TEST", )
      const vrf = global.WEB3_CONSTANTS[String(chainId)]['vrf_coordinator']
      const link_token = global.WEB3_CONSTANTS[String(chainId)]['link_token']
      const keyhash = global.WEB3_CONSTANTS[String(chainId)]['keyhash']

      createERC721("Test", "TEST", vrf, link_token, keyhash)
      console.log(createERC721State, 'stuff')

    }



    const getERC721Contracts = useCall({
      contract: coreCreationContract,
      method: "getERC721Contracts",
      args: [account, ]

    })

    useEffect(() => {

      if(getERC721Contracts !== undefined){
        const contractListLength = getERC721Contracts.value[0].length
        setRecentContract(getERC721Contracts.value[0][contractListLength-1])


      }
    }, [getERC721Contracts])





    // name
    // symbol_
    // maxMint,
    // maxSupply_,
    // mintRate,
    // baseURI

    // change baseuri latter
    const createBasicERC721APress = (e) => {

      if(name !== "" && contractSymbol !== ""){
        console.log(baseURI)
        const price = utils.parseEther(mintRate.toString())
          createERC721A(
            name,
            contractSymbol,
            maxMint.toString(),
            maxSupply.toString(),
            Web3.utils.toWei(mintRate, 'ether').toString(),
            baseURI,
          )
      }
      else {
        alert("fill in the names")
      }

    }





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


    const uploadImagesToIPFS = async() => {

      onMetadataOpen()
      let ipfsArray = []
      let promises = []

      renderedImages.map((item, index) => {

        const name = item.nftImage.split('/')
        const fileName = "image/"+name.slice(-2, name.length).join("/")
        ipfsArray.push({
          path:fileName,
          content: item.base64Img
        })

      })

      const options = {
        abi: ipfsArray
      }
      const path = await Web3Api.storage.uploadFolder(options)
      uploadMetadataToIPFS(path[0])

    }


    const uploadMetadataToIPFS = async(baseURI) => {
    // const uploadMetadataToIPFS = async() => {


      const projectId = renderedProject.id
      const projectName = renderedProject.name
      const formData = new FormData()
      const base_uri_arry = baseURI.path.split("/")
      base_uri_arry.pop()
      const real_base_uri = base_uri_arry.join("/") // put back later

      // const test_projectId = 160
      // const test_projectName = "name"
      // const test_base_uri = "https://gateway.moralisipfs.com/ipfs/QmeqRTuc5pamTrb4W5wA7dNSk9PzcUzQ1w8BNBDtwb2AN9/image/160"
      formData.append("projectId", projectId)
      formData.append("base_name", projectName)
      formData.append("base_uri", real_base_uri)


      // generate the metadata for the images
      axios.post(`${global.API_ENDPOINT}/nftSetup/GenerateMetadata`, formData)
      .then(async res => {


          let ipfsArray = []
          res.data.map((item, index ) => {

            console.log(item.metaData, 'metadata here')
            if(item.metaData !== ""){
              ipfsArray.push(
                {
                  path: `metadata/${index}`,
                  content: JSON.parse(item.metaData)
                }
              )

            }


          })

          const options = {
            abi: ipfsArray
          }

          // Upload t IPFS
          const path = await Web3Api.storage.uploadFolder(options)
          const baseMetaURI = path[0]
          const base_meta_uri_arry = baseMetaURI.path.split("/")
          base_meta_uri_arry.pop()
          const real_meta_base_uri = base_meta_uri_arry.join("/")+'/'


          const projectId = renderedProject.id
          const formData = new FormData()

          formData.append("projectId", projectId)
          formData.append("baseURI", real_meta_base_uri)
          axios.post(`${global.API_ENDPOINT}/nftSetup/SaveBaseURI`, formData)
          .then(res => {


            setBaseURI(res.data)
            onMetadataClose()
            incrementStep()

          })

      })

    }




    useEffect(() =>{
      if(createERC721AState.status === "Success"){
        onContractClose()
        onFinishedContractOpen()
      }
      if(createERC721AState.status === "Mining"){
        console.log('yup ypu')
        onContractOpen()
      }

    },[createERC721AState])
    // Transaction signature --> mining --> success


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

    const onInputChange = (e) => {

      const inputType = e.target.placeholder

      if(inputType === "Name"){
        setName(e.target.value)
      }

      if(inputType === "Symbol"){
        setContractSymbol(e.target.value)
      }
      if(inputType === "Max mint limit"){
        setMaxMint(e.target.value)
      }
      if(inputType === "Total Supply"){
        setMaxSupply(e.target.value)
      }
      if(inputType === "Cost in ether"){
        setMintRate(e.target.value)
      }





    }


    {/*
      const testMint = () => {
        mint(1, {value: utils.parseEther("0.02")})

      }
      */}



  // Function will redirect to the website will adding in the
  // contract address to project, get project id and then add website
  // to project
  const proceedToWebsite = () => {
    const projectId = renderedProject.id

    const formData = new FormData()

    formData.append("projectId", projectId)
    formData.append("contract", recentContract)
    formData.append("websiteId", websiteId)
    axios.post(`${global.API_ENDPOINT}/nftSetup/ConnectContractWebsiteProject`, formData)
    .then(res => {
      console.log(res.data)
      props.history.push(`/build/${res.data.websiteId}/${res.data.websiteType}`,{
        websiteId: res.data.websiteId
      })
    })

  }

  var data = props.data
  return(
    <div>

      <Modal isOpen={isOpen}>
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

      <Modal isOpen={isMetadataOpen}>
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

      <Modal isOpen={isContractOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div style = {{
                textAlign: 'center'
              }}>
              <Spinner size='xl' />
              <div>Creating smart contract</div>

            </div>

          </ModalBody>

        </ModalContent>
      </Modal>

      <Modal size={"lg"} isOpen={isFinishedContractOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contract Created!</ModalHeader>

          <ModalBody>
            <Stack spacing = {4}>
              <div>Here is your contract address</div>
              <div>
                <CopyToClipboard
                  onCopy = {() => console.log('copied true')}
                  text= {recentContract}>
                    <div>
                      <Box as='button' borderRadius='md' bg='teal' color='white' px={4} h={8}>
                        <HStack spacing = "10px">
                          <CopyIcon />
                          <div>
                            {recentContract}
                          </div>

                        </HStack>

                      </Box>
                    </div>


                </CopyToClipboard>
              </div>

            </Stack>


          </ModalBody>

          <ModalFooter>

              <Button onClick= {proceedToWebsite} >Let's go build your website</Button>
              {/*
                <Button onClick= {testMint} >Test Mint</Button>

                */}

         </ModalFooter>

        </ModalContent>
      </Modal>



        <div class="startCollectionContainer">

            <div class = "collectionTopContainer">
              <div class="contractBreadCrumb">

              <CloseButton onClick={navHome} size='lg' colorScheme='red'/>
                <div style={{marginTop:25, marginBottom:25}}>
                  <Steps onChange = {onChange} direction="vertical" current={current}>
                      <Step

                        title="General Info"
                        description = {
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
                            <Button onClick = {incrementStep}>
                              Next
                            </Button>


                          </div>

                        }

                        />
                      <Step
                         title="Layers"
                         description = {
                           <div>

                            {
                              current >= 1 ?
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
                                  <div class="collectionButton">
                                    <div style={{flexDirection:'row', display:'flex'}}>
                                      <div class="collectionPreviousButton" >
                                        <Button onClick={decrementStep}> Previous</Button>
                                      </div>
                                      <Button onClick={generateNFT}> Generate NFTs</Button>
                                    </div>
                                  </div>
                              </div>

                            :

                            ""


                            }

                           </div>

                         }

                         />
                       <Step
                         description = {
                          <div>
                            {
                              current >= 2 ?

                              <div>
                                <ShowNFTGenerated
                                  renderedImages = {renderedImages}
                                  />
                              <div>
                                <Button onClick={decrementStep}> Previous</Button>

                                <Button onClick = {uploadImagesToIPFS}>
                                  Generate Meta
                                </Button>

                              </div>

                              </div>

                              :

                              ""
                            }

                          </div>

                         }
                         title="Metadata" />
                      <Step

                        title="Contract Creation"
                        description = {
                          <div>
                            {
                              current >= 3 ?
                              <div>

                                <CreateContractCollection
                                  contractName = {name}
                                  contractSymbol = {contractSymbol}
                                  maxMint = {maxMint}
                                  maxSupply = {maxSupply}
                                  maxRate = {mintRate}
                                  baseURI = {baseURI}
                                  onInputChange = {onInputChange}
                                  />
                                <div class="collectionButton">
                                  <Button onClick={createBasicERC721APress}> Create Contract</Button>

                                </div>

                              </div>

                              :

                              ""


                            }


                          </div>

                        }

                         />
                  </Steps>
                </div>

              </div>
            </div>

        </div>

        <Header/>
        <Divider style={{color:'#CBD5E0',}}/>



    </div>

  )
}
