import React, { useState, useEffect } from 'react';
import { useEthers, useEtherBalance, useCall, useCalls, useContractCall, useContractFunction} from "@usedapp/core";
import { Contract } from '@ethersproject/contracts'
import CoreCreationContract from '../../chain-info/contracts/CoreCreationContract';
import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';
import { Checkbox, Image, Button, ButtonGroup, Divider, Flex, Text, Input, Select, List, ListItem } from '@chakra-ui/react';
import axios from 'axios';

require('dotenv').config()

var fs = require('fs');

const PINATA_BASE_URL = "https://api.pinata.cloud"
const endpoint = "/pinning/pinFileToIPFS"
const endpointJson = "/pinning/pinJSONToIPFS"


// Remember 2 things, abi and address, the abi makes the interface so technically
// interface + address
export const CreateERC721Testing = (props) => {

  const [collections, setCollections] = useState([])
  const [collectionName, setCollectionName] = useState("")
  const [collectionSymbol, setCollectionSymbol] = useState("")

  const [uploadedImages, setUploadedImages] = useState([])

  const [layers, setLayers] = useState([{name: "Base", required: false, images: [], rarity: [] }])

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

    console.log(e.target.placeholder)
    const inputType = e.target.placeholder
    if(inputType === "Name"){
      setCollectionName(e.target.value)
    }

    if(inputType === "Symbol"){
      setCollectionSymbol(e.target.value)
    }
  }

  const fileSelectedHandler = (e) => {
    console.log(e.target.files)

    setUploadedImages(e.target.files)

  }

  const uploadImagesToIPFS = () => {

    console.log(uploadedImages)

  }

  const generateNFTTest = () => {

    axios.post(`${global.API_ENDPOINT}/nftSetup/testOtherFunction`)


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
    const rarityArr = Array(arrLen).fill(100/arrLen)

    console.log(rarityArr, 'what is this here')

    setLayers(
      layers.map((layer,i) => index === i ? {
        ...layer,
        images: [...layer.images, ...array],
        rarity: rarityArr
      }: layer)
    )

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

        {/*
          // Be able to add in new layers (be able to add pictures for each of these new layers). Make sure there is a state that categories each picture by their respective trait
          // A place to input the name of the layer
          // A check box indicating if the trait is required or not
          // A way to adjust the rarity of each of the images that you put in
          */}
          {
            layers.map((layer, index) => {


              return(
                <div>
                  <div>
                    <Button onClick = {addNewLayer}>Add new layer</Button>
                  </div>
                  <div>
                    <Input value = {layers[index].name} onChange = {(e)=>onNameChange(e, index)} placeholder = "Name"/>
                  </div>
                  <div>
                    <Checkbox>Required</Checkbox>
                  </div>
                  <div>
                    <input type="file" multiple onChange={(e) => layerImageChange(e, index)} />
                    <div>
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
          <Button onClick = {generateNFTTest}>Test functions</Button>
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
