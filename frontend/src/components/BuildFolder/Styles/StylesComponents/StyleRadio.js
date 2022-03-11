import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, Stack, IconButton } from '@chakra-ui/react'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';

export const StyleRadio = (props) => {
  const handleClick=null
  if(props.editor!=null){
  console.log(props.editor)
    const sector1=props.editor.styleManager.getSector('typography');
    console.log(sector1)
    //all properties is sector1.getProperties()
    const property = props.editor.styleManager.getProperty('typography', 'text-align')
  console.log(property)

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
  handleClick = (opt) => {
    // props.handleChange(opt)
    property.upValue(opt)
  }
  }
  return(
    <RadioGroup
      onChange = {(e) => props.handleChange(e)}
      defaultValue={props.curValue}>
      {props.label}
      {props.editor!=null?
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
