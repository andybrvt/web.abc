import React, {useState, useEffect} from 'react';
import { useMoralis } from "react-moralis";
import axios from 'axios';
import parse from "html-react-parser";
import './IFrameMoralisTest.css';
import injectSheet from 'react-jss';


export const IFrameMoralisTest = (props) => {

  const [html, setHtml] = useState("")
  const [css, setCss]= useState("")

  useEffect(() => {


    axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/77/U1QQq8VMZjQ9vngj`)
    .then(res => {

      setHtml(res.data.html)
      setCss(res.data.css)
      console.log(res.data.css)
      eval(res.data.js)

    })


  },[])


  return(
      <div >
        {parse(html)}
        <style>
          {css}
        </style>
      </div>

  )
}
