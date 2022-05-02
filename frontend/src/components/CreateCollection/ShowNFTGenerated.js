import React, {useState, useEffect} from 'react';
import { Image, } from '@chakra-ui/react';
import './ShowNFTGenerated.css'
import axios from 'axios';

export const ShowNFTGenerated = (props) => {

  const [testNFTs, setTestNFTs] = useState([])

  useEffect(() => {
    axios.get(`${global.API_ENDPOINT}/nftSetup/GetGeneratedImages/174`)
    .then(res => {
      setTestNFTs(res.data)
    })
  }, [])


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
