import React, { useState, useEffect } from 'react';
import { Stack, HStack, VStack, Box, Button, ButtonGroup } from '@chakra-ui/react'
import {RedirectActions} from './RedirectActions';

export const BlockActions = (props) => {

  const [editor, setEditor] = useState(null)
  useEffect(() => {

    if(props.editor !== null){
      setEditor(props.editor)

    }

  },[props.editor])
  const linkConnectWalletAction = () => {

    const currentComp = editor.getSelected()

    currentComp.addClass("myclass")

  }

  return(
    <Stack>
      Link an action to a text or box when you click on it.
      <div>
        <RedirectActions
          editor = {editor}
          />
      </div>

      <Button
        onClick= {() => linkConnectWalletAction()}
        colorScheme='teal' variant='solid'>
        Connect to Wallet
      </Button>
      <div>
        Create nft collection but now sure rn
      </div>
      <div>
        Button that mints nft
      </div>
      <div>
        Button that sends and receives money
      </div>
    </Stack>
  )
}
