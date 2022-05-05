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


    axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/72/8CxlN7PXMcg7VC63`)
    .then(res => {

      setHtml(res.data.html)
      setCss(res.data.css)
      console.log(res.data.css)
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
