import React, {useState, useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
import BasicERC721a from '../../../chain-info/contracts/BasicERC721a';
import {constants, utils } from 'ethers';
import { Contract } from '@ethersproject/contracts'
import { useEthers, useEtherBalance, useCall, useCalls, useContractCall, useContractFunction} from "@usedapp/core";


export const OfficialPage = props => {
  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [srcDoc, setSrcDoc] = useState("")
  const {websiteId, pageId} = useParams()
  const [prevMintContract, setPrevMintContract] = useState("")
  const [mintContract, setMintContract] = useState("")

  // "0xD6A145812CAc76A174370a75535bcd83674E80db"

  const basicERC721a_abi = BasicERC721a['abi']
  const basicERC721aAddress = mintContract !== "" ?  mintContract : constants.AddressZero
  // const basicERC721aAddress = "0xD6A145812CAc76A174370a75535bcd83674E80db"
  const basicERC721aInterface = new utils.Interface(basicERC721a_abi)
  const basicERC721aContract = new Contract(basicERC721aAddress, basicERC721aInterface)


  const {send: mint, state: mintState} = useContractFunction(
    basicERC721aContract,
    "mint",
    {transactionName: 'mint'}
  )

  useEffect(() => {

    axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/${websiteId}/${pageId}`)
    .then(res => {
      console.log(res.data, 'what is this here')
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

    if(isConnected){
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
              connectToWalletBtns[i].addEventListener("click", function(){
              activateBrowserWallet()

            })
          }
        }

    }



    if(html === ""){
      axios.get(`${global.API_ENDPOINT}/nftSetup/GetContractForWebsite/${websiteId}`)
      .then(res => {
        if(res.data[0] !== undefined){
          const contract = res.data[0].contract
          setMintContract(contract)

        }

      })



    }



  }, [html])


  useEffect(() => {

    if(mintContract !== ""){
      // setPrevMintContract(mintContract)
      const mintBtns = document.getElementsByClassName("mint-btn")

      if(mintBtns !== null){
        if(mintBtns.length > 0){
            for(let i =0; i<mintBtns.length; i++){

              mintBtns[i].onclick = testMint
            }
          }
      }

    }


  }, [mint])


  return(
    <div style = {{
        height: '100vh',
        width: '100vw'
      }}>


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
