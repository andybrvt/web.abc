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
import { StyleColorPicker } from '../Styles/StylesComponents/StyleColorPicker'
import {NewStylesContainer} from '../Styles/NewStylesContainer';
import {StylesContainer} from '../Styles/StylesContainer';
import { ButtonBlockAttribute } from './ButtonBlockAttribute/ButtonBlockAttribute';
import { ActionAttribute } from './ActionAttribute'
import { motion, AnimatePresence } from "framer-motion";


const routesAnimationVariants = {
  hidden: {
    opacity: 0,
    x: "400px"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0, duration: 0.6 }
  },
  exit: {
    x: "-400px",
    opacity: 0,
    transition: {
      duration: 0.8
    }
  }
};


export const BlockAttribute = (props) => {
  console.log(props.type)
  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(20)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)

  const [editorMain, setEditorMain] = useState(null)

  const onStyleChange = (item) => {

    console.log(editorMain.getSelected().getEl())

    const style = item.name
    switch(style){
      case "color":
        console.log(item.value, 'here here')

        // editorMain.getSelectedToStyle().setStyle({color:item.value})

        break;
      defaultp:
        console.log('no styles to change')
    }
  }

  useEffect(() => {
    if(props.editor !== null){
        setEditorMain(props.editor)
    }


  }, [props.editor])


  const TabPanelContent = ({ children }) => {
  const currentPanelRef = useRef(document.createElement("div"));

  return (
    <Box
      as={motion.div}
      variants={routesAnimationVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      pos="absolute"
      ref={currentPanelRef}
      p={3}
    >
      {children}
    </Box>
  );
};

  return(
    <div style={{width:575, height:'100%', background:'#F7FAFC', padding:10}}>
      <Tabs isLazy={true} variant='soft-rounded' colorScheme='green'>
        <TabList style={{marginBottom:10, marginLeft:20}}>
         <Tab>Styles</Tab>
         <Tab>Action</Tab>
        </TabList>
        <TabPanels>

          <TabPanel  style = {{
              maxHeight: "800px",
              overflow:'auto'
            }}>
              <StylesContainer
                editor = {props.editor}
                />

          </TabPanel>
            <TabPanel style = {{background: 'pink'}}>
            {/*
              <TabPanelContent>
                <ActionAttribute/>
              </TabPanelContent>
              */}
              <NewStylesContainer />

          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
