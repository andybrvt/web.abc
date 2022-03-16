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
          }
          .nftContainers{

            flex:1;
            flex-basis: 30%;
            background-color: red;
            margin: 2px;
          }
          .nftContainers img{
            position: relative;
            left: 50%;
            transform: translateX(-50%);

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
