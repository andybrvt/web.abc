import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './fonts.css';
import { DAppProvider } from "@usedapp/core";
import { ChakraProvider } from '@chakra-ui/react'
import './global.js'
import "grapesjs/dist/css/grapes.min.css"
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <React.StrictMode>
    {/*
    <MoralisProvider appId="bcsHHHzi4vzIsFgYSpagHGAE0TVfHY4ivSVJoZfg" serverUrl="https://9gobbcdpfilv.usemoralis.com:2053/server">


    </MoralisProvider>
    */}
    <DAppProvider config={{
      }}>
    <ChakraProvider>
      <App />
      </ChakraProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
