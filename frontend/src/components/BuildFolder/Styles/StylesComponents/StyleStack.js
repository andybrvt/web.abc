import React, { useState, useEffect } from 'react';


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
      <button onClick={() => addLayer({}, {at:0})} >this is a button</button>
      {
        layers.map((layer, index) => {
          return(
            <div>
              <button onClick={() => moveLayer(layer,layer.getIndex() - 1)}>up</button>
              <button onClick={() => moveLayer(layer,layer.getIndex() + 1)}>down</button>
              <div onClick = {() => layer.select()}>{layer.getLabel()}</div>
              <button onClick={() => layer.remove()}>Delete</button>
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
            </div>
          )
        })
      }
    </div>
  )
}
