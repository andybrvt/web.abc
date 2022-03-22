import React, { useState, useEffect } from 'react';
import {
  Menu, Select,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  Slider,
  Box,
  Button,
  Link,
  FormControl,
  FormLabel,
  Code,
  Modal, ModalBody, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton, ModalContent,
  useDisclosure,
  FormErrorMessage,
  IconButton,
  Input, Divider,
  Text,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import {Contract} from '@ethersproject/contracts'
import TransactionContract from '../../../chain-info/contracts/Transaction';
import networkMapping from '../../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers';


export const SendMoney = (props) => {

  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(20)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  const finalRef = React.useRef()



  const { account, chainId } = useEthers()
  const { abi } = TransactionContract
  // const TransactionContractAddress = chainId ? networkMapping[String(chainId)]["Transaction"][0] : constants.AddressZero
  const TransactionContractAddress =  constants.AddressZero
  const TransactionContractInterface = new utils.Interface(abi)
  const transactionContract = new Contract(TransactionContractAddress,TransactionContractInterface)

  const {send: transfer, state: transactionContractState } = useContractFunction(
    transactionContract, // contract
    "transfer", // function string
    {transactionName: "Send money!"} // transaction name
  )
  {/*
  const list = useContractCall({
    abi: TransactionContractInterface,
    address:TransactionContractAddress,
    method: "transfer",
    args:[]
  })
  */}

  const pressMoney  = (e) => {
    console.log(e)
    transfer('0x53a19F44548182602b3B665AB9B9717735Ed53be', 10000000)
  }


  return(
    <div>
      test
      <Button onClick={pressMoney} style={{marginLeft:25}} colorScheme='teal' variant='solid'>
        Send 0.1 Eth
      </Button>
    </div>
  )
}
