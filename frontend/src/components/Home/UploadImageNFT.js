import React, { useState } from 'react';
import { Button, ButtonGroup, Divider, Flex, Text, Input } from '@chakra-ui/react';
import {useContractFunction, useContractCall, useEthers, useTokenBalance, useNotifications} from "@usedapp/core";
import BasicNFT from '../../chain-info/contracts/BasicNFT';
import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers'
import {Contract} from '@ethersproject/contracts'
import axios from 'axios';
require('dotenv').config()

var fs = require('fs');

const PINATA_BASE_URL = "https://api.pinata.cloud"
const endpoint = "/pinning/pinFileToIPFS"
const endpointJson = "/pinning/pinJSONToIPFS"


export const UploadImageNFT = () => {
  // Now we need to get contract of the collection (ie basicNFT)
  // we are gonna need address and abi(to create the interface)
  const { account, chainId } = useEthers()
  const { abi } = BasicNFT
  const basicNFTAddress = chainId ? networkMapping[String(chainId)]["BasicNFT"][0] : constants.AddressZero
  const basicNFTInterface = new utils.Interface(abi)
  const basicNFTContract = new Contract(basicNFTAddress, basicNFTInterface)

  const {send: createCollectible, state: createCollectibleState} = useContractFunction(
    basicNFTContract,
    "createCollectible",
    {transactionName: "Create Collectible"}
  )

  // this function just needs a uri to mint a collectible and then set the otken uri
  const {send: simpleCreateCollectible, state:simpleCreateCollectibleState} = useContractFunction(
    basicNFTContract,
    "simpleCreateCollectible",
    {transactionName: "Simple Create Collectible"}
  )

  const list = useContractCall({
    abi: basicNFTInterface,
    address:basicNFTAddress,
    method: "viewSender",
    args:[]
  })


  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")

  const handleUpload = (e) => {
    console.log(e.target.files[0])
    console.log(e.target.files[0].name.replace(/\s/g, "_"))
    setFile(e.target.files[0]);

  }

  const submitUpload = (e) => {

    const url = PINATA_BASE_URL+endpoint
    console.log(process.env.REACT_APP_KEY)
    console.log(process.env)

    const pinataApiKey = process.env.REACT_APP_PINATA_API_KEY
    const pinataSecretApiKey = process.env.REACT_APP_PINATA_API_SECRET
    let data = new FormData()
    data.append("file", file)

    const metadata = JSON.stringify({
        name: 'newImage',
        keyvalues: {
            exampleKey: 'exampleValue'
        }
    })

    data.append("pinataMetadata", metadata)


  // New function for uploading an nft
  axios.post(url, data, {
      maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
         headers: {
             'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
             pinata_api_key: pinataApiKey,
             pinata_secret_api_key: pinataSecretApiKey
         }
    })
    .then(res => {


      const url2 = PINATA_BASE_URL+endpointJson
      console.log(res)
      console.log(url2)
      // After you upload imae to pinata, now you get the item url, construct the
      // new metadata information and then run the pinata to upload the metadata for the nft
      const imageHash = res.data.IpfsHash
      const fileName = file.name.replace(/\s/g, "_") // just to remove all the spaces
      const imageUri = `https://gateway.pinata.cloud/ipfs/${imageHash}?filename=${fileName}`

      const jsonBody = {
        pinataMetadata: {
          name: name,
        },
        pinataContent: {
          name: name,
          description: description,
          image: imageUri
        }
      }

      console.log(jsonBody)

      axios.post(url2, jsonBody, {
           headers: {
               pinata_api_key: pinataApiKey,
               pinata_secret_api_key: pinataSecretApiKey
           }
      })
      .then( res=> {

        // now that you have the uri you can just pass the simple function
        const newTokenURIHash = res.data.IpfsHash
        const newTokenURI = `https://gateway.pinata.cloud/ipfs/${newTokenURIHash}?filename=${fileName}`
        simpleCreateCollectible(newTokenURI)

      })
      .catch(err => [
        console.log(err)
      ])


    })
    .catch(err => {
      console.log(err)
    })


}





  return (
    <div>

      <Input
        onChange = {(e) => setName(e.target.value)}
        placeholder='Name of piece' />
      <Input
        onChange = {(e) => setDescription(e.target.value) }
        placeholder='Description' />

      <input
        onChange = {handleUpload}
        type="file" name="file" />

      <Button
      onClick={submitUpload}
      htmlType="submit"
      type = "primary"
      // disabled = {this.handleSubmitButton()}
      // disabled = {pristine || invalid}
      > Submit </Button>

      {/*
        <div class="col">
            <div>
              {
                (this.state.selectedFile) ?
                <img width="300" height="300" src={this.state.submitFile}>
                </img>

                :
                ''
            }
            </div>
        </div>

        */}


    </div>
  )
}
