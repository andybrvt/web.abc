import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import parse from "html-react-parser";
import { useEthers, useEtherBalance } from "@usedapp/core";


export const OfficialPage = props => {
  const {account, activateBrowserWallet, deactivate} = useEthers()


  const [srcDoc, setSrcDoc] = useState("")
  const {websiteId, pageId} = useParams()

  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")


  useEffect(() => {

    axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/${websiteId}/${pageId}`)
    .then(res => {
      console.log(res.data, 'what is this here')
      setHtml(res.data.html)
      setCss(res.data.css)

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
    <div>
      {parse(html)}

      <style>
        {css}
      </style>


    </div>
  )
}
