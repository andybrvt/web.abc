import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { useColorModeValue, Stack,
    Divider,
    Checkbox,
    Image,
    Textarea,
    Button,
    Box,
    Slider,
     SliderTrack,
     SliderFilledTrack,
     SliderThumb,
     SliderMark,
    Tooltip,

} from '@chakra-ui/react';
import { useEthers,} from "@usedapp/core";
import axios from 'axios';
import { useMoralisWeb3Api } from "react-moralis";
import './CreateLayers.css';


export const CreateLayers = (props) => {

  const Web3Api = useMoralisWeb3Api();


  const { account, chainId} = useEthers()

  const [ layerList, setLayerList ] = useState([])
  const [ layerName, setLayerName ] = useState("")

  const [layers, setLayers] = useState([{name: "Base", required: false, images: [], rarity: [] }])
  const [NFTCount, setNFTCount] = useState(0)
  const [NFTCollectionName, setNFTCollectionName] = useState("")


  const [renderedProject, setRenderedProject] = useState({})
  const [renderedImages, setRenderedImages] = useState([])

  const [sliderValue, setSliderValue] = React.useState(5)
  const [showTooltip, setShowTooltip] = React.useState(false)


  const addList = () => {
      setLayerList(oldArray => [...oldArray, layerName]);
  }
  const InputSetLayerName = (e) => {
      setLayerName(e.target.value)
  }



  const addNewLayer = () => {
    setLayers([...layers, {name: "Base", required: false, images: [], rarity: []}])
  }

  const onNameChange = (e, index) => {
    setLayers(
      layers.map((layer,i) => index === i ? {
        ...layer,
        name: e.target.value
      }: layer)
    )
  }

  const onRarityChange = (e, index, rarityIndex) => {
    console.log(e, index, rarityIndex)
    setLayers(
      layers.map((layer, i)=> index === i ? {
        ...layer,
        rarity: layer.rarity.map((rare, idx)=> idx === rarityIndex ? e : rare)
      }: layer)
    )
  }




  const layerImageChange = (e, index) => {

    const array = Array.from(e.target.files)
    const arrLen =e.target.files.length
    const rarityArr = Array(arrLen).fill(10)


    setLayers(
      layers.map((layer,i) => index === i ? {
        ...layer,
        images: [...layer.images, ...array],
        rarity: rarityArr
      }: layer)
    )

  }


  const onChangeCount = (e) => {

    setNFTCount(e.target.value)
  }


  const onCollectionName = (e) => {
    setNFTCollectionName(e.target.value)
  }

  const generateNFTTest = () => {
    const formData =  new FormData()

    const configList = []

    layers.map((item, index) => {

      const configObj = {
        id: index+1,
        name: item.name,
        directory: item.name,
        required: item.required,
        rarity_weights: item.rarity
      }
      configList.push(configObj)


      item.images.map((image, i) => {
        formData.append(`${item.name}-image`, image)


      })



    })


    const configStr = JSON.stringify(configList)


    formData.append("config", configStr)
    formData.append("count", NFTCount)
    formData.append("collectionName", NFTCollectionName)
    formData.append('owner', account)

    axios.post(`${global.API_ENDPOINT}/nftSetup/GenerateNFTs`,
      formData,
      {headers: {"content-type": "multipart/form-data"}}

    )
    .then(res => {

      console.log(res.data)

      const project = res.data.project
      const nft_imgs = res.data.nfts_imgs

      setRenderedProject(project)
      setRenderedImages(nft_imgs)

    })



  }

  const uploadImagesToIPFS = async() => {

    let ipfsArray = []
    let promises = []

    renderedImages.map((item, index) => {

      const name = item.nftImage.split('/')
      const fileName = "image/"+name.slice(-2, name.length).join("/")
      ipfsArray.push({
        path:fileName,
        content: item.base64Img
      })

    })

    const options = {
      abi: ipfsArray
    }
    console.log(options)
    const path = await Web3Api.storage.uploadFolder(options)
    console.log(path)
    // uploadMetadataToIPFS(path[0])

  }

  // const uploadMetadataToIPFS = async(baseURI) => {
  const uploadMetadataToIPFS = async() => {

    const projectId = renderedProject.id
    const projectName = renderedProject.name
    const formData = new FormData()
    // const base_uri_arry = baseURI.path.split("/")
    // base_uri_arry.pop()
    // const real_base_uri = base_uri_arry.join("/") // put back later

    const test_projectId = 160
    const test_projectName = "name"
    const test_base_uri = "https://gateway.moralisipfs.com/ipfs/QmeqRTuc5pamTrb4W5wA7dNSk9PzcUzQ1w8BNBDtwb2AN9/image/160"
    formData.append("projectId", test_projectId)
    formData.append("base_name", test_projectName)
    formData.append("base_uri", test_base_uri)


    // generate the metadata for the images
    axios.post(`${global.API_ENDPOINT}/nftSetup/GenerateMetadata`, formData)
    .then(async res => {
      console.log(res.data)


        let ipfsArray = []
        res.data.map((item, index ) => {


          ipfsArray.push(
            {
              path: `metadata/${index}`,
              content: JSON.parse(item.metaData)
            }
          )


        })

        const options = {
          abi: ipfsArray
        }

        // Upload t IPFS
        const path = await Web3Api.storage.uploadFolder(options)
        const baseMetaURI = path[0]
        const base_meta_uri_arry = baseMetaURI.path.split("/")
        base_meta_uri_arry.pop()
        const real_meta_base_uri = base_meta_uri_arry.join("/")


        const projectId = renderedProject.id
        const formData = new FormData()

        formData.append("projectId", test_projectId)
        formData.append("baseURI", real_meta_base_uri)
        axios.post(`${global.API_ENDPOINT}/nftSetup/SaveBaseURI`, formData)
        .then(res => {

          // Here will be where you will create the smart contract because you have the
          // baseURI

        })


    })




  }




  var data = props.data
  return(
    <div>
      <div>
        <div>This will be for generating the nft</div>

        <div>
          <Button onClick = {addNewLayer}>Add new layer</Button>
        </div>
        {/*
          // Be able to add in new layers (be able to add pictures for each of these new layers). Make sure there is a state that categories each picture by their respective trait
          // A place to input the name of the layer
          // A check box indicating if the trait is required or not
          // A way to adjust the rarity of each of the images that you put in
          */}
          {
            layers.map((layer, index) => {


              return(
                <Box display= "flex" background = 'gainsboro' marginTop = "10px" padding = '10px'  borderWidth='1px' borderRadius='lg' overflow='hidden'>

                  <div class = "boxLeft">
                    <div>
                      <div>Layer name</div>
                      <Input value = {layers[index].name} onChange = {(e)=>onNameChange(e, index)} placeholder = "Name"/>
                    </div>
                    <div>
                      <div>Is the trait required?</div>
                      <Checkbox>Required</Checkbox>
                    </div>
                  </div>

                  <div class = 'boxRight'>
                    <input type="file" multiple onChange={(e) => layerImageChange(e, index)} />
                    <div class = "layer-rarity-holder">
                      {
                        layers[index].images.map((image, imgIndex) => {

                          return (
                            <div class = "layer-rarity-container">
                              <Image
                                boxSize='80px'
                                src = { URL.createObjectURL(image)} />

                              <Slider
                                defaultValue={layers[index].rarity[imgIndex]}
                                min={0}
                                max={100}
                                onChange={(v) => onRarityChange(v, index, imgIndex)}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                                marginLeft = "4px" aria-label='slider-ex-1' >

                                <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
                                  25%
                                </SliderMark>
                                <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
                                  50%
                                </SliderMark>
                                <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
                                  75%
                                </SliderMark>

                                  <SliderTrack>
                                    <SliderFilledTrack />
                                  </SliderTrack>

                                  <Tooltip
                                    hasArrow
                                    bg='teal.500'
                                    color='white'
                                    placement='top'
                                    isOpen={showTooltip}
                                    label={`${layers[index].rarity[imgIndex]}%`}
                                  >
                                    <SliderThumb />
                                  </Tooltip>


                                </Slider>



                              {/*
                                <Input value = {layers[index].rarity[imgIndex]} onChange = {(e)=>onNameChange(e, index)} placeholder = "Name"/>

                                */}

                          </div>
                          )

                        })

                      }
                    </div>
                  </div>

                </Box>
              )

            })
          }

          {/*
            <br />
            <Input onChange = {onChangeCount}  value = {NFTCount} placeholder = "Count"/>
            <br />
            <Input onChange = {onCollectionName} value = {NFTCollectionName} placeholder = "Collection Name"/>
            <br />
            <Button onClick = {generateNFTTest}>Test functions</Button>

            */}

          <div style = {{flexWrap: 'wrap'}}>
            {
              renderedImages.map((item, index) => {

                return(
                  <div>
                    <Image
                      boxSize='100px'
                      src = {`${global.IMAGE_ENDPOINT}`+item.nftImage} />
                  </div>
                )



              })

            }
          </div>


          <div>
            <Button onClick = {uploadImagesToIPFS}>Upload Images to IPFS</Button>
          </div>

          <div>
            <Button onClick = {uploadMetadataToIPFS}>Upload MetaData to IPFS</Button>
          </div>
      </div>
    </div>

  )
}
