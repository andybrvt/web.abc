import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, Stack, IconButton } from '@chakra-ui/react'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';

export const TextAttributes = (props) => {
  console.log("start")
  console.log(props.property)
  const property=props.property
  if(property!=null) {

    const type = property.getType()
    console.log(property.getOptions())
    const getDefValue = () => {
      return property.getDefaultValue()
    }
    const options = props.options
    const field = props.field
    function getOptionId(opt){
      return property.getOptionId(opt)
    }
    function getOptionLabel(opt){
      return property.getOptionLabel(opt)
    }

  }

  const handleClick = (opt) => {
    console.log("test button click")
    // props.handleChange(opt)
        property.upValue(opt)
  }



    const handleInput = (value) => {
        property.upValue(value, { partial: true })
      }

  return(
    <div style={{flexDirection:'row', display:'flex',}}>

      <div onClick = {() => handleClick("left")} class="textPopOverButton">
        <IconButton size="sm" aria-label='Search database'  icon={<BoldOutlined />}  />
      </div>
      <div onClick = {() => handleClick("center")} class="textPopOverButton">
        <IconButton size="sm" aria-label='Search database'  icon={<ItalicOutlined />}  />
      </div>
      <div onClick={() => handleClick("right")} class="textPopOverButton">
        <IconButton size="sm" aria-label='Search database'  icon={<UnderlineOutlined />}  />
      </div>
    </div>






  )
}
