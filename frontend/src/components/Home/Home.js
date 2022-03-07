import React, { useState, useEffect } from 'react';
// import { Form } from '@ant-design/compatible';
import { Form, List, Avatar,Typography } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { NavLink, Redirect, } from "react-router-dom";
// import './Account.css';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/Connectors"
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { SignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import web from '../Landing/web.png';

import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import { Header } from '../Header'
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
  Modal, ModalBody, ModalFooter, ModalHeader,
  ModalOverlay, ModalCloseButton, ModalContent,
  useDisclosure,
  FormErrorMessage,
  IconButton,
  Input, Divider,
  Text,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { UploadImageNFT } from './UploadImageNFT';
import { CollectionList } from './CollectionList/CollectionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faPlus, faUserFriends  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import * as dateFns from 'date-fns';

import { WebsiteList } from './WebsiteList/WebsiteList';
import {nft1} from './nft.jpg'
// https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component



export const  Home = (props) => {
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  console.log(props)
  const onChange = (val) => {

  };
  const handleChange = (value) => setValue(value)
  const [value, setValue] = React.useState(20)
  const [name, setName] = useState("");
  const [websites, setWebsites] = React.useState([])
  const [createVisible, setCreateVisible] = React.useState(false)

  const {activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const createWebSite = () => {

    // Now you can create your website
    const formData = new FormData()
    formData.append("owner", account)
    formData.append("name", name)

    axios.post(`${global.API_ENDPOINT}/builder/createWebsite`, formData)
    .then(res => {
      console.log(res.data) // this wants to be number

      props.history.push(`/build/${res.data}`, {
        websiteId: res.data
      })

    })

  }


  const navSmartContract = (eventId) => {
      console.log(eventId)
      props.history.push("/smartContract")
  }

  const navDocs = (eventId) => {
      console.log(eventId)
      props.history.push("/docs")
  }


  const onInputChange = (e) => {
    setName(e.target.value)
  }

  const closeCreateVisible = () => {
    setCreateVisible(false)
  }

  const openCreateVisible = () => {
    setCreateVisible(true)
  }

  useEffect(() => {
    axios.get(`${global.API_ENDPOINT}/builder/getAllWebsite`)
    .then(res => {
      setWebsites(res.data)
    })
   }, [])



  const onBuildDirect = (websiteId) => {
    props.history.push(`/build/${websiteId}`,{
      websiteId: websiteId
    })
  }
  console.log(props)

    return(
      <div>
        <Header history={props.history}/>

        <Divider/>

        <div class="collectionList">
          <div class = "collectionTopContainer">
            <div class="collectionTitle">
              My Collection
            </div>
            <Stack style={{marginLeft:'25px'}} direction='row' spacing={4}>
              <Button onClick={onOpen}  leftIcon={<FontAwesomeIcon style={{marginRight:5}} icon={faPlus} />} colorScheme='teal' variant='solid'>
                Create Site
              </Button>
              <Button style={{marginLeft:25}} onClick={navSmartContract  }  leftIcon={<FontAwesomeIcon style={{marginRight:5}} icon={faPlus} />} colorScheme='teal' variant='solid'>
                Customize Smart Contract
              </Button>
            </Stack>
          </div>

          <WebsiteList data = {websites} onBuildDirect = {onBuildDirect} />

        </div>









        {/*
          <div class="loginFormInnerContent">

            <div>

                <text color="white" fontSize="md" fontWeight="medium" mr="2">
                  {account &&
                    `${account.slice(0, 6)}...${account.slice(
                      account.length - 4,
                      account.length
                    )}`}
                </text>
                <br/>
                <text color="white" fontSize="md">
                  {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
                </text>
            </div>

          <CollectionList  {...this.props}/>


          </div>

          */}

          <Modal
            size="4xl"
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent >
              <ModalHeader>Create Project </ModalHeader>
              <ModalCloseButton />
              <ModalBody style={{display:'flex', flexDirection:'row'}} pb={10}>
                <Box style={{marginRight:50}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={'https://cdn.vox-cdn.com/thumbor/qi6L2dYC2T_879sjDmdfrfvhAiQ=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/68948366/2021_NYR_20447_0001_001_beeple_everydays_the_first_5000_days034733_.0.jpg'} alt={'Rear view of modern home with pool'} />
                  <Box p='6'>
                      <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                          New
                        </Badge>
                        <Box
                          color='gray.500'
                          fontWeight='semibold'
                          letterSpacing='wide'
                          fontSize='xs'
                          textTransform='uppercase'
                          ml='2'
                        >
                          5 contracts &bull; 3 contracts
                        </Box>
                      </Box>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                      >
                        NFT Collections
                      </Box>
                      <Box>
                        Mint NFT, Buy NFT, Sell NFT ...

                      </Box>
                    </Box>
                </Box>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                  <Image src={'https://images.unsplash.com/photo-1643101808019-34feab61ea6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} alt={'Rear view of modern home with pool'} />
                  <Box p='6'>
                      <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                          Coming soon
                        </Badge>
                        <Box
                          color='gray.500'
                          fontWeight='semibold'
                          letterSpacing='wide'
                          fontSize='xs'
                          textTransform='uppercase'
                          ml='2'
                        >
                          2 beds &bull; 3 baths
                        </Box>
                      </Box>
                      <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                      >
                        Banking coming soon...
                      </Box>
                      <Box>
                        Send Eth, Receive Eth, ...

                      </Box>
                    </Box>
                </Box>
              </ModalBody>


              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Name of Project</FormLabel>
                  <Input onChange = {onInputChange} ref={initialRef} placeholder='First name' />
                </FormControl>

              </ModalBody>

              <ModalFooter>
                <Button onClick={createWebSite} colorScheme='blue' mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

      </div>
    )

}
