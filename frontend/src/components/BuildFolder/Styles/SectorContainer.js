import React, { useState, useEffect } from 'react';
import {PropertyContainer} from './PropertyContainer';

export const SectorContainer = (props) => {

  const sector = props.sector;
  const properties = sector.getProperties();
  
  return(
    <div key = {sector.getId()}>
        <div class="sectorName">{sector.getName()}</div>
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
