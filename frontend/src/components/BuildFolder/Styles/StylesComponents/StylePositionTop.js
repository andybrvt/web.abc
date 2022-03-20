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
  const [value, setValue] = React.useState(0);
  const property=props.property
  const handleChange = (e) => {
    setValue(e.target.value)
    props.handleChange(e.target.value)
  }
  return(
    <div>
      <span class="changeAttributeFont">
        Top
      </span>
      <Input
        defaultValue = {props.value}
        onChange = {e=>handleChange(e)}
        style={{width:60, padding:10}} >
      </Input>
    </div>

  )
}
