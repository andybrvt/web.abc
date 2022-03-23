import React, { useState, useEffect } from 'react';
import { Stack, HStack, VStack, Box } from '@chakra-ui/react';

const gradientList = [
  'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
  'linear-gradient(to right, #DECBA4, #3E5151)',
  'linear-gradient(to right, #8360c3, #2ebf91)',
  'linear-gradient(to right, #8e2de2, #4a00e0)',
  'linear-gradient(to right, #fffbd5, #b20a2c)',

]

export const WrapperGradientSelector = (props) => {

  const [editorMain, setEditor] = useState(null);


  useEffect(() => {
    if(props.editor !== null){

      setEditor(props.editor)

    }


  }, [props.editor])

  const setWrapperBackground = (gradient) => {
    console.log(editorMain.Canvas.getBody())
    console.log(editorMain.getWrapper().getEl())
    editorMain.getWrapper().setStyle({
      background: gradient+';'
    })
  }

  return(
    <VStack spacing='24px'>
      <div>Set background</div>
      {
        gradientList.map((gradient, index)=> {


          return(
            <div style = {{
                background: gradient,
              }}
              onClick = {() => setWrapperBackground(gradient)}
              class="wrapperBoxItem"></div>

          )
        })
      }

    </VStack>

  )
}
