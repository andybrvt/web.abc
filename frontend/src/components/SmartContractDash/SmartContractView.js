import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { useColorModeValue, Stack, Button,
    Divider,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    BreadcrumbSeparator,} from '@chakra-ui/react';
    import { ChevronRightIcon} from '@chakra-ui/icons'
import * as dateFns from 'date-fns';
import { Header } from '../Header';
import './SmartContractView.css';
import { useClipboard } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboard,  } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@chakra-ui/react'


export const SmartContractView = (props) => {
    const { hasCopied, onCopy }  = useClipboard('0x495f947276749ce646')
   
    const navHome = () => {
        props.history.push("/contractDashboard")
    }
  var data = props.data
  return(
    <div>
        
        <div class="collectionList">
            <div class = "collectionTopContainer">
              <div class="collectionTitle">
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='/contractDashboard'>Contracts</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href=''> 0x495f947276749ce646...</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
                {/* <Divider></Divider> */}
              </div>
            </div>
            <div style={{marginTop:50, display:'flex', flexDirection:'row'}}>
                <div style={{flex:1, marginLeft:25, marginRight:25}}>
                    <Stack  
                        boxShadow={'lg'}
                        p={5}
                        rounded={'xl'} bg={useColorModeValue('white', 'gray.900')}>
                        <div class="contractCategoryTitle">
                            Basic Information
                        </div>
                        <Divider style={{colorScheme:'red'}}></Divider>
                        <div style={{padding:25}}>
                            <div class="smartAddress">Woodies NFT</div>
                            <div style={{display:'flex', flexDirection:'row'}}>
                           
                                <IconButton onClick={onCopy} isRound aria-label='Search database' icon={ <FontAwesomeIcon style={{marginRight:5}} icon={faClipboard} />} />
   
                                <div class="smartAddress">0x495f947276749ce646...</div>
                                
                            </div>
                            <div class="smartAddress">Rinkeby Network</div>

                        </div>
                        
                    
                    </Stack>
                </div>
                
                <div style={{flex:1, marginLeft:25, marginRight:25}}>
                    <Stack  
                        boxShadow={'lg'}
                        p={5}
                        rounded={'xl'} bg={useColorModeValue('white', 'gray.900')}>
                        <div class="contractCategoryTitle">
                            Balance
                        </div>
                        <Divider></Divider>
                        <Center style={{padding:50}}>
                            <div class="ethContractBalance">
                            0.06 E
                            </div>
                            
                        </Center>
                        <Button>Withdraw</Button>
                    </Stack>
                </div>

                <div style={{flex:1, marginLeft:25, marginRight:25}}>
                    <Stack  
                        boxShadow={'lg'}
                        p={5}
                        rounded={'xl'}  bg={useColorModeValue('white', 'gray.900')}>
                        <div class="contractCategoryTitle">
                            Sales
                        </div>
                        <Divider></Divider>
                        <Center style={{padding:75}}>
                            <div class="ethContractBalance">
                            <div>3/10,000</div>
                            </div>
                        </Center>
                    </Stack>
                </div>

                
            </div>
            <div style={{marginTop:100}}>

                <Stack  
                    boxShadow={'lg'}
                    p={5}
                    rounded={'xl'}  bg={useColorModeValue('white', 'gray.900')}>
                    <div class="contractCategoryTitle">
                        Transaction History
                    </div>
                
                    <Center style={{padding:75}}>
                        <div class="ethContractBalance">
                        <div>3/10,000</div>
                        </div>
                    </Center>
                </Stack>

            </div>
        
        </div>

        <Header/>
        <Divider/>
        <IconButton isRound aria-label='Search database' icon={ <FontAwesomeIcon style={{marginRight:5}} icon={faArrowLeft} />} />
            <Button onClick={navHome}>
                Back
        </Button>
        
    </div>

  )
}
