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
      <div class="miniStyleHeader">
        {props.label}
      </div>

      <Select
        onChange = {(e) => handleClick(e.target.value)}
        placeholder={props.curValue}>

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
