import React, { useState, useEffect } from 'react';
import {
  Input,
  Button
  } from '@chakra-ui/react';

export const CreateContractCollection = (props) => {

  return(
    <div>
      <div>Name of your Collection</div>
      <Input value = {props.contractName} onChange = {props.onInputChange} placeholder = "Name"/>

      <div>What Symbol you want (ie: "SYM")</div>
      <Input value = {props.contractSymbol} onChange = {props.onInputChange} placeholder = "Symbol"/>

      <div>Max number of NFT you want each person to be able to mint</div>
      <Input value = {props.maxMint} onChange = {props.onInputChange} placeholder = "Max mint limit"/>

      <div>Max number of NFTs in contract (this should match number of NFT generated)</div>
      <Input value = {props.maxSupply} onChange = {props.onInputChange} placeholder = "Total Supply"/>

      <div>How much would each NFT cost to mint? (You can change this later)</div>
      <Input value = {props.mintRate} onChange = {props.onInputChange} placeholder = "Cost in ether"/>

      {/*
        <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721</Button>
        <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721A</Button>

        */}


    </div>
  )
}
