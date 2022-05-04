import React, {useState, useEffect} from 'react';
import { Image, } from '@chakra-ui/react';
import './ShowNFTGenerated.css'
import axios from 'axios';

export const ShowNFTGenerated = (props) => {

  return(
    <div>
      <div class = "imagesWrapper">
        {
          props.renderedImages.map((item, index) => {

            return(
              <div class = "generatedImages">
                <Image
                  boxSize='100px'
                  src = {`${global.IMAGE_ENDPOINT}`+item.nftImage} />
              </div>
            )



          })

        }
      </div>

    </div>
  )
}
