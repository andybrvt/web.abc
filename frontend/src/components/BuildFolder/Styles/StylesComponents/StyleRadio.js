import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, Stack, IconButton } from '@chakra-ui/react'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';

export const StyleRadio = (props) => {
  console.log("start")
  console.log(props.property)
  const property=props.property
  if(property!=null) {

    const type = property.getType()

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
    <RadioGroup
      defaultValue={props.curValue}>
      {props.label}
      {property!=null?
        <Stack spacing={4} direction='row'>


          <div onClick = {() => handleClick("left")}>
            <IconButton size="sm" aria-label='Search database'  icon={<AlignLeftOutlined />}  />
          </div>
          <div onClick = {() => handleClick("center")}>
            <IconButton size="sm" aria-label='Search database'  icon={<AlignCenterOutlined />}  />
          </div>

          <div onClick = {() => handleClick("right")}>
            <IconButton size="sm" aria-label='Search database'  icon={<AlignRightOutlined />}  />
          </div>


        </Stack>
        :

        <Stack spacing={4} direction='row'>


          <div>
            <IconButton size="sm" aria-label='Search database'  icon={<AlignLeftOutlined />}  />
          </div>
          <div>
            <IconButton size="sm" aria-label='Search database'  icon={<AlignCenterOutlined />}  />
          </div>

          <div>
            <IconButton size="sm" aria-label='Search database'  icon={<AlignRightOutlined />}  />
          </div>


        </Stack>

      }

    </RadioGroup>

  )
}
