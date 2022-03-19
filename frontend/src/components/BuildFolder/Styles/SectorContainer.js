import React, { useState, useEffect } from 'react';
import {PropertyContainer} from './PropertyContainer';
import { Divider } from '@chakra-ui/react'
export const SectorContainer = (props) => {

  const sector = props.sector;
  const properties = sector.getProperties();
  console.log(sector.getName())
  return(
    <div key = {sector.getId()}>
        <div class="attributeHeader">{sector.getName()}</div>
        <Divider style={{marginTop:10, marginBottom:20}}/>
      {(sector.getName()=="Dimension" && props.blockType=='Text')?
        <div></div>
      :
        ''
      }
      <div>
        {
          properties.map((property, index) => {

            return(
              <PropertyContainer
                blockType={props.blockType}
                property = {property}/>

            )
          })
        }
      </div>
    </div>
  )

}
