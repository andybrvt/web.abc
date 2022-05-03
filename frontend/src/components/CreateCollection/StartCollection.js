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

import axios from 'axios';
import './StartCollection.css';
import CoreCreationContract from '../../chain-info/contracts/CoreCreationContract';
import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';
import {CopyToClipboard} from 'react-copy-to-clipboard';


require('dotenv').config()
var fs = require('fs');


const PINATA_BASE_URL = "https://api.pinata.cloud"
const endpoint = "/pinning/pinFileToIPFS"
const endpointJson = "/pinning/pinJSONToIPFS"


const { Step } = Steps;
export const StartCollection = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isContractOpen, onOpen:onContractOpen, onClose:onContractClose} = useDisclosure()
    const { isOpen:isFinishedContractOpen, onOpen:onFinishedContractOpen, onClose:onFinishedContractClose} = useDisclosure()

    const [recentContract, setRecentContract] = useState([])
    const { account, chainId} = useEthers()
    const { web3 } = useMoralis()
    const Web3Api = useMoralisWeb3Api()
    // Page 1
    const { hasCopied, onCopy }  = useClipboard('0x495f947276749ce646')
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [collectionSize, setCollectionSize] = useState(0);
    const [current, setCurrent] = useState(3);


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
    const [baseURI, setBasURI] = useState("")


    // in order for a contract to work you are gonna need abi and address
    const { abi } = CoreCreationContract

    // here is the address
    const coreCreationContractAddress = chainId ? networkMapping[String(chainId)]['CoreCreationContract'][0] : constants.AddressZero
    // convert the abi to interface
    const coreCreationContractInterface = new utils.Interface(abi)
    // Now you have both the abi and interface you can make the interface object
    const coreCreationContract = new Contract(coreCreationContractAddress, coreCreationContractInterface)


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

        if(getERC721Contracts.value[0].length === 1){
          setRecentContract(getERC721Contracts.value[0][0])

        } else {
          setRecentContract(getERC721Contracts.value[0][-1])

        }
      }
    }, [getERC721Contracts])





    // name
    // symbol_
    // maxMint,
    // maxSupply_,
    // mintRate,
    // baseURI
    const createBasicERC721APress = (e) => {

      if(contractName !== "" && contractSymbol !== ""){
        const baseURI = "https://ipfs.moralis.io:2053/ipfs/QmZeXZyB8BfNSPJLwhkFJnQMJz2Z9hXDwSn5dV3hjUSbnK/metadata"
        const price = utils.parseEther(mintRate.toString())
          createERC721A(
            "test",
            "TEST",
            maxMint.toString(),
            maxSupply.toString(),
            // Web3.utils.toWei(0.002, 'ether').toString(),
            price.toString(),
            "https://ipfs.moralis.io:2053/ipfs/QmZeXZyB8BfNSPJLwhkFJnQMJz2Z9hXDwSn5dV3hjUSbnK/metadata",
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


            ipfsArray.push(
              {
                path: `metadata/${index}`,
                content: JSON.parse(item.metaData)
              }
            )


          })

          const options = {
            abi: ipfsArray
          }

          // Upload t IPFS
          const path = await Web3Api.storage.uploadFolder(options)
          const baseMetaURI = path[0]
          const base_meta_uri_arry = baseMetaURI.path.split("/")
          base_meta_uri_arry.pop()
          const real_meta_base_uri = base_meta_uri_arry.join("/")


          const projectId = renderedProject.id
          const formData = new FormData()

          formData.append("projectId", projectId)
          formData.append("baseURI", real_meta_base_uri)
          axios.post(`${global.API_ENDPOINT}/nftSetup/SaveBaseURI`, formData)
          .then(res => {


            setBasURI(res.data)

          })

      })

    }




    useEffect(() =>{
      console.log(createERC721AState)
      if(createERC721AState.status === "Success"){
        console.log('here here')
        onContractClose()
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
        setContractName(e.target.value)
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

      <Modal isOpen={isContractOpen} onClose={onContractClose}>
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

      <Modal size={"lg"} isOpen={true} onClose={onFinishedContractClose}>
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

              <Button>Let's go build your website</Button>

         </ModalFooter>

        </ModalContent>
      </Modal>

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

                <CreateContractCollection
                  contractName = {contractName}
                  contractSymbol = {contractSymbol}
                  maxMint = {maxMint}
                  maxSupply = {maxSupply}
                  maxRate = {mintRate}
                  baseURI = {baseURI}
                  onInputChange = {onInputChange}
                  baseURI = {baseURI}
                  />

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

              current == 2 ?

              <div>
                <Button onClick = {uploadImagesToIPFS}>
                  Generate Meta
                </Button>

              </div>

              :

              current == 3 ?


              <div class="collectionButton">
                <Button onClick={createBasicERC721APress}> Create Contract</Button>
            </div>

              :

              <div>
                Next
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
