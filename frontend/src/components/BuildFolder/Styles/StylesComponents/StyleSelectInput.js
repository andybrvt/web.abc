import React, { useState, useEffect } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export const StyleSelectInput = (props) => {


  const handleChange = (e) => {
    props.handleChange(e)
  }

  return(
    <div>
      <div class="miniStyleHeader">
        {props.label}
      </div>
      <NumberInput defaultValue = {props.value}
        // onChange = {e=>props.handleChange(e)}
        onChange = {e=>handleChange(e)}
        >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>


  )
}
