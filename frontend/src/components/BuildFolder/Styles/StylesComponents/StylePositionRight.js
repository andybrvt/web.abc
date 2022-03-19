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

export const StylePositionRight = (props) => {
  const [value, setValue] = React.useState(20)
  const property=props.property
  const handleChange = (e) => {
    setValue(e.target.value)
    props.handleChange(e.target.value)
  }

  return(
    <div>
      <div class="stylePositionRightCSS">
        <span class="changeAttributeFont">
          Right
        </span>
        <Input
          onChange = {e=>handleChange(e)}
          style={{width:60, padding:10}} >
        </Input>
      </div>
    </div>



  )
}
