import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import $ from 'jquery';


export const MoralisTest = () => {

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [nft, setNft] = useState([])

  const fetchNFTs = async () => {

    // get polygon NFTs for address
    const options = {
      chain: "eth",
      address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
    };
    const nftList = await Web3Api.account.getNFTs(options);

    console.log(nftList);
    setNft(nftList.result)

    nftList.result.forEach(function(nft){
      let url = fixURL(nft.token_uri)


      fetch(url)
      .then(response => response.json())
      .then(data => {
        $("#content").html($("#content").html()+"<h2>"+data.name+"</h2>" )
        $("#content").html($("#content").html()+"<h3>"+data.name+"</h3>" )
        $("#content").html($("#content").html()+"<img width=100 height=100 src='"+fixURL(data.image)+"'/>" )
      })




    })


  };

  const fixURL = (url) => {

    if(url !== null && url !== undefined){
      if(url.startsWith("ipfs")){
        console.log(url.split("ipfs://").slice(-1)[0])
        return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://").slice(-1)[0]
      }
      else {
        return url+"?format=json"
      }

    }


  }


  return(
    <div>
      <button
        onClick = {fetchNFTs}
        >click this for a test</button>
      <div id = "content">

      </div>
    </div>
  )
}
