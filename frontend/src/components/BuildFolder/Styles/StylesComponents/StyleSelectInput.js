import React, { useState, useEffect } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export const StyleSelectInput = (props) => {




  return(
    <div>
      {props.label}
      <NumberInput defaultValue = {props.value} onChange = {e=>props.handleChange(e)}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </div>


  )
}
