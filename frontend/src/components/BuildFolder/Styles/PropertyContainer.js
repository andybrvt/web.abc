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
import { Input } from '@chakra-ui/react'
import './StylesComponents/StylePosition.css'
export const PropertyContainer = (props) => {

  const property = props.property


  const renderProperty = (property) => {
    const type = property.getType()

    const getDefValue = () => {
      return property.getDefaultValue()
    }

    // function handle changes of the component
    const handleChange = (value) => {
      property.upValue(value)
    }

    // function handle inputs of the component
    const handleInput = (value) => {
      property.upValue(value, { partial: true })
    }


    if(type ==="number"){

      var curValue = property.hasValue() ? property.getValue() : getDefValue()
      var label = property.getLabel()
      console.log(props.sectorName)
      console.log(label)
      if(  (props.sectorName=="Dimension" && property.getLabel()=='Top')||
           (props.sectorName=="Dimension" && property.getLabel()=='Left')||
           (props.sectorName=="Dimension" && property.getLabel()=='Right')||
           (props.sectorName=="Dimension" && property.getLabel()=='Bottom')
      ){

        console.log("TESTLAKD;AL;KJSDF")
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

      var curValue = property.hasValue() ? property.getValue() : getDefValue()
      const options = property.getOptions()
      function getOptionId(opt){
        return property.getOptionId(opt)
      }
      function getOptionLabel(opt){
        return property.getOptionLabel(opt)
      }

      var label = property.getLabel()

      if(property.getLabel()=='Display'){
        return (
        ''
        )
      }
      return(
        <StyleSelect
          label = {label}
          field = {property.getId()}
          handleChange = {handleChange}
          handleInput = {handleInput}
          curValue = {curValue}
          options = {options}
          getOptionId = {getOptionId}
          getOptionLabel = {getOptionLabel}
           />
      )
    }
    else if (type ==="color"){

      var curColor = property.hasValue() ? property.getValue() : getDefValue()

      var label = property.getLabel()


      return(
        <StyleColorPicker
          label = {label}
          handleChange = {handleChange}
          handleInput = {handleInput}
          color = {curValue}/>)
    }

    else if (type ==="radio"){
      {/* taken out is float, position,*/}

      const options = property.getOptions()
      function getOptionId(opt){
        return property.getOptionId(opt)
      }
      function getOptionLabel(opt){
        return property.getOptionLabel(opt)
      }

      var curValue = property.hasValue() ? property.getValue() : getDefValue()



      return(
        ''
      )
    }

    else if(type === "composite"){

      const compProp = property.getProperties()

      return(
        <div>
        {  compProp.map((prp,index) => {

            return(
              renderProperty(prp)
            )



          })}
        </div>
      )

    } else if(type==="stack"){

      const layers = property.getLayers()
      function addLayer(opt, layer){
        property.addLayer(opt, layer)
      }

      const properties = property.getProperties()



      return(
        <StyleStack
          label = {label}
          field = {property.getId()}
          handleChange = {handleChange}
          handleInput = {handleInput}
          layers = {layers}
          addLayer = {addLayer}
          renderProperty= {renderProperty}
          properties = {properties}
           />
      )
    } else if(type === "slider"){

      const value = property.getValue()
      const min = property.getMin()
      const max = property.getMax()
      const step = property.getStep()

      return(
        <StyleSlider
          handleChange = {handleChange}
          handleInput = {handleInput}
          value = {value}
          min = {min}
          max= {max}
          step ={step}
           />
      )
    }



  }

  return(
    <div key = {property.getId()}>
     {/*  <div>{property.getLabel()}</div> */}
      {renderProperty(property)}
    </div>

  )
}
