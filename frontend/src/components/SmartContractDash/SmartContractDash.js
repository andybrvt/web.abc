import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { useColorModeValue, Stack, Button} from '@chakra-ui/react';
import * as dateFns from 'date-fns';
import { Header } from '../Header';

export const SmartContractDash = (props) => {
    const navHome = () => {
        props.history.push("/home")
    }
  var data = props.data
  return(
    <div>

        <div class="collectionList">
            <div class = "collectionTopContainer">
              <div class="collectionTitle">
                My Contracts
              </div>
            </div>
            <div style={{marginTop:50, display:'flex', flexDirection:'row'}}>
                <Stack  
                    boxShadow={'lg'}
                    p={5}
                    rounded={'xl'} style={{width:300, height:300}} bg={useColorModeValue('white', 'gray.900')}>
                    <div>
                        Basic Information
                    </div>
                    <div>Contract address: 0x2DaA35962A6D43EB54C48367b33d0B3...</div>
                </Stack>


                <Stack  
                    boxShadow={'lg'}
                    p={5}
                    rounded={'xl'} style={{width:300, height:300}} bg={useColorModeValue('white', 'gray.900')}>
                    <div>
                        Balance
                    </div>
                    <div style={{marginLeft:100, top:100}}>0.06 Eth</div>
                </Stack>

                <Stack  
                    boxShadow={'lg'}
                    p={5}
                    rounded={'xl'} style={{width:300, height:300}} bg={useColorModeValue('white', 'gray.900')}>
                    <div>
                        Sales
                    </div>
                    <div>3/10,000</div>
                </Stack>
            </div>
        </div>
        <Header/>
        <Button onClick={navHome}>
             Back to Home
        </Button>
        
    </div>

  )
}
