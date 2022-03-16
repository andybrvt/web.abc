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
import {TextAttributes} from './StylesComponents/TextAttributes';
import {StyleFontSize} from './StylesComponents/StyleFontSize';



export const NewStylesContainer = (props) => {
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
  const [property, setProperty] = useState(null);
  const handleChange = (value) => setValue(value)
  const editor=null

  // all sectors: 'general', 'flex', 'dimension', 'typography', 'decorations','extra'

// for sector typography 8 properties
// 'font-family' , 'font-size' ; 'font-weight'; 'letter-spacing';
// 'color'; 'line-height'; 'text-align'; 'text-shadow'

// for sector decorations 5 properties
// 'background-color', 'border-radius', 'border', 'box-shadow', 'background',

// for sector dimension 6 properties
// 'width', 'height', 'max-width', 'margin', 'padding'

// for sector general 7 properties
// 'display', 'float', 'position' (type radio), 'top', 'right', 'left', 'bottom'

// for sector flex 10 properties
// 'flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order',
// 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self'

// for sector extra
// 'opacity', 'transition'
  useEffect(() => {
    if(props.editor !== null){
      const tempEditor = props.editor
      setEditor(props.editor)
      props.editor.on('component:selected', block =>{
        // const showSectors = tempEditor.StyleManager.getSectors();
        // console.log("all sectors")
        // console.log(showSectors)
        // const sector = tempEditor.StyleManager.getSector('typography');
        const test = tempEditor.StyleManager.getProperties('typography')
        console.log("decoration!!")
        // console.log(sector)
        console.log(test)
        // console.log(block)
        console.log(block._previousAttributes.type)
        if(block._previousAttributes.type==="text")
        {
          console.log("helooo")
          const property = tempEditor.StyleManager.getProperty('typography', 'font-size');
          console.log(property)

          setProperty(property)
        }


      })



      return () => {
        props.editor.off('component:selected', block => {
          const showSectors = tempEditor.StyleManager.getSectors();
          console.log(showSectors)
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

            <TextAttributes
              property={property}
              editor={editor}
              />
        </div>


        <StyleFontSize
          property={property}
          editor={editor}
        />


        <div class="attributeHeader">Text alignment</div>
        <Divider/>
        <div style={{flexDirection:'row', display:'flex', marginTop:20, padding:10, marginBottom:10}}>

          <StyleRadio
            property={property}
            editor={editor}
            />
        </div>

        <div class="attributeHeader">Opacity</div>
        <Divider/>
      </div>


      }



    </Stack>

  )
}
