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
  Select,
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
  Text,
} from '@chakra-ui/react';
import axios from 'axios';

import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined } from '@ant-design/icons';
import './BlockAttributes.css';
import { BlockColorPicker } from '../../BlockPopOver/BlockColorPicker'
export const BlockAttributes = (props) => {
  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(0)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)
  return(
    <div style={{width:400, height:'100%', background:'#F7FAFC', padding:20}}>

      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        style={{height:'100%'}}
        boxShadow={'lg'}
        p={6}
        rounded={'xl'}
        // align={'center'}
        pos={'relative'}
        >


        <div class="attributeHeader">Text Style</div>
        <Divider/>
          <div style={{marginTop:20, marginBottom:20}}>
            <Select
              size='xs'
              placeholder='Title' >
               <option value='option1'>Title </option>
               <option value='option2'>HeadLine </option>
               <option value='option1'>Subheadline </option>
               <option value='option2'>Normal Text</option>
               <option value='option1'>Small Text </option>
            </Select>
          </div>
        <div class="attributeHeader">Text Apperance</div>
        // <Divider/>
        {/*
        <div class="attributeSectionHeader">Text Style</div>
        <Divider style={{marginBottom:20}}/>
        */}
          <div class="textStyleContainer">
            <div style={{marginTop:10, marginBottom:20}}>
              <Select
                size='xs'
                 placeholder='Calibri' >
                 <option value='option1'>Helvetica </option>
                 <option value='option2'>Times New Roman</option>
                 <option value='option3'>Futura</option>
                 <option value='option1'>Helvetica </option>
                 <option value='option2'>Garamond</option>
                 <option value='option1'>Cambria </option>
                 <option value='option2'>Verdana</option>
              </Select>
              </div>
          </div>
            <div style={{flexDirection:'row', display:'flex',}}>
              <div style={{marginRight:25}}>
                <BlockColorPicker/>
              </div>

                <div class="textPopOverButton">
                  <AntdButton  icon={<BoldOutlined />} />
                </div>
                <div class="textPopOverButton">
                  <AntdButton  icon={<ItalicOutlined />} />
                </div>
                <div class="textPopOverButton">
                  <AntdButton  icon={<UnderlineOutlined />} />
                </div>

            </div>

          <div style={{marginTop:30, flexDirection:'row', display:'flex',}}>

            <Stack shouldWrapChildren direction='row'>
              <NumberInput size='xs' maxW={16} defaultValue={15}  value={value} onChange={handleChange} min={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Stack>

              <div style={{width:150, marginLeft:50}}>
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
        <div class="attributeHeader">Text</div>
        <Divider/>
      </Stack>

    </div>

  )
}
