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

import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';

export const StyleFontSize = (props) => {
  const [value, setValue] = React.useState(20)
  const property=props.property
  if(property!=null) {

    const type = property.getType()

    const getDefValue = () => {
      return property.getDefaultValue()
    }
    const options = props.options
    const field = props.field


  }

  const handleChange = (e) => {
    setValue(e)
    props.handleChange(e)
  }


    const handleInput = (value) => {
        property.upValue(value, { partial: true })
      }

  return(
    <div style={{marginTop:30, flexDirection:'row', display:'flex', marginBottom:10}}>

      <Stack shouldWrapChildren direction='row'>
        <NumberInput size='xs' maxW={16} value={value} onChange = {e=>handleChange(e)} min={10}>
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
          onChange = {e=>handleChange(e)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb fontSize='sm' boxSize='30px' children={value} />
        </Slider>
      </div>
    </div>






  )
}
