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
  Spinner
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle,
   faArrowsAlt,
   faTextHeight,
   faFont, faKeyboard, faPlay, faPalette } from '@fortawesome/free-solid-svg-icons'


export const SectorContainer = (props) => {


  const [properties, setProperties] = useState([])

  useEffect(() => {

    if(props.sector !== null){
      const sector = props.sector;
      setProperties(props.sector.getProperties())
      console.log("hi ")

    }
   
  }, [props.sector])

  // const sector = props.sector;
  // const properties = sector.getProperties();
  console.log('sector', props.sector.getName())
  console.log("what are properties", properties)
  return(
    <div style={{marginBottom:25}}>
      {
        props.sector ?

        <div>
          {/* {props.sector.getName()} */}
          {( props.sector.getName()=="General" ||  props.sector.getName()=="Dimension" ||  props.sector.getName()=="Decorations" ||  props.sector.getName()=="Flex" )?
          ''
        :

        <div>
          {
            ( props.sector.getName()=="Extra")?
              <div class="attributeHeader">
                Opacity
              </div>
            :

            <div>
              {
                ( props.sector.getName()=="Typography"&& (props.blockType=='image'|| props.blockType=="AutomaticNFTShowcase" ||  props.blockType=="SocialMediaFooter" ||  props.blockType=="AddressProfile" ))?
                ''
                :


                <div class="attributeHeader">{ props.sector.getName()}
                </div>

              }


            </div>

          }

        </div>

        }
        <div style={{marginTop:10, marginBottom:20}}/>
        {props.sector.getName()=="General" ?
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
                        sectorName={props.sector.getName()}
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
            (props.sector.getName()=="Dimension" )?
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
                              sectorName={props.sector.getName()}
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
                (props.sector.getName()=="Decorations" )?
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
                                  sectorName={props.sector.getName()}
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
                // dont show any dropdowns if the sector is image, automaticnftshowcase, wrapper, etc.
                <div>
                  {
                    ((props.sector.getName()=="Typography"&& (props.blockType=='image'|| props.blockType=="AutomaticNFTShowcase" ||  props.blockType=="SocialMediaFooter"||  props.blockType=="AddressProfile" ||  props.blockType=="SocialMediaFooter"||  props.blockType=="wrapper"
                    || props.blockType=="link" ))
                    ||props.sector.getName()=="Flex"   
                                 
                    )
                    ?
                      <div>

                      </div>
                    :

                    
                    <div>
                      {
                        properties.map((property, index) => {
                          return(
                            <PropertyContainer
                              sectorName={props.sector.getName()}
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

        :

        <Spinner />


      }

     
        
     

    </div>
  )

}
