import React, { useState, useEffect } from 'react';
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
import './BlockAttributes.css';
import { groupedOptions, dogOptions, TextSize, colourOptions, TextFonts} from "../Styles/data";
// https://codesandbox.io/s/648uv?file=/example.js:212-272
import { BlockColorPicker } from '../Styles/BlockPopOver/BlockColorPicker'
import {NewStylesContainer} from '../Styles/NewStylesContainer';
import {StylesContainer} from '../Styles/StylesContainer';

export const BlockAttributes = (props) => {
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
      default:
        console.log('no styles to change')
    }
  }

  useEffect(() => {
    if(props.editor !== null){
        setEditorMain(props.editor)
    }


  }, [props.editor])


  return(
    <div style={{width:400, height:'100%', background:'#F7FAFC', padding:10}}>

      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList>
         <Tab>Styles</Tab>
         <Tab>Action</Tab>
        </TabList>
        <TabPanels>

          <TabPanel >
            <StylesContainer
              editor = {props.editor}
              />
          </TabPanel>


          <TabPanel style = {{background: 'pink'}}>
            Hi
          </TabPanel>

        </TabPanels>

      </Tabs>

    </div>
  )
}
