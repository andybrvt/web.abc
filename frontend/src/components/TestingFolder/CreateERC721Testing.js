import React, { useState, useEffect } from 'react';
import { useEthers, useEtherBalance, useCall, useCalls, useContractCall, useContractFunction} from "@usedapp/core";
import { Contract } from '@ethersproject/contracts'
import CoreCreationContract from '../../chain-info/contracts/CoreCreationContract';
import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';
import { Button, ButtonGroup, Divider, Flex, Text, Input, Select, List, ListItem } from '@chakra-ui/react';

// Remember 2 things, abi and address, the abi makes the interface so technically
// interface + address
export const CreateERC721Testing = (props) => {

  const [collections, setCollections] = useState([])
  const [collectionName, setCollectionName] = useState("")
  const [collectionSymbol, setCollectionSymbol] = useState("")


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



  useEffect(() => {
    if(getERC721Contracts !== undefined){
      setCollections(getERC721Contracts.value[0])
    }

  }, [getERC721Contracts])


  return(

    <div>
      <List>
        {
          collections ?

          collections.map((address, index) => {
            console.log(address, 'here is a new address')
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

      <Input onChange = {onInputChange} placeholder = "Name"/>
      <Input onChange = {onInputChange} placeholder = "Symbol"/>

      <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721</Button>
      <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721A</Button>
    </div>
  )
}
