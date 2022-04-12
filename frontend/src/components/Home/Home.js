  import React, { useState, useEffect, useRef } from 'react';
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
  import QueueAnim from 'rc-queue-anim';
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
    Center,
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
  import { SendMoney } from './SendMoney/SendMoney';
  import { WebsiteList } from './WebsiteList/WebsiteList';
  import {nft1} from './nft.jpg';
  import { Spinner } from '@chakra-ui/react'
  import { useScreenshot } from "use-screenshot-hook";
  import { WebsiteCreation } from './WebsiteCreation';
  // https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
  import { ReactComponent as TestBuilder  } from './contract.svg';
  import { ReactComponent as CreateContract  } from './CreateContract.svg';

  export const  Home = (props) => {
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onChange = (val) => {

    };




    const handleChange = (value) => setValue(value)
    const [value, setValue] = React.useState(20)
    const [isLoading, setIsLoading] = useState(true)
    const [name, setName] = useState("");
    const [websites, setWebsites] = React.useState([])
    const [createVisible, setCreateVisible] = React.useState(false)
    const [triggerChoice, setTriggerChoice] = React.useState(false)

    // opensea input
    const [openSeaContract, setOpenSeaContract] = React.useState(false)
    const [openSeaLink, setOpenSeaLink] = React.useState("")

    //existing contract input
    const [existingContract, setExistingContract] = React.useState(false)
    const [existingContractLink, setExistingContractLink] = React.useState("")
    // 

    const [selectModalOption, setSelectModalOption] = React.useState("")

    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const createWebSite = (type) => {

      // Now you can create your website
      const formData = new FormData()
      formData.append("owner", account)
      formData.append("name", name)
      formData.append('type', type)

      axios.post(`${global.API_ENDPOINT}/builder/createWebsite`, formData)
      .then(res => {

        props.history.push(`/build/${res.data}/${type}`, {
          websiteId: res.data
        })

      })

    }

    const chooseOpenSeaContract = () => {
      setOpenSeaContract(true)
      setExistingContract(false)
    }

    const chooseExistingContract = () => {
      setOpenSeaContract(false)
      setExistingContract(true)
    }

    const navSmartContract = (eventId) => {
        props.history.push("/smartContract")
    }

    const navDocs = (eventId) => {
        props.history.push("/docs")
    }


    const onInputChange = (e) => {
      setName(e.target.value)
    }

    const onInputOpenSea = (e) => {
      setOpenSeaLink(e.target.value)
    }


    const onInputExistingContract = (e) => {
      setExistingContractLink(e.target.value)
    }

    const closeCreateVisible = () => {
      setCreateVisible(false)
    }

    const openCreateVisible = () => {
      setCreateVisible(true)
    }

    useEffect(() => {
      // axios.get(`${global.API_ENDPOINT}/builder/getAllWebsite`)
      // .then(res => {
      //   setWebsites(res.data)
      // })

      if(account){
        axios.get(`${global.API_ENDPOINT}/builder/getUserWebsites/`+account)
        .then(res => {

          setWebsites(res.data)
          setIsLoading(false)
        })
      }


    }, [account])



    const resetAllHooks = () => {
      setTriggerChoice("")
      setOpenSeaContract(false)
      setExistingContract(false)
      setSelectModalOption('')
      setName('')
    }

    const onBuildDirect = (websiteId, websiteType) => {
      console.log(websiteId, websiteType)
      props.history.push(`/build/${websiteId}/${websiteType}`,{
        websiteId: websiteId
      })
    }

    const nextStep = () => {
      if(selectModalOption === "websiteOption"){
        setTriggerChoice("website")
      }
      if(selectModalOption === "nftOption"){
        setTriggerChoice("nftChoice")
      }
   

    }
    const ref1 = useRef(null);
    const { image, takeScreenshot } = useScreenshot({ref:ref1});
      return(
        <div>
          <Header history={props.history}/>



          <div class="collectionList">
            <div class = "collectionTopContainer">
              <div class="collectionTitle">
                My Collection
              </div>
              <Stack ref={ref1} style={{marginLeft:'25px'}} direction='row' spacing={4}>
                <Button onClick={onOpen}  leftIcon={<FontAwesomeIcon style={{marginRight:5}} icon={faPlus} />} colorScheme='teal' variant='solid'>
                  Create Site
                </Button>
                <Button onClick={() => takeScreenshot()}>test</Button>
                {image && <img style={{width:300, height:300}} src={image} />}
                {/*
                <Button style={{marginLeft:25}} onClick={navSmartContract  }  leftIcon={<FontAwesomeIcon style={{marginRight:5}} icon={faPlus} />} colorScheme='teal' variant='solid'>
                  Customize Smart Contract
                </Button>
                */}

              </Stack>
            </div>

            {
              isLoading ?

              <div class = "loadingContainer">
                <div class = "loadingText">Fetching your websites</div>
                <div>
                  <Spinner color='red.500' />
                </div>

              </div>

              :
              <div>
              <WebsiteList data = {websites} onBuildDirect = {onBuildDirect} />
              </div>

            }

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
            </div>
            */}


            <Modal
              id='mymodal'
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent >
        
                { triggerChoice=='nftChoice' ? 
                  <ModalHeader>
                  <div class="modalHeader">
                    Creating a NFT website-- what step are you on?
                  </div>
                  
                </ModalHeader>
                  :

                  <div>
                  { triggerChoice=='website' ?
                    <ModalHeader>
                      <div class="modalHeader">
                        Let's grab some info
                      </div>
                    </ModalHeader>
                  :
                
                  <ModalHeader>
                    <div class="modalHeader">
                    Create Website
                    </div>  
                  </ModalHeader>
                  }
                  </div>
                  
                  
                }
              
                  
                  
                <ModalCloseButton onClick={()=>setTriggerChoice("")} />
                  {
                    (triggerChoice=="nftChoice")?

                    <div>
                      


                        

                      <div>
                        <QueueAnim
                        style={{display:'flex', flexDirection:'row'}}
                        type={['right', 'left']}
                        ease={['easeOutQuart', 'easeInOutQuart']}
                        delay={300}>
                          <div key="1">
                            <div class="choiceNFT">
                              <Box
                                
                                onClick={chooseExistingContract}  maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Center>
                              <TestBuilder style={{marginTop:25}} width={200} height={200}/>

                                </Center>
                                
                                <Box p='6'>
                                    <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                                      <Badge borderRadius='full' px='3' colorScheme='teal'>
                                        Import
                                      </Badge>
                                      <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                      >
                                        Import from contract
                                      </Box>
                                    </Box>
                                    <div
                                      style={{fontWeight:'bold', fontSize:20}}
                                    > 
                                    Own an existing smart contract
                                    </div>
                                    <div style={{marginTop:5}}>
                                    
                                    </div>
                                </Box>
                              </Box>
                            </div>
                          </div>

                          <div key="2">
                          <div class="choiceNFT">
                              <Box   
                                onClick={chooseOpenSeaContract} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Center>
                                <Image
                                  style={{marginTop:50, width:'45%', height:'45%'}}
                                  src={'https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png'} alt={'Rear view of modern home with pool'} />

                                </Center>
                                
                                <Box p='6'>
                                    <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                                      <Badge borderRadius='full' px='3' colorScheme='teal'>
                                        Import
                                      </Badge>
                                      <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                      >
                                        Pull from OpenSea
                                      </Box>
                                    </Box>
                                    <div
                                      style={{fontWeight:'bold', fontSize:20}}
                                    >
                                      Own a NFT collection on OpenSea
                                    </div>
                                    <div style={{marginTop:5}}>
                                    
                                    </div>
                                </Box>
                              </Box>
                            </div>
                          </div>
                            
                          <div key="3" >
                            <Box   
                              style={{opacity:0.3}}
                              onClick={()=>setTriggerChoice("nftChoice")} 
                              maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                              <Center>
                                <CreateContract style={{marginTop:25}} width={200} height={200}/>
                              </Center>
                              
                              <Box p='6'>
                                  <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                                    <Badge borderRadius='full' px='3' colorScheme='teal'>
                                      Creation
                                    </Badge>
                                    <Box
                                      color='gray.500'
                                      fontWeight='semibold'
                                      letterSpacing='wide'
                                      fontSize='xs'
                                      textTransform='uppercase'
                                      ml='2'
                                    >
                                      Create smart contract
                                    </Box>
                                  </Box>
                                  <div
                                    style={{fontWeight:'bold', fontSize:20}}
                                  >
                                    Create your smart contract
                                  </div>
                                  <div style={{marginTop:5}}>
                                  
                                  </div>
                              </Box>
                            </Box>
                          </div>
                          </QueueAnim>
                    </div>

                      

                    <div>
                      {
                        (openSeaContract)?
                        <div>
                          <QueueAnim
                          type={['right', 'left']}
                          ease={['easeOutQuart', 'easeInOutQuart']}
                          delay={300}>
                              <div key="1" class="addLinkHeader">Enter OpenSea URL</div>
                            <Input key="2" style={{width:'50%'}} onChange = {onInputOpenSea} ref={initialRef} placeholder='Enter opensea address' />
                          </QueueAnim>
                        </div>
                        :
                        <div>
                        </div>
                      }
                    </div>

                    <div>
                        {
                          (existingContract)?
                          <div>
                            <QueueAnim
                            type={['right', 'left']}
                            ease={['easeOutQuart', 'easeInOutQuart']}
                            delay={300}>
                              <div key="1" class="addLinkHeader">Enter existing contract</div>
                              <Input key="2" style={{width:'50%'}} onChange = {onInputExistingContract} ref={initialRef} placeholder='Enter address' />
                            </QueueAnim>
                          </div>
                          :
                          <div>
                          </div>
                        }
                      </div>
                      
                      <div> 
                
                          <div>
                          { openSeaLink.length!=0?
                            <div class="positionFooter">
                                <div>
                                  <Button colorScheme='blue' mr={3}>
                                    Next
                                  </Button>
                                  <Button onClick={resetAllHooks}>Back</Button>
                                </div>
                            </div>
                          :
                          <div class="positionFooter"> 
                              <div>
                                <Button onClick={resetAllHooks}>Back</Button>
                              </div>
                          </div>
                          }
                          </div>  
                      
                      </div>
                    </div>

                    :
                    <div>
                      {
                        (triggerChoice=="website")?
                        <div>
                          <WebsiteCreation
                            name={name}
                            account={account}
                          />
                          <div class="positionFooter"> 
                            <Button onClick={() => createWebSite("personal")} colorScheme='blue' mr={3}>
                              Next
                            </Button>
                            <Button onClick={()=>setTriggerChoice("")}>Back</Button>
                          </div>

                        </div>
                        :
                        <div>
                      <ModalBody pb={17.5}>
                        
                      <FormControl isRequired>
                          <div style={{display:'flex', flexDirection:'row'}}>
                            <p class="nameProject"> Select website type  </p>
                            <FormLabel></FormLabel>
                          </div>
                          
                         
                        </FormControl>
                      <QueueAnim
                        style={{display:'flex', flexDirection:'row'}}
                        type={['right', 'left']}
                        ease={['easeOutQuart', 'easeInOutQuart']}
                        delay={300}>
                          <div key="a">
                            
                            <div class="choiceBox">
                              <Box
                                onClick={()=>setSelectModalOption("websiteOption")}
                                className={`modalOptionheight ${(selectModalOption=='websiteOption') ? "modalOptionBorder" : ""}`}
                                // onClick={()=>setTriggerChoice("website")}

                                maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Image src={'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'} alt={'Rear view of modern home with pool'}/>
                                <Box p='6'>
                                    <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                                      <Badge borderRadius='full' px='3' colorScheme='teal'>
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
                                        Time &bull; 5 minutes
                                      </Box>
                                    </Box>
                                    <div
                                      style={{fontWeight:'bold', fontSize:20}}
                                    >
                                      Personal Website
                                    </div>
                                    <div style={{marginTop:5}}>
                                      Show yourself on the blockchain
                                    </div>
                                </Box>
                              </Box>
                            </div>
                            
                          </div>
                          <div key="b">
                            <div class="choiceBox">
                              <Box
                                onClick={()=>setSelectModalOption("nftOption")}
                                className={`modalOptionheight ${(selectModalOption=='nftOption') ? "modalOptionBorder" : ""}`}
                                // onClick={()=>setTriggerChoice("nftChoice")} 
                                maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                                <Image src={'https://cdn.vox-cdn.com/thumbor/qi6L2dYC2T_879sjDmdfrfvhAiQ=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/68948366/2021_NYR_20447_0001_001_beeple_everydays_the_first_5000_days034733_.0.jpg'} alt={'Rear view of modern home with pool'} />
                                <Box p='6'>
                                    <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                                      <Badge borderRadius='full' px='3' colorScheme='teal'>
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
                                        5 contracts &bull; 3 contracts
                                      </Box>
                                    </Box>
                                    <div
                                      style={{fontWeight:'bold', fontSize:20}}
                                    >
                                      NFT Collections
                                    </div>
                                    <div style={{marginTop:5}}>
                                      Mint NFT, Buy NFT, Sell NFT ...

                                    </div>
                                  </Box>
                              </Box>
                            </div>
                        </div>


                        <div key="c">
                        <Box style={{marginRight:25, opacity: 0.5}} maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                          <Image src={'https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} alt={'Rear view of modern home with pool'} />
                          <Box p='6'>
                              <Box style={{marginBottom:10}} display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='3' colorScheme='teal'>
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
                                  5 contracts &bull; 3 contracts
                                </Box>
                              </Box>
                              <div
                                style={{fontWeight:'bold', fontSize:20}}
                              >
                                DAOs
                              </div>
                              <div style={{marginTop:5}}>
                                Tokenomics, governance, treasury

                              </div>
                            </Box>
                        </Box>

                        </div>
                        </QueueAnim>


                      </ModalBody>

                      <ModalBody pb={6}>
                        <FormControl isRequired>
                          <div style={{display:'flex', flexDirection:'row'}}>
                            <p class="nameProject"> Enter website name  </p>
                            <FormLabel></FormLabel>
                          </div>
                          <Input
                          style={{width:'50%'}} onChange = {onInputChange} ref={initialRef} placeholder='Enter name' />
                        </FormControl>
                      </ModalBody>


                        <div class="positionFooter">
                          {(name.length>0) && (selectModalOption!=null)?
                          <Button onClick={nextStep} colorScheme='blue' mr={3}>
                            Next
                          </Button>
                          :
                          ''
                          }
                          
                          <Button onClick={onClose}>Close</Button>
                        </div>



                    </div>


                      }
                    </div>

                    
                    

                  }








              </ModalContent>
            </Modal>

        </div>
      )

  }
