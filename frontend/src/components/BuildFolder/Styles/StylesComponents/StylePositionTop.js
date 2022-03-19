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

import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';

export const StylePositionTop = (props) => {
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
    <div>
      <span class="attributeHeader">
        Top
      </span>
      <Input onChange = {e=>handleChange(e)} style={{width:60, padding:10}} ></Input>

    </div>



  )
}
