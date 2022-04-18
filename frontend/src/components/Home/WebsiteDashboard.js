import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography, Card, Col, Row } from 'antd';
import { useColorModeValue, Stack, Button, Tag, TagLabel, Image, Link} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import * as dateFns from 'date-fns';
import { CloseButton } from '@chakra-ui/react'
import { Header } from '../Header';
import axios from 'axios';
export const WebsiteDashboard = (props) => {
    const [website, setWebsites] = useState([]);
    const navHome = () => {
        props.history.push("/home")
    }
    const navContract = () => {
        props.history.push("/contract")
    }

    useEffect(() => {
        console.log(props)
        // axios.get(`${global.API_ENDPOINT}/builder/getWebsiteInfo`)
        // .then(res => {
        //   setWebsites(res.data)
        // })
        // console.log(website)
  
      },[])


  return(
    <div>

        <div class="collectionList">
            <div class = "collectionTopContainer">
                <div class="collectionTitle">
                    Dashboard
                </div>
                <div style={{background:'//#endregionF0FFF4', padding:20, marginTop:30, marginBottom:30}}>
                    
                <div>
                <Row gutter={16}>
                
                <Col span={8}>
                <Image
                    rounded={'lg'}
                src={'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'} alt={'Rear view of modern home with pool'}/>
                </Col>
                <Col span={8}>
                    <Card title="Domain" bordered={false}>
                    <Link href='https://webdotabc.xyz/1/pinghsu520' isExternal>
                    https://webdotabc.xyz/1/pinghsu520 <ExternalLinkIcon mx='2px' />
                    </Link>
                    <br/>
                    Last Modified: April 14th, 2021
                    </Card>
                </Col>
              
                </Row>
             </div>
                                   

                </div>
                <div class="collectionTitle">
                        BlockChain
                </div>
                <div style={{marginTop:40, display:'flex', flexDirection:'row'}}>
                        
                        <Stack  
                            onClick={navContract}
                            boxShadow={'lg'}
                            p={5}
                            rounded={'xl'} style={{width:300, height:300, marginRight:25}} bg={useColorModeValue('white', 'gray.900')}>
                            <div style={{padding:10}}>
                            <Tag size='lg' colorScheme='red' borderRadius='full'>
                                <TagLabel>NFT</TagLabel>
                            </Tag>
                                <div>Woodies NFT</div>
                                <div>0x2DaA35962A6D43EB54C48367b33d0B3...</div>
                                <div>Rinkeby Network</div>
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
                                <div>Woodies NFT</div>
                                <div>0x2DaA35962A6D43EB54C48367b33d0B3...</div>
                                <div>Rinkeby Network</div>
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
                                <div>Woodies NFT</div>
                                <div>0x2DaA35962A6D43EB54C48367b33d0B3...</div>
                                <div>Rinkeby Network</div>
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
