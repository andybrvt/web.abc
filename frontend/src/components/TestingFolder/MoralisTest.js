import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api, useMoralisCloudFunction } from "react-moralis";
import $ from 'jquery';


export const MoralisTest = () => {

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()
  const [nft, setNft] = useState([])
  const [transactionList, setTransactions] = useState([])

  const [curUrl, setCurUrl] = useState("");

  const {fetch} = useMoralisCloudFunction(
    "fetchJSON",
    {theUrl: curUrl},
    { autoFetch: false }

  )

  useEffect(() => {

    fetch({
      onSuccess: (data) => {

        console.log(data)
        if(data.status === 302){
          const newUrl = data.headers.location
          setCurUrl(newUrl)
        } else {
          $("#content").html($("#content").html()+"<h2>This is the fetch one</h2>" )
          $("#content").html($("#content").html()+"<h3>"+data.data.name+"</h3>" )
          $("#content").html($("#content").html()+"<img width=100 height=100 src='"+fixURL(data.data.image)+"'/>" )
        }


      }, // ratings should be 4.5
      onError: (err) => console.log(curUrl, 'here is the errors')

    })
  }, [curUrl])



  const getTransactions = async() => {

    const options = {
      chain: "eth",
      address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
      order: "desc",
      from_block: "0",
    };
    const transactions = await Web3Api.account.getTransactions(options);

    console.log(transactions)

    const transList = transactions.result

    setTransactions(transList.slice(0, 10))
  }

  const fetchNFTsCloud = async() => {
    const options = {
      chain: "eth",
      // address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
      address: "0x3865C0B68111d1507269aa2df16b3251F714Dcdf",
      // address: "0x53a19F44548182602b3B665AB9B9717735Ed53be",

    };


    const nftList = await Web3Api.account.getNFTs(options);

    setNft(nftList.result)

  nftList.result.forEach( async(nft) => {
      // let url = fixURL(nft.token_uri)

      // console.log(nft.token_uri, nft)
      // setCurUrl(nft.token_uri)
      // console.log()

      const metadata = JSON.parse(nft.metadata)

      if(metadata !== null){
        if(metadata.name === undefined){
          console.log(metadata)
        }
        $("#content").html($("#content").html()+"<h2>"+metadata.name+"</h2>" )
        $("#content").html($("#content").html()+"<h3>"+metadata.name+"</h3>" )
        $("#content").html($("#content").html()+"<img width=100 height=100 src='"+fixURL(metadata.image)+"'/>" )

      } else if(nft.token_uri !== null){
        let url = fixURL(nft.token_uri)

        setCurUrl(url)


      }



    })





  }

  const fetchNFTs = async () => {

    // get polygon NFTs for address

    const options = {
      chain: "eth",
      address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
    };
    const nftList = await Web3Api.account.getNFTs(options);

    console.log(nftList, 'here is the list here')

    nftList.result.forEach(function(nft){
      let url = fixURL(nft.token_uri)

      fetch(url)
      .then(response => response.json())
      .then(data => {
        // $("#content").html($("#content").html()+"<h2>"+data.name+"</h2>" )
        // $("#content").html($("#content").html()+"<h3>"+data.name+"</h3>" )
        // $("#content").html($("#content").html()+"<img width=100 height=100 src='"+fixURL(data.image)+"'/>" )
      })




    })


  };

  const fixURL = (url) => {

    if(url !== null && url !== undefined){
      if(url.startsWith("ipfs")){
        return "https://ipfs.moralis.io:2053/ipfs/"+url.split("ipfs://").slice(-1)[0]
      }
      else {
        return url
      }

    }


  }


  return(
    <div>
      <button
        onClick = {fetchNFTsCloud}
        >click this for a test</button>
      <div id = 'content'></div>
      {
        transactionList.map((item, index) =>{
          console.log(item)
          return(
            <div key = {index}>
              hash: {item.hash}

            </div>
          )
        })
      }
    </div>
  )
}
