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
import Select, { CreatableSelect } from "./chakra-react-select";
import { groupedOptions, dogOptions, TextSize, colourOptions, TextFonts} from "./data";
import { CreatableSelect as ChakraFontFamilySelect } from "./ChakraFontFamilySelect";
import { StyleColorPicker } from './StylesComponents/StyleColorPicker'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';
import { Button as AntdButton } from 'antd';
import { ButtonBlockAttribute } from '../BlockAttributes/ButtonBlockAttribute/ButtonBlockAttribute';
import {StyleRadio} from './StylesComponents/StyleRadio';



export const NewStylesContainer = (props) => {
  console.log(props.editor)
  // property.getID() is "text-align"
  {/*
  const handleChange = (value) => {
    property.upValue(value)
  }

  // function handle inputs of the component
  const handleInput = (value) => {
    property.upValue(value, { partial: true })
  }
  const onChange = (val) => {
    setSliderValue(val);
  };
  */}
  const [value, setValue] = React.useState(20)

  const [sliderValue, setSliderValue] = useState(22)
  const [editorMain, setEditor] = useState(null);
  const [sectors, setSectors] = useState([]);

  const handleChange = (value) => setValue(value)
  const editor=null
  if(props.editor!=null){
  const editor=props.editor
  }
  useEffect(() => {
    if(props.editor !== null){
      const tempEditor = props.editor
      setEditor(props.editor)
      props.editor.on('style:custom', props =>{
        setSectors(tempEditor.StyleManager.getSectors({visible:true}))
      })



      return () => {
        props.editor.off('style:custom', props => {

          setSectors(tempEditor.StyleManager.getSectors({visible:true}))

        })
      }
    }

    // for unmount

  }, [props.editor])


  return(
      <Stack
        bg={useColorModeValue('white', 'gray.900')}
        style={{height:'100%'}}
        boxShadow={'lg'}
        p={5}
        rounded={'xl'}
        // align={'center'}
        pos={'relative'}
        >


      <div>
        {/*
        <ButtonBlockAttribute/>
        */}

      </div>




      {(props.type=='box')?
        <div>hi</div>
      :
      <div style={{height:775, padding:20}}>
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
        <div class="attributeHeader">Text alignment</div>
        <Divider/>
        <div style={{flexDirection:'row', display:'flex', marginTop:20, padding:10, marginBottom:10}}>

        <StyleRadio editor={editor}/>
          </div>

        <div class="attributeHeader">Opacity</div>
        <Divider/>
      </div>


      }



    </Stack>

  )
}
