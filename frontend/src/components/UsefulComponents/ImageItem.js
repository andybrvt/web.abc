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
      <div onClick = {() => this.props.onImageClick(item)}>
      
        <img width ={100} height = {100} src = {img} />
      </div>
    )
  }
}


export default ImageItem;
