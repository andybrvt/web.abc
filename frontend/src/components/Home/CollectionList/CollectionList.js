import React, { useState, useEffect } from 'react';
// import { Form } from '@ant-design/compatible';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import {Contract} from '@ethersproject/contracts'
import CreateCollectionContract from '../../../chain-info/contracts/CreateCollectionContract';
import networkMapping from '../../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';
import { Button, ButtonGroup, Divider, Flex, Text, Input, Select, List, ListItem } from '@chakra-ui/react';
import  {UploadImageNFT} from '../UploadImageNFT';

export const CollectionList = (props) => {

  console.log(props, 'here is the props')
  const [collections, setCollections] = useState([])
  const [currentCollection, setCurrentCollection] = useState()
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



  useEffect(() => {
    if(grabCollectionAddresses !== undefined){
        setCollections(grabCollectionAddresses[0])
    }

  }, [grabCollectionAddresses])

 const createCollectionPress = (e) => {
   createCollection("First Collection", "FRST")
 }

 const testFunction =(e) => {
   console.log(grabCollectionAddresses[0])
 }

 const onChangeSelection = (e) => {
   setCurrentCollection(e.target.value)
 }

 const onCollectionDirect = (address) => {


   props.history.push(`/collection/${address}`,{
     address: address
   })
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
        > Test </Button>

      <List>
        {
          collections ?

          collections.map((address, index) => {
            return (
              <ListItem >
                <Button
                  onClick = {() => onCollectionDirect(address)}
                  colorScheme='blue'>{address}</Button>
              </ListItem>

            )
          })

          :

          <ListItem>Nothing</ListItem>


        }


      </List>






      </div>
    )

}
