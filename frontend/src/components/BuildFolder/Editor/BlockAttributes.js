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
} from '@chakra-ui/react';
import axios from 'axios';
import Select, { CreatableSelect } from "./chakra-react-select";
import { CreatableSelect as ChakraFontFamilySelect } from "./ChakraFontFamilySelect";
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
import './BlockAttributes.css';
import { groupedOptions, dogOptions, TextSize, colourOptions, TextFonts} from "./data";
// https://codesandbox.io/s/648uv?file=/example.js:212-272
import { BlockColorPicker } from '../../BlockPopOver/BlockColorPicker'
export const BlockAttributes = (props) => {
  console.log(props.type)
  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(20)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)
  return(
    <div style={{width:400, height:'100%', background:'#F7FAFC', padding:20}}>
      <Stack
        bg={useColorModeValue('white', 'gray.900')}
        style={{height:'100%'}}
        boxShadow={'lg'}
        p={6}
        rounded={'xl'}
        // align={'center'}
        pos={'relative'}
        >
      <div style={{marginBottom:30}}>
          test test test
      </div>
         {

            (props.type=='text')?
            <div>

              <div class="attributeHeader">Text Style</div>
              <Divider/>
              <div style={{marginTop:20, marginBottom:20}}>
                <Select
                  purpose="textSize"
                  name="colors"
                  options={TextSize}
                  placeholder="Normal Text"
                  closeMenuOnSelect={false}
                  size="sm">
                </Select>
              </div>
              <div class="attributeHeader">Text Appearance</div>
              <Divider/>
              <div style={{marginTop:20, marginBottom:20}}>
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
                    <BlockColorPicker/>
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
              <div class="attributeHeader">Text alignment</div>
              <Divider/>
              <div style={{flexDirection:'row', display:'flex', marginTop:20, padding:10, marginBottom:10}}>
                  <div style={{marginRight:25}}>
                  </div>
                  <div class="justifyButtonCSS">
                    <IconButton size="sm" aria-label='Search database'  icon={<AlignLeftOutlined />}  />
                  </div>
                  <div class="justifyButtonCSS">
                    <IconButton size="sm" aria-label='Search database'  icon={<AlignCenterOutlined />}  />
                  </div>
                  <div class="justifyButtonCSS">
                    <IconButton size="sm" aria-label='Search database'  icon={<AlignRightOutlined />}  />
                  </div>
              </div>
              <div class="attributeHeader">Opacity</div>
              <Divider/>

          </div>
          :
          <div>
           {
              (props.type=='box')?
            <div>
              <AntdButton type="primary" shape="circle">
                A
              </AntdButton>
            </div>
            :
            <div>test</div>
            }
          </div>
          }
      </Stack>
  </div>
  )

}
