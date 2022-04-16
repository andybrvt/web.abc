import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'antd/dist/antd.css';
import './fonts.css';
import {
  DAppProvider,
  ChainId,
  Mainnet,
  Rinkeby,
  Config
 } from "@usedapp/core";
import { ChakraProvider } from '@chakra-ui/react'
import './global.js'
import "grapesjs/dist/css/grapes.min.css"
import { MoralisProvider } from "react-moralis";
import { getDefaultProvider } from 'ethers'


const config: Config={
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
}


ReactDOM.render(
  <React.StrictMode>

    <MoralisProvider appId="bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg" serverUrl="https://9gobbcdpfilv.usemoralis.com:2053/server">

    <DAppProvider config={config}>
    <ChakraProvider>
      <App />
      </ChakraProvider>
    </DAppProvider>

  </MoralisProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
