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
    <div
      style = {{
        zIndex: 9998,
        position: 'absolute',
        backgroundColor: 'transparent',
        width: '100%',
        height: '95vh'

      }}
      >
      <canvas style ={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',

        }} ref={canvasRef} {...props} id="canvas" resize="true"/>
    </div>
  )

}
