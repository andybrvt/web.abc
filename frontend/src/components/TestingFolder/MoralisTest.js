import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";


export const MoralisTest = () => {

  const { web3 } = useMoralis()
  const Web3Api = useMoralisWeb3Api()

  const fetchNFTs = async () => {

    // get polygon NFTs for address
    const options = {
      chain: "rinkeby",
      address: "0xfDDec20451Aa93B367E0179f5f86695eb7BD137f",
    };
    const polygonNFTs = await Web3Api.account.getNFTs(options);

    console.log(polygonNFTs);

  };


  return(
    <div>
      <button
        onClick = {fetchNFTs}
        >click this for a test</button>
    </div>
  )
}
