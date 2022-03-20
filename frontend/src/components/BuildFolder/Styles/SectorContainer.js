import React, { useState, useEffect } from 'react';
import {PropertyContainer} from './PropertyContainer';
import { Divider } from '@chakra-ui/react'
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
export const SectorContainer = (props) => {

  const sector = props.sector;
  const properties = sector.getProperties();
  console.log(sector.getName())
  return(
    <div style={{marginBottom:25}} key = {sector.getId()}>
        {sector.getName()=="General"?
          ''
        :
        <div class="attributeHeader">{sector.getName()}</div>
        }

        <div style={{marginTop:10, marginBottom:20}}/>
        {sector.getName()=="General"?
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Position
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {
                  properties.map((property, index) => {

                    return(
                      <PropertyContainer
                        sectorName={sector.getName()}
                        blockType={props.blockType}
                        property = {property}/>

                    )
                  })
                }
              </AccordionPanel>
            </AccordionItem>

        </Accordion>
        :


      <div>
        {
          properties.map((property, index) => {

            return(
              <PropertyContainer
                sectorName={sector.getName()}
                blockType={props.blockType}
                property = {property}/>

            )
          })
        }
      </div>
      }
    </div>
  )

}
