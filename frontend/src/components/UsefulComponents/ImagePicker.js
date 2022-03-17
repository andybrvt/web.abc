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

  onImageClick = (image) => {
    const pickedImages = this.state.selected
    let newerPickedImage

    console.log(image)
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
    }

  }

  render(){

    const { nftImgs } = this.props;
    console.log(this.props)
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
