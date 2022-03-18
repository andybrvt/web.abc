// Function will be used as add nfts in
import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

// this.innerHTML ="some content"

const script = function(props) {

};


export const CustomNFTShowcase = editor => {



  editor.DomComponents.addType("NFTShowcase", {

    isComponent: el => {
        return el.id === "NFTShowcase"
      },

    model: {
      name: 'NFTShowcase',
      tagName: "NFTShowcase",
      resizable: 'true',
      defaults:{
        attributes: { class: 'nft-collection-container' },
        someprop: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

        styles: `
          .nft-collection-container{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            background-image: linear-gradient(to right, #8360c3, #2ebf91);
          }
          .nftContainers{

            flex:1;
            flex-basis: 30%;
            margin: 2px;
            padding: 25px 0px;
          }
          .nftCards {
            width: 300px;
            height: 300px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 20px;
            overflow: hidden;
            padding: 5px;
            background: white;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

          }
          .nftCards img{
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 20px;
          }
          .nftName{
            position: relative;
            height: 100px;

          }
          .nftNameText{
            position: relative;
            left: 50%;
            top: 50%;
            width: 80%;
            transform: translateX(-50%) translateY(-50%);
            color: white;
            font-size: 30px;
            text-align: center;
          }

        `,



        'script-props': ["someprop",],

      },

      init() {

        console.log('everytime this updates')
         // this.on('change:someprop', this.handlePropChange);
         // // Listen to any attribute change
         this.on('change:attributes', this.doStuff);
         // // Listen to title attribute change
         // this.on('change:attributes:title', this.handleTitleChange);


       },

       handlePropChange() {
         const { someprop } = this.props();
         console.log('New value of someprop: ', someprop);
       },

       handleAttrChange() {
         console.log('Attributes updated: ', this.getAttributes());
         // this.components("<div>Hi there</div>")
       },

       handleTitleChange() {
         console.log('Attribute title updated: ', this.getAttributes().title);
       },
       updated(property, value, prevValue){
         console.log('update here')
       },

       doStuff(){

         const options = {
           chain: "eth",
           address: "0x5b92a53e91495052b7849ea585bec7e99c75293b",
         };
         // const nftList = await useMoralisWeb3Api().account.getNFTs(options);

         // console.log(nftList)

       }



    },


    view: {

      events: {
        dblclick: 'onActive'
      },

    }

  })
}


export const CustomTransactionList = editor => {


  editor.DomComponents.addType("TransactionList", {
    isComponent: el => {
      return el.id === "TransactionList"
    },

    model: {
      name: 'TransactionList',
      tagName: 'Transaction List',
      resizable: 'true',
      defaults: {
        attributes: {class: 'nft-transactions-container'},
        styles: `
          .nft-transactions-container{
            background: pink;
            width: 80%;
            height: 200px;
          }
        `,


      },
      init(){

      }
    },
    view: {
      //render when first loading in
      onRender(){
        // console.log(this.model)
        // this.model.components("")
        // this.model.append(<div>what is this</div>)
      }
    }



  })
}
