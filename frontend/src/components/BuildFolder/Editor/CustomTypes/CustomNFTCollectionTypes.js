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
        components: model => {

          return(
            <div>This will be my market place</div>
          )
        }
      },
      init(){

      }
    }


  })
}
