import React, { useState, useEffect } from 'react';
import './Drawer.css';

export const Drawer = (props) => {

  return(
    <div
      id = "slidingDrawer"
      className = "drawer">
      HI
      {props.children}
    </div>
  )
}
