import React, {useRef, useEffect} from 'react';
import Paper from 'paper';
import DrawTest from './DrawTest';
import {DrawLineFunctions} from './DrawLineFunctions'

export const Canvas = props => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);
    DrawLineFunctions()
    // DrawTest();


  }, [])

  return (
    <div style = {{
        backgroundColor: 'red'
      }}>
      <canvas style ={{
          backgroundColor: 'pink',
          width: '100vw',
          height: '100vh'
        }} ref={canvasRef} {...props} id="canvas" resize="true"/>
    </div>
  )

}
