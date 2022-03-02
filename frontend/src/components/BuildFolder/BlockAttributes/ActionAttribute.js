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
  Link,
  FormControl,
  FormLabel,
  Code,
  FormErrorMessage,
  IconButton,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { Button as AntdButton } from 'antd';
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';


export const ActionAttribute = (props) => {
  console.log(props.type)
  const onChange = (val) => {
    setSliderValue(val);
  };
  const [value, setValue] = React.useState(20)
  const handleChange = (value) => setValue(value)
  const [sliderValue, setSliderValue] = useState(22)


  return(
    <div>
      <Stack
        bg={useColorModeValue('white', 'gray.900')}
        style={{height:'100%'}}
        boxShadow={'lg'}
        p={5}
        rounded={'xl'}
        // align={'center'}
        pos={'relative'}
        >
        <div style={{height:775, padding:20}}>
          
          Add Function
        </div>
      </Stack>
    </div>
  )
}
