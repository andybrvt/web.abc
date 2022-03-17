import React from 'react';

class ImageItem extends React.Component{

  render(){

    const {img, name} = this.props
    return(
      <div>
        <img width ={100} height = {100} src = {img} />
      </div>
    )
  }
}


export default ImageItem;
