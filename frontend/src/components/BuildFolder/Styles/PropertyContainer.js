import React, { useState, useEffect } from 'react';
import {StyleColorPicker} from './StylesComponents/StyleColorPicker';
import {StyleRadio} from './StylesComponents/StyleRadio';
import {StyleSelectInput} from './StylesComponents/StyleSelectInput';
import {StyleSelect} from './StylesComponents/StyleSelect';
import {StyleStack} from './StylesComponents/StyleStack';

export const PropertyContainer = (props) => {

  const property = props.property



  const renderProperty = (property) => {
    const type = property.getType()

    const getDefValue = () => {
      return property.getDefaultValue()
    }

    // function handle changes of the component
    const handleChange = (value) => {
      console.log(property.getId())
      property.upValue(value)
    }

    // function handle inputs of the component
    const handleInput = (value) => {
      property.upValue(value, { partial: true })
    }


    if(type ==="number"){

      var curValue = property.hasValue() ? property.getValue() : getDefValue()
      var label = property.getLabel()

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
        <StyleRadio
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

    else if(type === "composite"){

      const compProp = property.getProperties()

      return(
        <div>
        {  compProp.map((prp,index) => {

            console.log(prp.getId(), 'here are the props')
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
    }



  }

  return(
    <div key = {property.getId()}>
      <div>Label:{property.getLabel()}</div>
      <div>Type:{property.getType()}</div>
      {renderProperty(property)}
    </div>

  )
}
