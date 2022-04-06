import React, { useState, useEffect } from 'react';

const script = function(props){

}

export const CustomMintNFTButton = editor => {

  editor.DomComponents.addType("MintNFTButton", {

    isComponent: el => {
      return el.id === "MintNFTButton"
    },

    model: {
      name: "MintNFTButton",
      tagName: "MintNFTButton",
      resizable: 'true',
      defaults:{
        components: model => {

          return(
            <button type="button" class="btn btn-primary">Mint</button>
          )
        },

        init(){

        }


      }
    }

  })

}


export const CustomNFTMarketPlace = editor => {

  editor.DomComponents.addType("NFTMarketPlace", {

    isComponent: el => {
      return el.id === "NFTMarketPlace"
    },

    model: {
      name: 'NFTMarketPlace',
      tagName: "NFTMarketPlace",
      resiable: "true",
      defaults: {
        attributes: { class: "nft-marketplace-contianer"},

        styles: `
          .nft-marketplace-contianer{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            padding: 50px 15%;
            font-family: Monospace;
          }
          .nftContainers{

            flex:1;
            flex-basis: 30%;
            margin: 2px;
            padding: 25px 0px;
          }
          .nftCards {
            width: 150px;
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
            font-size: 14px;
            text-align: center;
          }
          .buyButtonContainer{

            text-align:center;
          }

        `

      },
      init(){

      }
    }


  })
}


export const CustomNFTRoadMap = editor => {
  editor.DomComponents.addType("NFTRoadMap", {

    isComponent: el=> {
      return el.id === "NFTRoadMap"
    },
    model: {
      name: 'NFTRoadMap',
      tagName: 'NFTRoadMap',
      resiable: "true",
      defaults:{
        components: model => {
          return(
            <div>Hi</div>
          )
        }
      }
    }


  })
}
