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
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react';
import axios from 'axios';
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
// import '../BlockAttribute.css'
// https://codesandbox.io/s/648uv?file=/example.js:212-272
import { StyleColorPicker } from '../../Styles/StylesComponents/StyleColorPicker';
import { CreatableSelect as ChakraFontFamilySelect } from "../../Styles/ChakraFontFamilySelect";
import { groupedOptions, dogOptions, TextSize, colourOptions, TextFonts} from "../../Styles/data";
export const ButtonBlockAttribute = (props) => {
  console.log(props.type)
  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(20)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)


  return(
    // remove first div css later
    <div style={{height:775, padding:20}}>
      <div class="buttonHeader">Button Styles</div>
      <div class="attributeHeader">Fill</div>
      <Divider/>
      <div style={{flexDirection:'row', display:'flex', marginTop:20, marginBottom:20}}>
          <div style={{marginRight:25}}>
            <StyleColorPicker
              background={true}
              onStyleChange = {props.onStyleChange}
              />
          </div>
      </div>

      <div style={{marginTop:30, marginBottom:20}}>
        <div class="miniAttributeHeader"> Edit Text</div>
        <div style={{marginBottom:50}}>
          <Input placeholder='medium size' size='sm' />
        </div>
        <div class="attributeHeader">Text Styles</div>
          <Divider style={{marginBottom:20}}/>

        <ChakraFontFamilySelect
          style={{width:200}}
          options={TextFonts}
          placeholder="Cambria"
          closeMenuOnSelect={false}
          size="sm">
        </ChakraFontFamilySelect>

      </div>
      <div style={{flexDirection:'row', display:'flex',}}>
          <div style={{marginRight:25}}>
            <StyleColorPicker
              background={false}
              onStyleChange = {props.onStyleChange}
              />
          </div>
          <div class="textPopOverButton">
            <IconButton size="sm" aria-label='Search database'  icon={<BoldOutlined />}  />
          </div>
          <div class="textPopOverButton">
            <IconButton size="sm" aria-label='Search database'  icon={<ItalicOutlined />}  />
          </div>
          <div class="textPopOverButton">
            <IconButton size="sm" aria-label='Search database'  icon={<UnderlineOutlined />}  />
          </div>
      </div>
      <div style={{marginTop:30, flexDirection:'row', display:'flex', marginBottom:10}}>

        <Stack shouldWrapChildren direction='row'>
          <NumberInput size='xs' maxW={16} value={value} onChange={handleChange} min={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Stack>

        <div style={{width:150, marginLeft:25}}>
          <Slider
            focusThumbOnChange={false}
            value={value}
            onChange={handleChange}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb fontSize='sm' boxSize='30px' children={value} />
          </Slider>
        </div>
      </div>
    </div>

  )
}
