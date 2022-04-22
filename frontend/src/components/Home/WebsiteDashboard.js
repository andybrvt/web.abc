import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography, Card, Col, Row } from 'antd';
import { Center, useColorModeValue, Stack, Button, Tag, TagLabel, Image, Link} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import * as dateFns from 'date-fns';
import { CloseButton } from '@chakra-ui/react'
import { Header } from '../Header';
import axios from 'axios';
import './WebsiteDashboard.css';
import { useClipboard } from '@chakra-ui/react'

export const WebsiteDashboard = (props) => {
    const [website, setWebsites] = useState([]);

    const navHome = () => {
        props.history.push("/home")
    }
    const navContract = () => {
        props.history.push("/contract")
    }


    const navBuilder = (websiteId, websiteType, websiteDeployedCondition) => {


          props.history.replace(`/build/${props.history.location.state.websiteId}/personal`, 'test',{
            websiteId: websiteId
          })
        
        
      }

    useEffect(() => {
        console.log(props)
        console.log("WWWWWWWWWWWWWWWWWWWWWww")
        axios.get(`${global.API_ENDPOINT}/builder/getWebsiteInfo/`+props.history.location.state.websiteId)
        .then(res => {
            console.log(res)
            console.log(res.data)
          setWebsites(res.data)
        })
        console.log(website)
        // console.log(props.history.location.state.websiteId)
     
      },[])


  return(
    <div>

        <div class="collectionList">
            <div class = "collectionTopContainer">
                <div class="collectionTitle">
                    Dashboard -- {website.name}
                </div>
                <div style={{ padding:20, marginTop:25, marginBottom:30}}>
                    
                <div>
                <Row gutter={16}>
                
                <Col span={8}>
                <Image
                    onClick={navBuilder}
                    rounded={'lg'}
                src={'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'} alt={'Rear view of modern home with pool'}/>
                </Col>
                <Col span={8}>
                    <Card title="Domain" bordered={false}>
                    <Link href='https://webdotabc.xyz/1/pinghsu520' isExternal>
                    https://webdotabc.xyz/1/pinghsu520 <ExternalLinkIcon mx='2px' />
                    </Link>
                    <br/>
                    {website.lastChanged}
                    {/* {dateFns.format(new Date(website.lastChanged), 'MMMM dd, yyyy')} */}
                    {/* dateFns.format(new Date(website.lastChanged), 'MMMM dd, yyyy')} */}
                    Last Modified: April 14th, 2021
                    </Card>
                </Col>
              
                </Row>
             </div>
                                   

                </div>
                <div class="collectionTitle">
                        BlockChain
                </div>
                <div style={{marginTop:25, padding:20,  display:'flex', flexDirection:'row'}}>
                    
                        <Stack  
                            onClick={navContract}
                            boxShadow={'lg'}
                            p={5}
                            rounded={'xl'} style={{width:300, height:300, marginRight:25}} bg={useColorModeValue('white', 'gray.900')}>
                            <Center>
                                <div style={{padding:0}}>
                                
                                    <Tag size='lg' colorScheme='red' borderRadius='full'>
                                        <TagLabel>NFT</TagLabel>
                                    </Tag>
                                    <div class="smartContractTitle">Woodies NFT</div>
                                    
                                    <div class="smartAddress">test...</div>
                                    <div class="whichNetwork">Rinkeby Network</div>
                                </div>
                            </Center>
                           
                        </Stack>
                        
                        <Stack  
                            onClick={navContract}
                            boxShadow={'lg'}
                            p={5}
                            rounded={'xl'} style={{width:300, height:300, marginRight:25}} bg={useColorModeValue('white', 'gray.900')}>
                            <div style={{padding:10}}>
                            <Tag size='lg' colorScheme='red' borderRadius='full'>
                                <TagLabel>NFT</TagLabel>
                            </Tag>
                                <div class="smartContractTitle">Woodies NFT</div>
                                {/* <Button onClick={copyClick2('test2')} ml={2}> copy </Button> */}
                                <div class="smartAddress">test...</div>
                                <div class="whichNetwork">Rinkeby Network</div>
                            </div>
                            
                        </Stack>
                        <Stack  
                            onClick={navContract}
                            boxShadow={'lg'}
                            p={5}
                            rounded={'xl'} style={{width:300, height:300, marginRight:25}} bg={useColorModeValue('white', 'gray.900')}>
                            <div style={{padding:10}}>
                            <Tag size='lg' colorScheme='red' borderRadius='full'>
                                <TagLabel>NFT</TagLabel>
                            </Tag>
                                <div class="smartContractTitle">Woodies NFT</div>
                                {/* <Button onClick={copyClick3('test3')} ml={2}> copy </Button> */}
                                <div class="smartAddress">test...</div>
                                <div class="whichNetwork">Rinkeby Network</div>
                            </div>
                            
                        </Stack>

                    </div>
            </div>
        </div>
        <Header/>
        <CloseButton onClick={navHome} style={{marginLeft:100}} />
        
    </div>

  )
}
