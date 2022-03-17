import React from 'react';

class ImageItem extends React.Component{

  render(){

    const {img, name, value, isSelected} = this.props
    const item = {
      img: img,
      name: name,
      value: value
    }
    return(
      <div
        class = "imageItemContainer"
        onClick = {() => this.props.onImageClick(item)}>

        <div class = "imageItem">
          <img width ={100} height = {100} src = {img} />
        </div>

      </div>
    )
  }
}


export default ImageItem;
