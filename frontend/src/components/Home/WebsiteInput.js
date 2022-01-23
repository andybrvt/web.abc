import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import { Input, Button} from '@chakra-ui/react'
import './Compiler.css';
import  { CompilerTest } from './CompilerTest.js';
import axios from 'axios';

export const WebsiteInput = (props) => {

  const [site, setSite] = useState("")
  const [html, setHtml] = useState("")



  const triggerSubmit = (e) => {
    console.log(site)
    let formData = new FormData()
    formData.append('url',site)

    axios.post(`${global.API_ENDPOINT}/web3Back/grabUrlInfo`, formData)
    .then(res => {

      console.log(res.data)
      // setHtml(res.data)
      props.history.push(`/compilerTest`,{
        htmlInfo: res.data[0],
        cssInfo: res.data[1]
      })
    })
  }




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
        {html}
        {/*
        <CompilerTest html={html}/>
        */}
      </div>
    </div>
  )
}
