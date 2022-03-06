import React, { useState, useEffect } from 'react';
import { IconButton, Box, HStack, VStack } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


export const StyleStack = (props) => {

  const layers = props.layers
  const properties = props.properties;

  const addLayer = (opt, layer) => {
    props.addLayer(opt,layer)
  }

  const moveLayer = (layer,index) => {
    layer.move(index)
  }


  return(
    <div>
       <IconButton
         onClick={() => addLayer({}, {at:0})}
         aria-label='Add to friends' icon={<AddIcon />} />
      {
        layers.map((layer, index) => {
          return(
            <VStack>
              <HStack>
                <button onClick={() => moveLayer(layer,layer.getIndex() - 1)}>up</button>
                <button onClick={() => moveLayer(layer,layer.getIndex() + 1)}>down</button>
                <div onClick = {() => layer.select()}>{layer.getLabel()}</div>
                <button onClick={() => layer.remove()}>Delete</button>
              </HStack>

              {
                layer.isSelected() ?

                <div>
                  {
                    properties.map((item, index) => {


                        return(
                          props.renderProperty(item)

                        )
                    })

                  }
                </div>

                :

                <div></div>
              }
            </VStack>
          )
        })
      }
    </div>
  )
}
