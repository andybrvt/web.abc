import React, { useState, useEffect } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFillDrip  } from '@fortawesome/free-solid-svg-icons'
export const StyleSlider = (props) => {
  return(
      <Slider
        onChange = {e => props.handleChange(e)}
        value = {props.value}
        min = {props.min}
        max = {props.max}
        step ={props.step}
        aria-label='slider-ex-4' defaultValue={30}>
        <SliderTrack bg='red.100'>
          <SliderFilledTrack bg='tomato' />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <FontAwesomeIcon style={{color:'#1890ff'}} icon={faFillDrip} />
        </SliderThumb>
      </Slider>
  )
}
