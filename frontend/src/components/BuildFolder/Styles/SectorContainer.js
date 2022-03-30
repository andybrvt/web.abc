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
   faFont, faKeyboard, faPlay, faPalette } from '@fortawesome/free-solid-svg-icons'


export const SectorContainer = (props) => {

  const sector = props.sector;
  const properties = sector.getProperties();
  return(
    <div style={{marginBottom:25}} key = {sector.getId()}>
        {(sector.getName()=="General" || sector.getName()=="Dimension" || sector.getName()=="Decorations")?
          ''
        :

        <div>
          {
            (sector.getName()=="Extra")?
              <div class="attributeHeader">
                Opacity
              </div>
            :

            <div>
              {
                (sector.getName()=="Typography"&& (props.blockType=='image'|| props.blockType=="AutomaticNFTShowcase" ||  props.blockType=="SocialMediaFooter" ||  props.blockType=="AddressProfile" ))?
                ''
                :

                
                <div class="attributeHeader">{sector.getName()}</div>

              }
     

            </div>
           
          }

        </div>

        }
        {/* remove typography from sector when image block */}
      

        <div style={{marginTop:10, marginBottom:20}}/>
        {sector.getName()=="General" ?
          <Accordion style={{marginTop:50}} allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <FontAwesomeIcon style={{color:'#1890ff', marginRight:10}} icon={faArrowsAlt} />
                  <Box flex='1' textAlign='left'>
                    <div style={{display:'flex', flexDirection:'row', }}>
                      <div class="accordionHeader">
                        Position
                      </div>
                    </div>
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
            (sector.getName()=="Dimension" )?
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <FontAwesomeIcon style={{color:'#1890ff', marginRight:10}} icon={faTextHeight} />
                      <Box flex='1' textAlign='left'>
                        <div style={{display:'flex', flexDirection:'row'}}>
                          <div class="accordionHeader">
                            Dimensions
                          </div>
                        </div>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {
                      properties.map((property, index) => {

                        return(
                          <div style={{padding:10}}>
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
                (sector.getName()=="Decorations" )?
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <FontAwesomeIcon style={{color:'#1890ff', marginRight:10}} icon={faPalette} />
                          <Box flex='1' textAlign='left'>
                            <div style={{display:'flex', flexDirection:'row'}}>
                              <div class="accordionHeader">
                                Decorations
                              </div>
                            </div>
                          </Box>
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
                    (sector.getName()=="Typography"&& (props.blockType=='image'|| props.blockType=="AutomaticNFTShowcase" ||  props.blockType=="SocialMediaFooter"||  props.blockType=="AddressProfile" ))?
                      <div>

                      </div>
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
          }

        </div>


      }
    </div>
  )

}
