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
import { CreateLayers } from './CreateLayers';
import { useClipboard } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboard, faXMark  } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Steps } from 'antd';
import './StartCollection.css';

const { Step } = Steps;
export const StartCollection = (props) => {
    const { hasCopied, onCopy }  = useClipboard('0x495f947276749ce646')
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [collectionSize, setCollectionSize] = useState(0);
    const [current, setCurrent] = useState(1);


    const onInputSetName = (e) => {
        setName(e.target.value)
    }

    const onInputSetDescription = (e) => {
      setName(e.target.value)
    }

    const onInputChange = (e) => {
      setName(e.target.value)
    }

    const onInputSetCollectionSize = (e) => {
      setCollectionSize(e.target.value)
    }


    const navHome = () => {
        props.history.push("/home")
    }

    const onChange = current => {
        setCurrent(current)
      };

    const incrementStep = () => {
      setCurrent(current + 1)
    }

    const decrementStep = () => {
      setCurrent(current - 1)
    }

  var data = props.data
  return(
    <div>

        <div class="startCollectionContainer">

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


                {current==0?
                <div>
                  <div> Let's grab some info</div>
                  <div>
                    <FormControl>
                        <FormLabel isRequired htmlFor='email'>Title of Collection</FormLabel>
                        <Input
                            style={{width:'50%'}} onChange = {onInputSetName} placeholder='Enter name' />
                        <FormLabel isRequired htmlFor='first-name'>Description </FormLabel>
                        <Textarea style={{width:'50%'}} placeholder='Here is a sample placeholder' />

                        <FormLabel isRequired  htmlFor='email'>Collection Size</FormLabel>
                        <Input
                        onChange = {onInputSetCollectionSize}
                        style={{width:'50%'}} id='email' type='email' />
                    </FormControl>
                  </div>
                </div>
              :
                  <div> <CreateLayers></CreateLayers></div>
              }


              {current==1?
              <div class="collectionButton">

                <div style={{flexDirection:'row', display:'flex'}}>
                  <div class="collectionPreviousButton" >
                    <Button onClick={decrementStep}> Previous</Button>
                  </div>
                  <Button onClick={incrementStep}> Next</Button>

                </div>


              </div>

              :
              <div class="collectionButton">
                <Button onClick={incrementStep}> Next</Button>

              </div>
              }

              </div>
            </div>

        </div>

        <Header/>
        <Divider style={{color:'#CBD5E0',}}/>



    </div>

  )
}
