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
        p={8}
        rounded={'xl'}
        // align={'center'}
        pos={'relative'}
        >
        <div class="attributeHeader">Text</div>
        // <Divider/>
        <div class="attributeSectionHeader">Text Style</div>
        <Divider style={{marginBottom:20}}/>
          <div class="textStyleContainer">

            <Select
            // bg='tomato'
           // borderColor='tomato'
           // color='white'
              size='xs'
              variant='flushed' placeholder='Calibri' >
               <option value='option1'>Helvetica </option>
               <option value='option2'>Times New Roman</option>
               <option value='option3'>Futura</option>
               <option value='option1'>Helvetica </option>
               <option value='option2'>Garamond</option>
               <option value='option1'>Cambria </option>
               <option value='option2'>Verdana</option>
            </Select>
          </div>
            <div style={{marginTop:30, flexDirection:'row', display:'flex',}}>
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
            <NumberInput
              style={{marginRight:20}}
              size='sm'  maxW={20}  min={10}
               value={value} onChange={handleChange}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
              <div style={{width:100}}>
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
