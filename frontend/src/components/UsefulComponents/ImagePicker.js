import React from 'react';
import './ImagePicker.css';
import ImageItem from './ImageItem';
import { Map } from 'immutable'

class ImagePickerCustom extends React.Component{


  constructor(props){
    super(props)
    this.state = {
      selected: Map()
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.allSelected !== this.props.allSelected){
      if(this.props.allSelected){
        // this.onSelectAll()

      } else {

      }

    }

  }

  onSelectAll = () => {
    const {nftImgs} = this.props;

    var selectedObj = {}
    var pickedImageToArray = []




    nftImgs.map((item, i) => {

      const img = item.img
      const name = item.name
      const value = i;
      const obj = {
        src: img,
        name: name,
        value: value
      }



      // selectedObj[i] = obj;
      // pickedImageToArray.push(obj)


    })







  }

  onUnselectAll = () => {

  }

  onImageClick = (image) => {
    const pickedImages = this.state.selected
    let newerPickedImage

    // if(pickedImages.has())
    if(pickedImages.has(image.value)){
      newerPickedImage = pickedImages.delete(image.value)
    } else {
      newerPickedImage = pickedImages.set(image.value, image)
    }

    if(newerPickedImage){
      this.setState({
        selected: newerPickedImage
      })

      const pickedImageToArray = []
      newerPickedImage.map((image, i) => pickedImageToArray.push(image))

      this.props.onPick(pickedImageToArray)
    }

  }

  render(){

    const { nftImgs } = this.props;
    console.log(this.state.selected)
    return(
      <div class="pickerContainer">


        {
          nftImgs.map((item, index) => {

            return(
              <ImageItem
                isSelected = {this.state.selected.has(index)}
                img = {item.img}
                name = {item.name}
                value = {index}
                onImageClick = {this.onImageClick}
                 />
            )
          })
        }

      </div>
    )
  }
}

ImagePickerCustom.defaultProps = {
  nftImgs: []
}

export default ImagePickerCustom;
