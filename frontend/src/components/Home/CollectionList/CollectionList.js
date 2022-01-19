import React from 'react';
// import { Form } from '@ant-design/compatible';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import {Contract} from '@ethersproject/contracts'
import CreateCollectionContract from '../../../chain-info/contracts/CreateCollectionContract';
import networkMapping from '../../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers'
import { Button, ButtonGroup, Divider, Flex, Text, Input } from '@chakra-ui/react';

export const CollectionList = () => {
  const { account, chainId } = useEthers()
  const { abi } = CreateCollectionContract
  const createCollectionContractAddress = chainId ? networkMapping[String(chainId)]["CreateCollectionContract"][0] : constants.AddressZero
  const createCollectionContractInterface = new utils.Interface(abi)
  const createCollectionContract = new Contract(createCollectionContractAddress,createCollectionContractInterface)


  const {send: createCollection, state: createCollectionState } = useContractFunction(
    createCollectionContract, // contract
    "createCollection", // function string
    {transactionName: "Collection created!"} // transaction name
  )

  const grabCollectionAddresses = useContractCall({
    abi: createCollectionContractInterface,
    address:createCollectionContractAddress,
    method: "getAllCollectionAddresses",
    args:[account,]
  })

  const getMsgSender = useContractCall({
    abi: createCollectionContractInterface,
    address:createCollectionContractAddress,
    method: "getAllCollectionAddressesNew",
    args:[]
  })

 const createCollectionPress = (e) => {
   console.log(e)
   createCollection("First Collection", "FRST")
 }

 const testFunction =(e) => {
   console.log(grabCollectionAddresses[0])
   console.log(getMsgSender[0].toString())
 }

    return(
      <div>
        <Button
        onClick={createCollectionPress}
        htmlType="submit"
        type = "primary"
        > Create Collection </Button>
        <Button
        onClick={testFunction}
        htmlType="submit"
        type = "primary"
        > Create Collection </Button>

      </div>
    )

}
