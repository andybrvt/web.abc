import React, { useState, useEffect } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

export const StyleSlider = (props) => {


  return(

      <Slider
        onChange = {e => props.handleChange(e)}
        value = {props.value}
        min = {props.min}
        max = {props.max}
        step ={props.step}
        aria-label='slider-ex-1' >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        {props.value}
      </Slider>

  )
}
