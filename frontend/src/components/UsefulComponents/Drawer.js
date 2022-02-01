import React, { useState, useEffect } from 'react';
import './Drawer.css';

export const Drawer = (props) => {

  const [hide, setHide] = useState("hide")

  useEffect(() => {

    if(props.visibility){
      setHide("show")
    } else {
      setHide("hide")
    }
  },[props.visibility])


  return(
    <div
      id = "slidingDrawer"
      className = {hide}>

      {props.children}
    </div>
  )
}
