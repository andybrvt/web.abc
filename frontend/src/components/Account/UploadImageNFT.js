import React, { useState } from 'react';
import { Button, ButtonGroup, Divider, Flex, Text } from '@chakra-ui/react';
import {useContractFunction, useEthers, useTokenBalance, useNotifications} from "@usedapp/core";
import BasicNFT from '../../chain-info/contracts/BasicNFT';
import networkMapping from '../../chain-info/deployments/map.json';
import {constants, utils } from 'ethers'
import {Contract} from '@ethersproject/contracts'


export const UploadImageNFT = () => {
  // Now we need to get contract of the collection (ie basicNFT)
  // we are gonna need address and abi(to create the interface)
  const { account, chainId } = useEthers()
  const { abi } = BasicNFT
  const basicNFTAddress = chainId ? networkMapping[String(chainId)]["BasicNFT"][0] : constants.AddressZero
  const basicNFTInterface = new utils.Interface(abi)
  const basicNFTContract = new Contract(basicNFTAddress, basicNFTInterface)

  const {send: createCollectible, state: createCollectibleState} = useContractFunction(
    basicNFTContract,
    "createCollectible",
    {transactionName: "Create Collectible"}
  )



  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);

  }

  const submitUpload = (e) => {
    // get contract now
    // abi,
    // address
    console.log(account)

  }

  return (
    <div>

      <input
        onChange = {handleUpload}
        type="file" name="file" />

      <Button
      onClick={submitUpload}
      htmlType="submit"
      type = "primary"
      // disabled = {this.handleSubmitButton()}
      // disabled = {pristine || invalid}
      > Submit </Button>

      {/*
        <div class="col">
            <div>
              {
                (this.state.selectedFile) ?
                <img width="300" height="300" src={this.state.submitFile}>
                </img>

                :
                ''
            }
            </div>
        </div>

        */}


    </div>
  )
}
