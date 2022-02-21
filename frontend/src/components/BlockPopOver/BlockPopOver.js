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
  Divider
} from '@chakra-ui/react';
import axios from 'axios';
import './BlockPopOver.css';
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined } from '@ant-design/icons';
import { BlockColorPicker } from './BlockColorPicker';
export const BlockPopOver = (props) => {


  return(
    <div class="popoverContainer">
      <div class="TextPopOverHeader">
        Text Settings
      </div>
      <Divider style={{marginTop:10, marginBottom:0}}/>
      <div class="TextPopOverIndent">


        <div class="rowHeaderPopOver">
         Fonts
         </div>

         <Select
         // bg='tomato'
        // borderColor='tomato'
        // color='white'
           variant='flushed' placeholder='Calibri' >
            <option value='option1'>Helvetica </option>
            <option value='option2'>Times New Roman</option>
            <option value='option3'>Futura</option>
            <option value='option1'>Helvetica </option>
            <option value='option2'>Garamond</option>
            <option value='option1'>Cambria </option>
            <option value='option2'>Verdana</option>
         </Select>


        <div class="rowHeaderPopOver">
         Font Size
         </div>
        <div class="rowPopover">
          <div style={{width:350, marginTop:0}}>
            <Slider
             size="md"
             aria-label='slider-ex-6' >
                {/*<SliderMark
                  value={50}
                  textAlign='center'
                  bg='blue.500'
                  color='white'
                  mt='-10'
                  ml='-5'
                  w='12'
                  >
                  {50}

                </SliderMark>
                */}
                <SliderTrack bg='red.100'>
              <Box position='relative' right={10} />
              <SliderFilledTrack bg='tomato' />
            </SliderTrack>
              <SliderThumb boxSize={3} />
            </Slider>
            </div>
            <div style={{fontSize:25, marginLeft:20}}>
            {50}
          </div>
        </div>
        <Divider style={{marginTop:0}}/>
        <div class="rowHeaderPopOver">


          <div class="rowPopover">
            <div class="textPopOverButton">
              <AntdButton  icon={<BoldOutlined />} />
            </div>
            <div class="textPopOverButton">
              <AntdButton  icon={<ItalicOutlined />} />
            </div>
            <div class="textPopOverButton">
              <AntdButton  icon={<UnderlineOutlined />} />
            </div>
            <div class="textPopOverColor">
            <BlockColorPicker/>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
