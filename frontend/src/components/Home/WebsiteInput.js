import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import { Input, Button} from '@chakra-ui/react'
import './Compiler.css'

export const WebsiteInput = () => {
  const triggerSubmit = (e) => {
    console.log(site)
  }

  const [site, setSite] = useState("")

  return(
    <div>
      <div>
        Hello, world
        <Input
          onChange = {(e) => setSite(e.target.value)}
          placeholder='Input website' />
          <Button
          onClick={triggerSubmit}
          htmlType="submit"
          type = "primary"
          > Create Collection </Button>
      </div>
    </div>
  )
}
