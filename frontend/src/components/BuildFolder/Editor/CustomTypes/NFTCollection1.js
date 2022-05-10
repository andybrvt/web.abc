// Function will be used as add nfts in
import React, { useState, useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

// this.innerHTML ="some content"

const script = function(props) {

};


export const renderNFTTemplate1 = editor => {
  editor.DomComponents.addType("renderNFTTemplate1", {

    isComponent: el => {
        return el.id === "renderNFTTemplate1"
      },

    model: {
      name: 'renderNFTTemplate1',
      tagName: "renderNFTTemplate1",
      resizable: 'true',
      defaults:{
        attributes: { class: 'nft-collection-container' },
        someprop: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

        styles: `

        .address-profile-container-type{
          height: 40vh;
          position: relative;
          font-family: Lato;
        }
        .profile-inner-wrapper{
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        .gradientBackground1{
          // background-image: linear-gradient(90deg, #4B0082 1%, #ba55d3 99%)
        }
        .mHeaderText{
          position: absolute;
          font-size: 70px;
          width: 30%;
          left: 12%;
          top: 20%;
          font-family: Lato;}
        .mBodyText{
          position: absolute;
          width: 25%;
          left: 12%;
          top: 45%;
          font-family: Lato;
          font-size:20px;
        }
        .mButton1{
            background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
            left: 12%;
            top: 70%;}
        .mButton2{
            background: black;
            left: 25%;
            top: 70%;}
        .mImage{
          border-radius: 25px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
          position: absolute;
          right: 5%;
          top: 15%;
          width: 50%;}

        .teamTitle{
          font-size:35px;
          font-family: Lato;
          font-weight:800;
          margin-bottom:45px;
          margin-top:45px;

        }
        

        .teamSection {    
          position: relative;
          left: 12%;
          width: 90%;
          height:100%;
        }
        .teamContainer {
          display:flex;
          flex-direction:row;
        }
        .teamFirstPerson {
       
         display:flex;
         flex-direction:column;
        }
        .teamSecondPerson{
  
          display:flex;
         flex-direction:column;
        }

        .mainTitle{
          font-size:50px;
          font-family: Lato;
          font-weight:800;

        }

        .tripleComparisonHeader{
          font-size:35px;
          font-family: Lato;
          font-weight:800;

        }

        .tripleComparisonSubHeader{
          font-size:28px;
          margin-top:10px;
          margin-bottom:10px;
          font-family: Lato;
        }

        .headerClone{
          position: relative;
          height:15vh;
          width: 100%;
        }


        .tripleComparisonContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .tripleComparisonSection {    
          position: relative;
          left: 12%;
          width: 85%;
          height:50%;
        }
        
        .nftCollectionTitleSection {    
          position: relative;
          left: 12%;
          width: 85%;
          height:100%;
          background:red;
        }

        .nftCollectionTitlePosition {    
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

        }


        .NFTSpecPosition {    
          position: relative;
          width: 100%;
        }

        .NFTSpecRow {    
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          
        }

        .spaceGap{
          position:relative;
          height:100px;
        }

        .NFTSpecContainer {    
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom:20px;
          width:50%;
        }

        .NFTSpecTitle{
          font-size:35px;
          margin-top:10px;
          margin-bottom:10px;
          font-weight:800;
          font-family: Lato;
        }

        .MFTSpecContent{
          width:80%;
          font-size:20px;
          margin-top:10px;
          margin-bottom:10px;
  
          font-family: Lato;
        }

        .testFirstPersonImage{
          border-radius: 12px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
          width:350px;
          height:350px;
          
        }

        .card {
          /* Add shadows to create the "card" effect */
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
          transition: 0.3s;
          border-radius: 12px;
          margin-right: 20px;
        }

        .infoSection{
          flex:1;
          
          
        }

        .itemcenter {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .infoSectionTitle{
          font-size:28px;
          margin-top:10px;
          margin-bottom:10px;
          font-weight:800;
          font-family: Lato;
        }

        .infoSectionDesc{
          width:80%;
          font-size:20px;
          margin-top:10px;
          margin-bottom:10px;
  
          font-family: Lato;
        }


        .teamPersonName{
          font-size:27.5px;
          font-weight:bold;
          font-family: Lato;
        }
        
        .teamPersonRole{
          font-size:20px;
          font-family: Lato;
        }
        
        /* On mouse-over, add a deeper shadow */
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        d
        /* Add some padding inside the card container */
        .container {
          padding: 25px;
        }

        .monkeyImage{
          border-radius: 20px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
          position: relative;
          right: 50%;
          top: 10%;
          width:200px;
          height:200px;
        }
        
        .space1Image{

          width:500px;
          height:500px;
        }
        .space2Image{
          width:350px;
          height:350px;
          margin-right:25px;
        }
        .space3Image{
          width:350px;
          height:350px;
        }

    
        .template1ImageContainer{
          position: relative; 
        }

        .template1ImageInner{
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          
        }



          .menuM{
            display: flex;
            flex-direction: row;
            margin-left: auto;
            margin-right: 5%;
          }

          .headerItem{
            text-align:center;
            justify-content: center;
            padding: 25px;
            font-size: 20px;
          }

          .header{
            position: relative;
            top: 0;
            height:10%;
            width: 100%;
          }

        `,

        components: model => {
          return  (
            <div>hello</div>
            )
        },

          





        'script-props': ["someprop",],

      },

      
    },


    view: {
      events: {
        dblclick: 'onActive'
      },
    }

  })
}

