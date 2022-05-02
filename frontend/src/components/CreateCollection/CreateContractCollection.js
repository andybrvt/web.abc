import React, { useState, useEffect } from 'react';
import {
  Input,
  Button
  } from '@chakra-ui/react';

export const CreateContractCollection = (props) => {

  return(
    <div>
      <Input value = {props.contractName} onChange = {props.onInputChange} placeholder = "Name"/>
      <Input value = {props.contractSymbol} onChange = {props.onInputChange} placeholder = "Symbol"/>
      <Input value = {props.maxMint} onChange = {props.onInputChange} placeholder = "Max mint limit"/>
      <Input value = {props.maxSupply} onChange = {props.onInputChange} placeholder = "Total Supply"/>
      <Input value = {props.mintRate} onChange = {props.onInputChange} placeholder = "Cost in ether"/>

      {/*
        <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721</Button>
        <Button onClick = {() => createBasicERC721Press()}>Create Contract ERC721A</Button>

        */}


    </div>
  )
}
