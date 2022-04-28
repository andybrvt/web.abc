import React, { useState, useEffect } from 'react';
import { useEthers, useEtherBalance, useCall, useCalls, useContractCall, useContractFunction} from "@usedapp/core";
import { Contract } from '@ethersproject/contracts'
import CoreCreationContract from '../../chain-info/contracts/CoreCreationContract';
import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';
import { Checkbox, Image, Button, ButtonGroup, Divider, Flex, Text, Input, Select, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';
import { useMoralisWeb3Api } from "react-moralis";

require('dotenv').config()

var fs = require('fs');

const PINATA_BASE_URL = "https://api.pinata.cloud"
const endpoint = "/pinning/pinFileToIPFS"
const endpointJson = "/pinning/pinJSONToIPFS"


// Remember 2 things, abi and address, the abi makes the interface so technically
// interface + address
export const CreateERC721Testing = (props) => {

  const Web3Api = useMoralisWeb3Api();

  const [collections, setCollections] = useState([])
  const [collectionName, setCollectionName] = useState("")
  const [collectionSymbol, setCollectionSymbol] = useState("")
  const [uploadedImages, setUploadedImages] = useState([])

  const [layers, setLayers] = useState([{name: "Base", required: false, images: [], rarity: [] }])
  const [NFTCount, setNFTCount] = useState(0)
  const [NFTCollectionName, setNFTCollectionName] = useState("")



  const [renderedProject, setRenderedProject] = useState({})
  const [renderedImages, setRenderedImages] = useState([])



  const { account, chainId} = useEthers()
  const { abi } = CoreCreationContract // abi
  // address
  const coreCreationContractAddress = chainId ? networkMapping[String(chainId)]['CoreCreationContract'][0] : constants.AddressZero
  const coreCreationContractInterface = new utils.Interface(abi)
  const coreCreationContract = new Contract(coreCreationContractAddress, coreCreationContractInterface)

  const numbs =['1', '2']

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

  }

  const createBasicERC721APress = (e) => {

    if(collectionName !== "" && collectionSymbol !== ""){
        createERC721A(collectionName, collectionSymbol)
    }
    else {
      alert("fill in the names")
    }

  }

  //
  const getERC721Contracts = useCall({
    contract: coreCreationContract,
    method: "getERC721Contracts",
    args: [account, ]

  })


  useEffect(() => {
    if(getERC721Contracts !== undefined){
      setCollections(getERC721Contracts.value[0])
    }

  }, [getERC721Contracts])


  const onInputChange = (e) => {

    const inputType = e.target.placeholder
    if(inputType === "Name"){
      setCollectionName(e.target.value)
    }

    if(inputType === "Symbol"){
      setCollectionSymbol(e.target.value)
    }
  }

  const fileSelectedHandler = (e) => {

    setUploadedImages(e.target.files)

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
    console.log(options)
    const path = await Web3Api.storage.uploadFolder(options)
    console.log(path)
    // uploadMetadataToIPFS(path[0])

  }

  // const uploadMetadataToIPFS = async(baseURI) => {
  const uploadMetadataToIPFS = async() => {

    const projectId = renderedProject.id
    const projectName = renderedProject.name
    const formData = new FormData()
    // const base_uri_arry = baseURI.path.split("/")
    // base_uri_arry.pop()
    // const real_base_uri = base_uri_arry.join("/") // put back later

    const test_projectId = 160
    const test_projectName = "name"
    const test_base_uri = "https://gateway.moralisipfs.com/ipfs/QmeqRTuc5pamTrb4W5wA7dNSk9PzcUzQ1w8BNBDtwb2AN9/image/160"
    formData.append("projectId", test_projectId)
    formData.append("base_name", test_projectName)
    formData.append("base_uri", test_base_uri)



    axios.post(`${global.API_ENDPOINT}/nftSetup/GenerateMetadata`, formData)
    .then(async res => {
      console.log(res.data)


        let ipfsArray = []
        res.data.map((item, index ) => {


          ipfsArray.push(
            {
              path: `metadata/${index}`,
              content: JSON.parse(item.metaData)
            }
          )


        })

        console.log(ipfsArray)
        const options = {
          abi: ipfsArray
        }

        const path = await Web3Api.storage.uploadFolder(options)
        const baseMetaURI = path[0]
        const base_meta_uri_arry = baseMetaURI.path.split("/")
        base_meta_uri_arry.pop()
        const real_meta_base_uri = base_meta_uri_arry.join("/") // put back later


        const projectId = renderedProject.id
        const formData = new FormData()

        formData.append("projectId", test_projectId)
        formData.append("baseURI", real_meta_base_uri)
        axios.post(`${global.API_ENDPOINT}/nftSetup/SaveBaseURI`, formData)


    })




  }




  const generateNFTTest = () => {
    const formData =  new FormData()

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
    formData.append("count", NFTCount)
    formData.append("collectionName", NFTCollectionName)
    formData.append('owner', account)

    axios.post(`${global.API_ENDPOINT}/nftSetup/GenerateNFTs`,
      formData,
      {headers: {"content-type": "multipart/form-data"}}

    )
    .then(res => {

      console.log(res.data)

      const project = res.data.project
      const nft_imgs = res.data.nfts_imgs

      setRenderedProject(project)
      setRenderedImages(nft_imgs)

    })



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

  const layerImageChange = (e, index) => {

    const array = Array.from(e.target.files)
    const arrLen =e.target.files.length
    const rarityArr = Array(arrLen).fill(1)

    console.log(rarityArr, 'what is this here')

    setLayers(
      layers.map((layer,i) => index === i ? {
        ...layer,
        images: [...layer.images, ...array],
        rarity: rarityArr
      }: layer)
    )

  }

  // this is a whole differen thing
  const rarityChange = (e, index, imageIndex) => {


  }

  const onChangeCount = (e) => {

    setNFTCount(e.target.value)
  }

  const onCollectionName = (e) => {
    setNFTCollectionName(e.target.value)
  }


  console.log(layers)

  return(

    <div>
      <List>
        {
          collections ?

          collections.map((address, index) => {
            return (
              <ListItem >
                <Button
                  colorScheme='blue'>{address}</Button>
              </ListItem>

            )
          })

          :

          <ListItem>Nothing</ListItem>


        }


      </List>

      <div>
        <Input onChange = {onInputChange} placeholder = "Name"/>
        <Input onChange = {onInputChange} placeholder = "Symbol"/>

        <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721</Button>
        <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721A</Button>

      </div>

      <br />

      <div>
        <div>This will be for generating the nft</div>

        <div>
          <Button onClick = {addNewLayer}>Add new layer</Button>
        </div>
        {/*
          // Be able to add in new layers (be able to add pictures for each of these new layers). Make sure there is a state that categories each picture by their respective trait
          // A place to input the name of the layer
          // A check box indicating if the trait is required or not
          // A way to adjust the rarity of each of the images that you put in
          */}
          {
            layers.map((layer, index) => {


              return(
                <div style = {{
                      margin: '50px'
                  }}>

                  <div>
                    <Input value = {layers[index].name} onChange = {(e)=>onNameChange(e, index)} placeholder = "Name"/>
                  </div>
                  <div>
                    <Checkbox>Required</Checkbox>
                  </div>
                  <div>
                    <input type="file" multiple onChange={(e) => layerImageChange(e, index)} />
                    <div style = {{
                        display: 'flex',

                        }}>
                      {
                        layers[index].images.map((image, imgIndex) => {

                          return (
                            <div>
                              <Image
                                boxSize='100px'
                                src = { URL.createObjectURL(image)} />
                              <Input value = {layers[index].rarity[imgIndex]} onChange = {(e)=>onNameChange(e, index)} placeholder = "Name"/>

                          </div>
                          )

                        })

                      }
                    </div>
                  </div>

                </div>
              )

            })
          }

          <br />
          <Input onChange = {onChangeCount}  value = {NFTCount} placeholder = "Count"/>
          <br />
          <Input onChange = {onCollectionName} value = {NFTCollectionName} placeholder = "Collection Name"/>
          <br />
          <Button onClick = {generateNFTTest}>Test functions</Button>

          <div style = {{flexWrap: 'wrap'}}>
            {
              renderedImages.map((item, index) => {

                return(
                  <div>
                    <Image
                      boxSize='100px'
                      src = {`${global.IMAGE_ENDPOINT}`+item.nftImage} />
                  </div>
                )



              })

            }
          </div>


          <div>
            <Button onClick = {uploadImagesToIPFS}>Upload Images to IPFS</Button>
          </div>

          <div>
            <Button onClick = {uploadMetadataToIPFS}>Upload MetaData to IPFS</Button>
          </div>
      </div>

      <br />

      <div>
        <div>Upload Images for your collection</div>
        <input type="file" multiple onChange={fileSelectedHandler} />
        <Button onClick = {uploadImagesToIPFS}>Upload Images to IPFS</Button>
      </div>





    </div>
  )
}
