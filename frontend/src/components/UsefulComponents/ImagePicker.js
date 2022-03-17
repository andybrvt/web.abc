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

  render(){

    const { nftImgs } = this.props;
    console.log(this.props)
    return(
      <div class="pickerContainer">
        {
          nftImgs.map((item, index) => {

            return(
              <ImageItem
                img = {item.img}
                name = {item.name}
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
