import React, { useState, useEffect } from 'react';
import {StyleColorPicker} from './StylesComponents/StyleColorPicker';
import {StyleRadio} from './StylesComponents/StyleRadio';
import {StyleSelectInput} from './StylesComponents/StyleSelectInput';
import {StyleSelect} from './StylesComponents/StyleSelect';
import {StyleStack} from './StylesComponents/StyleStack';
import {StyleSlider} from './StylesComponents/StyleSlider';
import {StyleFontSize} from './StylesComponents/StyleFontSize';
import { Input } from '@chakra-ui/react'
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
      console.log(property)
      if(property.getLabel()=='Top' &&props.blockType=="text"){
        return (
          <div>
            <span class="attributeHeader">
              Top
            </span>

            <Input style={{width:60, padding:10}} value={25}></Input>
          </div>
        )
      }

      console.log(property.getLabel())
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

      const options = property.getOptions()
      function getOptionId(opt){
        return property.getOptionId(opt)
      }
      function getOptionLabel(opt){
        return property.getOptionLabel(opt)
      }

      var curValue = property.hasValue() ? property.getValue() : getDefValue()



      return(
    <div>hi</div>
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
      <div>{property.getLabel()}</div>
      {renderProperty(property)}
    </div>

  )
}
