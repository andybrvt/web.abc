// Function will be used as add nfts in
import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import imageUser from '../../../../images/imageUser.png';

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
            width: 200px;
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


// this is the new nft model so that its automatic
export const CustomAutomaticNFTShowcase = editor => {
  editor.DomComponents.addType("AutomaticNFTShowcase", {

    isComponent: el => {
        return el.id === "AutomaticNFTShowcase"
      },

    model: {
      name: 'AutomaticNFTShowcase',
      tagName: "AutomaticNFTShowcase",
      resizable: 'true',
      defaults:{
        attributes: { class: 'nft-collection-container-background' },
        someprop: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

        styles: `

          .nft-collection-container-background{
            padding: 50px 15%;
            font-family: Monospace;

          }

          .delete-nft-collectionContainer{

          }
          .nft-collection-title {
            text-align: center;
            font-size: 25px;
          }
          .nft-collection-container{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            font-family: Monospace;

          }
          .nftContainers{

            flex:1;
            flex-basis: 30%;
            margin: 2px;
            padding: 25px 0px;
          }
          .nftCards {
            width: 200px;
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

        `,
        'script-props': ["someprop",],

        components: model => {
          return(
            <div>
              <div class = "nft-collection-title">
                My NFT Collection
              </div>
              <div class = "nft-collection-container ">

                <div class = "nftContainers delete-nft-collectionContainer">

                  <div class = "nftCards">
                    <div data-gjs-selectable="false" data-gjs-hoverable="false" class="d-flex justify-content-center">
                      <div data-gjs-selectable="false" data-gjs-hoverable="false" class="spinner-border" role="status">
                        <span data-gjs-selectable="false" data-gjs-hoverable="false" class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  </div>

                  <div class = "nftName">

                    <div class = "nftNameText">Name</div>

                  </div>


                </div>
              </div>
            </div>
          )
        }

      },

      init() {

      },

    },


    view: {
      onRender(){

      }
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
        attributes: {class: 'nft-transactions-background-container'},
        styles: `
          .nft-transactions-background-container{
            padding: 50px 0;
            color:black;
            font-family: Monospace;
          }
          .transactionText{
            font-size: 35px;
            text-align: center;
          }
          .nft-trans-whole-cont{
            position: relative;
            width: 50%;
            left: 50%;
            transform: translateX(-50%);
          }
          .nft-transactions-container{

            border-radius: 25px;
            background: white;
            height: 200px;
            overflow:auto;
            height: 300px;
            padding: 20px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            -ms-overflow-style: none;
            scrollbar-width: none;
            color: black;
          }

          .nft-transactions-container::-webkit-scrollbar {
            display: none;
          }

          .transactionItem{
            padding: 10px 10px;
            border-bottom: 1px lightgray solid;
            display: flex;
            flex-direction: row;
          }
          .buttonOpa{
            color: black;
            background: lightgray;
          }
          .toFromContainer{

          }
          .dateContainer{
            right: 0;
          }

          .txBox{
            position: relative;
            width: 7%;
          }
          .hashBlock{
            position: relative;
            width: 23%;
          }
          .hashBlock a{
            color: blue;
          }
          .toFromBlock{
            position: relative;
            width: 40%;
          }
          .toFromBlock a{
            color: blue;
          }
          .dateBlock{
            position: relative;
            width: 30%;
          }
        `,

        components: model => {
          return (
          <div class = "nft-trans-whole-cont">
            <div class = "transactionText">
              My Latest Transactions
            </div>
            <div class = "nft-transactions-container">
              <div>
                Latest Transactions
              </div>


              <div class = "transactionItem">
                   <div class = "txBox">
                     <div>TX</div>
                   </div>

                   <div class = "hashBlock">
                     <div>
                       Contract Address
                     </div>
                   </div>

                   <div class ="toFromBlock">
                     <div class="toFromContainer">
                       <div>
                         From
                       </div>
                       <div>
                         To
                       </div>
                     </div>
                   </div>

                   <div class ="dateBlock">
                     Date
                   </div>


                 </div>

                 <div data-gjs-selectable="false" data-gjs-hoverable="false" class="d-flex justify-content-center">
                   <div data-gjs-selectable="false" data-gjs-hoverable="false" class="spinner-border" role="status">
                     <span data-gjs-selectable="false" data-gjs-hoverable="false" class="visually-hidden">Loading...</span>
                   </div>
                 </div>

            </div>


          </div>

        )
      },
      'script-props': ['id'],


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

export const CustomStatsList = editor => {

  editor.DomComponents.addType("StatsList", {

    isComponent: el => {
      return el.id === "StatsList"
    },
    model: {
      name: "StatsList",
      tagName: 'Stats List',
      resiable: 'true',
      defaults: {
        attributes: {
          class: "stats-list-container"
        },
        styles: `
          .stats-list-container{
            color: black;
            padding: 25px 20%;
            font-family: Monospace;
          }
          .stats-holder{
            display: flex;
            flex-direction: row;
          }
          .single-stat-holder{
            flex: 1;
            flex-basis: 30%;
            margin: 2px;
            padding: 25px;
            text-align: center;
            font-size: 20px;
          }
          .numTransactions{
            font-size: 55px;
          }
          .numTransfers{
            font-size: 55px;
          }
          .numNFTTransfers{
            font-size: 55px;
          }
        `,
        components: model => {

          return(
            <div class = "stats-holder">
              <div class = "single-stat-holder">
                <div class = "numTransactions">0</div>
                Total Transactions
              </div>

              <div class = "single-stat-holder">
                <div class = "numTransfers">0</div>
                Total Token Transfers
              </div>

              <div class = "single-stat-holder">
                <div class = "numNFTTransfers">0</div>
                Total NFT transfers
              </div>

            </div>

          )

        },
        'script-props': ['id'],


      }
    },






  })
}

export const CustomAddressProfile = editor => {

  editor.DomComponents.addType("AddressProfile", {

    isComponent: el => {
      return el.id === "AddressProfile"
    },

    model: {
      name: "AddressProfile",
      tagName: 'AddressProfile',
      resizable: 'true',
      defaults:{
        attributes: {
          class: "address-profile-container"
        },
        styles: `
          .address-profile-container{
            height: 40vh;
            position: relative;
            font-family: Monospace;
          }
          .profile-inner-wrapper{
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          .centerInfo{
            text-align: center;
          }
          .userCircleWrapper{
            width: 135px;
            height: 135px;
            border-radius: 80px;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
          }
          .userCircle{
            width: 120px;
            height: 120px;
            border-radius: 75px;
            position: absolute;
            overflow:hidden;
            background: gray;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
          }
          .circleProfilePic{
            position: relative;
            width: 100%;
            height: 100%;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
          }
        `,
        components: model => {
          return(
            <div class = "profile-inner-wrapper">
              <div class = "userCircleWrapper">
                <div class = "userCircle">
                  <img data-gjs-type ="image" class = "circleProfilePic" src = {imageUser}/>
                </div>
              </div>
              <div class = "centerInfo">
                <h1 data-gjs-type ="text">
                  Here will be your name
                </h1>
              </div>


                <div data-gjs-type ="CopyToClipboard" >
                  0x0000000000000000
                </div>

            </div>
          )
        }

      },

    }


  })

}
