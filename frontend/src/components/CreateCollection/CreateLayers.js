import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { useColorModeValue, Stack, 
    Divider,
    Textarea, 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Center,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, 
    BreadcrumbSeparator,} from '@chakra-ui/react';
    import { ChevronRightIcon} from '@chakra-ui/icons'
import * as dateFns from 'date-fns';
import { Header } from '../Header';

import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from "@chakra-ui/react";

import { useClipboard } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faClipboard, faXMark  } from '@fortawesome/free-solid-svg-icons'
import { IconButton } from '@chakra-ui/react'
import { CloseButton } from '@chakra-ui/react'
import { Steps } from 'antd';
import './StartCollection.css';

const { Step } = Steps;
export const CreateLayers = (props) => {
    const [ layerList, setLayerList ] = useState([])
    const [ layerName, setLayerName ] = useState("")

    const addList = () => {
        setLayerList(oldArray => [...oldArray, layerName]);
    }
    const InputSetLayerName = (e) => {
        setLayerName(e.target.value)
    }


  var data = props.data
  return(
    <div>
        <Editable defaultValue='Enter layer name'>
        <EditablePreview />
        <EditableInput onChange={InputSetLayerName}/>
        </Editable>
        <Button onClick={addList}>Add Layer</Button>
        {layerList.map((item)=>
               <div style={{background:'red', padding:25, borderRadius:10, marginBottom:20}}> {item}</div>
        )}
        
    </div>

  )
}
