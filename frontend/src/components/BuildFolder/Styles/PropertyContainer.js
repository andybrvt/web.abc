import React, { useState, useEffect } from 'react';
import {StyleColorPicker} from './StylesComponents/StyleColorPicker';
import {StyleRadio} from './StylesComponents/StyleRadio';
export const PropertyContainer = (props) => {

  const property = props.property

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

  const renderProperty = (property) => {
    const type = property.getType()

    if(type ==="number"){
      return(<input />)
    }
    else if (type ==="color"){

      var curColor = property.hasValue() ? property.getValue() : getDefValue()


      return(
        <StyleColorPicker
          handleChange = {handleChange}
          handleInput = {handleInput}
          color = {curColor}/>
      )
    }

    else if (type ==="select"){

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
