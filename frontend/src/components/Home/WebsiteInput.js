import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import { Input, Button} from '@chakra-ui/react'
import './Compiler.css'
import axios from 'axios';

export const WebsiteInput = () => {
  const triggerSubmit = (e) => {
    console.log(site)
    let formData = new FormData()
    formData.append('url',site)
    axios.post(`${global.API_ENDPOINT}/web3Back/grabUrlInfo`, formData)
    .then(res => {

    })
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
