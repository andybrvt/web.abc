import React, {useState, useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';
import { useEthers, useEtherBalance } from "@usedapp/core";
import axios from 'axios';


export const PreviewPage = props => {


  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined

  const [html, setHtml] = useState("")

  useEffect(() => {

      const test = document.getElementsByClassName("myclass")
      if(test !== null){
        for(let i =0; i<test.length; i++){

          test[i].addEventListener("click", function(){
            activateBrowserWallet()
          })
        }
      }
      const websiteId = props.history.location.state.websiteId
      const pageId = props.history.location.state.pageId
      axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/${websiteId}/${pageId}`)
      .then(res => {
        console.log(res.data)
        setHtml(res.data.html)
        eval(res.data.js)


      })


  }, [])



  // useEffect(() => {
  //
  //   console.log(props.history.location.state.websiteId)
  //   console.log(props.history.location.state.pageId)
  //
  //
  //   const test = document.getElementsByClassName("myclass")
  //   if(test !== null){
  //     for(let i =0; i<test.length; i++){
  //
  //       test[i].addEventListener("click", function(){
  //         activateBrowserWallet()
  //       })
  //     }
  //   }
  //
  //
  //   const js = props.history.location.state.js
  //  eval(js)
  //
  //
  // },[props.history.location.state.html])


  return(
    <div>
      {parse(html)}


    </div>
  )
}
