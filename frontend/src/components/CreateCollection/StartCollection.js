import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { useColorModeValue, Stack, Button,
    Divider,
    Textarea, 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
    BreadcrumbSeparator,} from '@chakra-ui/react';
    import { ChevronRightIcon} from '@chakra-ui/icons'
import * as dateFns from 'date-fns';
import { Header } from '../Header';

import { useClipboard } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboard, faXMark  } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Steps } from 'antd';

const { Step } = Steps;
export const StartCollection = (props) => {
    const { hasCopied, onCopy }  = useClipboard('0x495f947276749ce646')
    const [name, setName] = useState("");
    const [current, setCurrent] = useState(0);

    const onInputChange = (e) => {
        setName(e.target.value)
    }


    const navHome = () => {
        props.history.push("/home")
    }

    const onChange = current => {
        setCurrent(current)
      };
  var data = props.data
  return(
    <div>
        
        <div class="collectionList">
        
            <div class = "collectionTopContainer">
              <div class="contractBreadCrumb">

              <CloseButton onClick={navHome} size='lg' colorScheme='red'/>
                  <div style={{marginTop:10, display:'flex', flexDirection:'row'}}>
                    Step 1/5

                    
                  </div>
                  <div style={{marginTop:25, marginBottom:25}}>
                    <Steps onChange={onChange} size="small" current={current}>
                        <Step title="Metadata" />
                        <Step title="Layers" />
                        <Step title="Traits" />
                        <Step title="Confirmation" />
                    </Steps>
                  </div>
                <div> Let's grab some info</div>

                <div>
                  
                        <FormControl>
                            <FormLabel isRequired htmlFor='email'>Title of Collection</FormLabel>
                            <Input
                                style={{width:'50%'}} onChange = {onInputChange} placeholder='Enter name' />
                            <FormLabel isRequired htmlFor='first-name'>Description </FormLabel>
                            <Textarea style={{width:'50%'}} placeholder='Here is a sample placeholder' />

                            <FormLabel isRequired  htmlFor='email'>Collection Size</FormLabel>
                            <Input style={{width:'50%'}} id='email' type='email' />
                        </FormControl>

             
                </div>
                {/* <Divider></Divider> */}
                
                
              </div>
            </div>
         
        </div>

        <Header/>
        <Divider style={{color:'#CBD5E0',}}/>
        

        
    </div>

  )
}
