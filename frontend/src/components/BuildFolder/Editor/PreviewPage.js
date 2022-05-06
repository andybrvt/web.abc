import React, {useState, useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';
import { useEthers, useEtherBalance } from "@usedapp/core";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons'


export const PreviewPage = props => {


  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined

  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

  const {websiteId, pageId} = useParams()

  useEffect(() => {

      axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/${websiteId}/${pageId}`)
      .then(res => {
        console.log(res.data, 'what is this here')
        // setHtml(res.data.html)

        setHtml(res.data.html)
        setCss(res.data.css)
        eval(res.data.js)

    

      })


  }, [])


  useEffect(() => {

    if(account !== undefined){
      const connectToWalletBtns = document.getElementsByClassName("connect-to-wallet")
      if(connectToWalletBtns !== null){
        for(let i =0; i<connectToWalletBtns.length; i++){
            connectToWalletBtns[i].innerHTML = account
            connectToWalletBtns[i].addEventListener("click", function(){
              deactivate()
              console.log('why')
            })
          }
        }

    } else {
      const connectToWalletBtns = document.getElementsByClassName("connect-to-wallet")

      if(connectToWalletBtns !== null){

        if(connectToWalletBtns.length > 0){
            for(let i =0; i<connectToWalletBtns.length; i++){

              connectToWalletBtns[i].innerHTML = "Connect to Wallet"

                connectToWalletBtns[i].addEventListener("click", function(){
                activateBrowserWallet()

              })
            }
          }

      }

    }

  },[account])


  useEffect(() => {


    const connectToWalletBtns = document.getElementsByClassName("connect-to-wallet")

    if(connectToWalletBtns !== null){

      if(connectToWalletBtns.length > 0){
          for(let i =0; i<connectToWalletBtns.length; i++){
            console.log(connectToWalletBtns[i], 'anything here')
              connectToWalletBtns[i].addEventListener("click", function(){
              activateBrowserWallet()

            })
          }
        }

    }


  }, [html])






  return(
    <div style = {{
        height: '100vh',
        width: '100vw'
      }}>


      <div class = "previewHeaderContainer">

        <div
          onClick = {() => props.history.back()}
          class = "goBackIconContainer">
          <div class = "goBackIcon">
            <FontAwesomeIcon style={{color:'black'}} icon={faArrowLeft} />
          </div>

        </div>

        <div class = "prviewTextContainer">
          <div>
            Preview
          </div>
        </div>


      </div>

      <div style = {{
        }}>

        {parse(html)}
        <style>
          {css}
        </style>

      </div>


    </div>
  )
}
