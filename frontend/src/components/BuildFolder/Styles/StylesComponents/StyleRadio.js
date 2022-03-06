import React, { useState, useEffect } from 'react';
import { Radio, RadioGroup, Stack, IconButton } from '@chakra-ui/react'
import { ItalicOutlined, BoldOutlined, UnderlineOutlined, AlignCenterOutlined, AlignRightOutlined, AlignLeftOutlined } from '@ant-design/icons';

export const StyleRadio = (props) => {

  const options = props.options
  const field = props.field

  const handleClick = (opt) => {
    props.handleChange(opt)
  }
  return(
    <RadioGroup
      onChange = {(e) => props.handleChange(e)}
      defaultValue={props.curValue}>
      {props.label}
      <Stack spacing={4} direction='row'>
        {
          options.map((opt, index) => {


            if(field === "text-align"){
              if(props.getOptionId(opt) !== "justify"){
                if(props.getOptionId(opt) === "left"){
                  return(
                    <div onClick = {() => handleClick(props.getOptionId(opt))}>
                      <IconButton size="sm" aria-label='Search database'  icon={<AlignLeftOutlined />}  />
                    </div>

                  )
                } else if(props.getOptionId(opt) === "center"){
                  return(
                    <div onClick = {() => handleClick(props.getOptionId(opt))}>
                      <IconButton size="sm" aria-label='Search database'  icon={<AlignCenterOutlined />}  />
                    </div>

                  )
                } else {
                  return(
                    <div onClick = {() => handleClick(props.getOptionId(opt))}>
                      <IconButton size="sm" aria-label='Search database'  icon={<AlignRightOutlined />}  />
                    </div>

                  )
                }

              }



            } else {

                return(
                  <Radio key = {props.getOptionId(opt)} value={props.getOptionId(opt)}>
                    {props.getOptionLabel(opt)}
                  </Radio>
                )



            }







          })
        }


      </Stack>
    </RadioGroup>

  )
}
