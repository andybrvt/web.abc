import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react'


export const StyleSelect = (props) => {

  const options = props.options
  const field = props.field

  const handleClick =(opt) => {
    // console.log(opt)
    props.handleChange(opt)
  }

  return(
    <div>
      {props.label}
      <Select
        onChange = {(e) => handleClick(e.target.value)}
        placeholder='Select option'>

        {
          options.map((opt, index) => {



            return(
              <option value={props.getOptionId(opt)}>{props.getOptionLabel(opt)}</option>
            )
          })

        }


      </Select>
      
    </div>

  )
}
