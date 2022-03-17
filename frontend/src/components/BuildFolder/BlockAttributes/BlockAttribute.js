import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
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

  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Divider,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInput,
  Flex,
  NumberInputStepper,
  useColorModeValue,
  Link,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage,
  IconButton,

  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import axios from 'axios';
import Select, { CreatableSelect } from "../Styles/chakra-react-select";
import { CreatableSelect as ChakraFontFamilySelect } from "../Styles/ChakraFontFamilySelect";
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
import './BlockAttribute.css';
import { groupedOptions, dogOptions, TextSize, colourOptions, TextFonts} from "../Styles/data";
// https://codesandbox.io/s/648uv?file=/example.js:212-272
import {StylesContainer} from '../Styles/StylesContainer';
import {BlockActions} from '../Actions/BlockActions';
import {NewStylesContainer} from '../Styles/NewStylesContainer';


export const BlockAttribute = (props) => {

  const [editorMain, setEditorMain] = useState(null)

  useEffect(() => {
    if(props.editor !== null){
        setEditorMain(props.editor)
    }


  }, [props.editor])


  return(
    <div style={{width:575, height:'100%', background:'#F7FAFC', padding:10}}>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList style={{marginBottom:10, marginLeft:20}}>
         <Tab>Styles</Tab>
         <Tab>Action</Tab>
         <Tab>Traits</Tab>
        </TabList>
        <TabPanels>

          <TabPanel  style = {{
              maxHeight: "800px",
              overflow:'auto'
            }}>


              <StylesContainer
                editor = {props.editor}
                />

              {/*
            <NewStylesContainer editor = {props.editor}/>
              */}
            </TabPanel>


          <TabPanel >
            <BlockActions
              editor = {props.editor}
               />
          </TabPanel>
            <TabPanel >

              <div class= "trait-container"></div>


          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
