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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle,
   faArrowsAlt,
   faTextHeight,
   faFont, faKeyboard, faPlay  } from '@fortawesome/free-solid-svg-icons'


export const SectorContainer = (props) => {

  const sector = props.sector;
  const properties = sector.getProperties();
  return(
    <div style={{marginBottom:25}} key = {sector.getId()}>
        {sector.getName()=="General" || sector.getName()=="Dimension" ?
          ''
        :
        <div class="attributeHeader">{sector.getName()}</div>
        }

        <div style={{marginTop:10, marginBottom:20}}/>
        {sector.getName()=="General" ?
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                    <FontAwesomeIcon style={{color:'#1890ff', marginRight:20}} icon={faArrowsAlt} />
                    <div class="attributeHeader">
                      Position
                    </div>

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
            (sector.getName()=="Dimension" )?
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                        <FontAwesomeIcon style={{color:'#1890ff', marginRight:20}} icon={faTextHeight} />
                        <div class="attributeHeader">
                          Dimension
                        </div>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {
                      properties.map((property, index) => {

                        return(
                          <div style={{padding:15}}>
                            <PropertyContainer
                              sectorName={sector.getName()}
                              blockType={props.blockType}
                              property = {property}/>

                          </div>


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


      }
    </div>
  )

}
