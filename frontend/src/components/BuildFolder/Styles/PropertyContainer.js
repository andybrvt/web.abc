import React, { useState, useEffect } from 'react';
import {StyleColorPicker} from './StylesComponents/StyleColorPicker';
import {StyleRadio} from './StylesComponents/StyleRadio';
import {StyleSelectInput} from './StylesComponents/StyleSelectInput';
import {StyleSelect} from './StylesComponents/StyleSelect';
import {StyleStack} from './StylesComponents/StyleStack';
import {StyleSlider} from './StylesComponents/StyleSlider';
import {StyleFontSize} from './StylesComponents/StyleFontSize';
import {StylePositionTop} from './StylesComponents/StylePositionTop';
import {StylePositionLeft} from './StylesComponents/StylePositionLeft';
import {StylePositionBottom} from './StylesComponents/StylePositionBottom';
import {StylePositionRight} from './StylesComponents/StylePositionRight';
import { CreatableSelect as ChakraFontFamilySelect } from './chakra-react-select';
import { Input, Center} from '@chakra-ui/react'
import { groupedOptions, dogOptions, TextSize, colourOptions} from "../Styles/data";
import './StylesComponents/StylePosition.css'

export const PropertyContainer = (props) => {

  const[property, setProperty] = useState(null);

  useEffect(() => {

    setProperty(props.property)

  },[props.property])

  // if(props.property){
  //   const property = props.property
  // }


  const TextFonts = [
    { id: 1, label: "Lato" },
    { id: 2, label: "Raleway" },
    { id: 3, label: "Poppins" },
    { id: 4, label: "Merriweather" },
    { id: 5, label: "Open Sans" },
    { id: 6, label: "Roboto" },
    { id: 7, label: "Montserrat" },
  ];


  const renderProperty = (property) => {
    const type = property.getType()

    const getDefValue = () => {
      return property.getDefaultValue()
    }

    // function handle changes of the component
    const handleChange = (value) => {
      console.log(value)
      property.upValue(value)
    }

    // function handle inputs of the component
    const handleInput = (value) => {
      property.upValue(value, { partial: true })
    }


    if(type ==="number"){

      var curValue = property.hasValue() ? property.getValue() : getDefValue()
      var label = property.getLabel()
      if(  (props.sectorName=="Dimension" && property.getLabel()=='Top')||
           (props.sectorName=="Dimension" && property.getLabel()=='Left')||
           (props.sectorName=="Dimension" && property.getLabel()=='Right')||
           (props.sectorName=="Dimension" && property.getLabel()=='Bottom')
      ){

        return (
          ''
        )
      }
      if(property.getLabel()=='Top' && props.blockType=="text") {
        return (
          <div style={{height:50}}>
            <div class="paddingPosition">
              <StylePositionTop
                value = {curValue}
                handleChange = {handleChange}
                handleInput = {handleInput}
                />
            </div>
          </div>
        )
      }
      if(property.getLabel()=='Left' && props.blockType=="text"){
        return (
          <div class="paddingPosition">
            <StylePositionLeft
              value = {curValue}
              handleChange = {handleChange}
              handleInput = {handleInput}
              />
          </div>
        )
      }
      if(property.getLabel()=='Right' && props.blockType=="text") {
        return (
          <div class="paddingPosition">
            <StylePositionRight
              value = {curValue}
              handleChange = {handleChange}
              handleInput = {handleInput}
              />
          </div>
        )
      }
      if(property.getLabel()=='Bottom' && props.blockType=="text"){
        return (
          <div class="paddingPosition">
            <StylePositionBottom
              value = {curValue}
              handleChange = {handleChange}
              handleInput = {handleInput}
              />
          </div>
        )
      }
      if((property.getLabel()=='Max width'|| property.getLabel()=='Max height' ||
      property.getLabel()=='Min height' || property.getLabel()=='Line height'
    ) && props.blockType=="text"){
        return (
          ''
        )
      }

      if(property.getLabel()=='Font size'){
        return (
          <StyleFontSize
            value = {curValue}
            handleChange = {handleChange}
            handleInput = {handleInput}
            />
        )
      }

      return(
        <StyleSelectInput
          label = {label}
          field = {property.getId()}
          value = {curValue}
          handleChange = {handleChange}
          handleInput = {handleInput}
           />
      )
    }


    else if(type === "select"){

      // var curValue = props.property.hasValue() ? props.property.getValue() : getDefValue()
      const options = props.property.getOptions()

      function getOptionId(opt){
        return property.getOptionId(opt)
      }
      function getOptionLabel(opt){
        return property.getOptionLabel(opt)


      }

      var label = props.property.getLabel()

      if(props.property .getLabel()=='Display'){
        return (
        ''
        )
      }


      return(
        <div>
          {
          (property.getLabel()=='Font family')?
          <ChakraFontFamilySelect
            style={{width:200}}
            options={TextFonts}
            placeholder={curValue}
            closeMenuOnSelect={false}
            size="sm"
            // value = {curValue}
            handleChange = {handleChange}
            // handleInput = {handleInput}
             />

          :

          <div>
            wwwwwwwwwwwwwwwwwwwwwwww
          <StyleSelect
            label = {label}
            field = {property.getId()}
            handleChange = {handleChange}
            handleInput = {handleInput}
            curValue = {curValue}
            options = {options}
            property={props.property}
            getOptionId = {getOptionId}
            getOptionLabel = {getOptionLabel}
             />
             style select has error


            </div>
         }



        </div>
      )
    }





    }





  return(
    <div>
    {props.property?
      <div key = {props.property.getId()}>
     {/*  <div>{property.getLabel()}</div> */}
      {renderProperty(props.property)}
    </div>

    :
      ''
    }
    </div>


  )
}
