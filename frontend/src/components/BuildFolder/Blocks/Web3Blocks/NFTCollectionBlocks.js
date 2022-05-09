import image25 from '../../../../images/image25.png';
import {
  rowStyle,
  colStyle,
  normalButton,
  rowStyleMedia,
  colStyleMedia
} from '../BasicBlocks/GeneralBlockCss';
import astro from '../BasicBlocks/NFTCollectionTemplates/astro.svg';
import coding from '../BasicBlocks/NFTCollectionTemplates/coding.svg';
import apartment from '../BasicBlocks/NFTCollectionTemplates/apartment.svg';

import twitter from '../BasicBlocks/NFTCollectionTemplates/twitter.png';
import opensea from '../BasicBlocks/NFTCollectionTemplates/opensea.png';
import discord from '../BasicBlocks/NFTCollectionTemplates/discord.png';
import space1 from '../BasicBlocks/NFTCollectionTemplates/space1.svg';
import space2 from '../BasicBlocks/NFTCollectionTemplates/space2.svg';
import space3 from '../BasicBlocks/NFTCollectionTemplates/space3.svg';
const menu = `
  .menuM{
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 5%;
  }`
const logo = `
  .logo{
    top: 100px;
    width: 100px;
    margin-left: 7%;
    font-weight: bold;
    text-align:center;
  }`
const headerStyle = `
  .header{
    position: absolute;
    top: 0;
    width: 100%;
    display:flex;
  }`
const headerItem = `
  .headerItem{
    text-align:center;
    justify-content: center;
    margin-right:35px;
    font-size: 20px;
    font-family: Lato;
  }`
const headerItemMedia = `
  .headerItem{
    text-align: center;
    justify-content:center;
    padding: 7px;
    font-size: 20px;
  }`
  const mediaButton = `
  .mButton{
    position: absolute;
    display: inline-flex;
    align-items: center;
    padding: 0 10px;
    height: 20px;
    font-size: 5px;
    border-radius: 7px;
    font-family: Monospace;
    color:white;
  }`


// FOR BACKGROUND
const background = `
.gradientBackground{
  text-align: center;
  color: white;
  height: 100%;
}`

const tempHeight = `
  .tempHeight{
    height: 90vh;
  }
`

export const NFTCollectionBlocks = [
  {
    id: 'mTemplate1',
    category: 'NFT Templatessss',
    media: `
    <style>
      ${headerStyle}
      ${rowStyleMedia}
      ${colStyleMedia}
      ${menu}
      ${logo}
      ${headerItemMedia}
      ${mediaButton}
      ${background}
     
    </style>

      <div data-gjs-dmode="absolute" class="rowStyleM">
        <div>test</div>
        </div>


    </div>
    `,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        ${background}
        ${headerStyle}
        ${menu}
        ${logo}
        ${headerItem}
        ${normalButton}
        ${tempHeight}
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
          margin-bottom:45px;
          margin-top:45px;

        }
        

        .teamSection {    
          position: relative;
          left: 12%;
          top: 300%;
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
        .tripleComparisonHeader{
          font-size:45px;
          margin-top:10px;
          margin-bottom:20px;
          font-family: Lato;
          font-weight:800;

        }

        .tripleComparisonSubHeader{
          font-size:30px;
          margin-top:10px;
          margin-bottom:10px;
          font-family: Lato;
        }

        .tripleComparisonContainer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom:20px;

        }

        .tripleComparisonSection {    
          position: relative;
          left: 12%;
          top: 200%;
          width: 85%;
          height:50%;
        }
        
        .nftCollectionTitleSection {    
          position: relative;
          left: 12%;
          top: 65%;
          width: 85%;
          height:25%;
        }

        .nftCollectionTitlePosition {    
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-bottom:20px;
        }


        .NFTSpecPosition {    
          position: relative;
          right: 2.5%;
          top: 125%;
          width: 50%;
          height:50%;
        }

        .NFTSpecContainer {    
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom:20px;
        }

        .NFTSpecTitle{
          font-size:45px;
          margin-top:10px;
          margin-bottom:10px;
          font-weight:800;
          font-family: Lato;
        }

        .MFTSpecContent{
          width:80%;
          font-size:22px;
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
          font-size:37px;
          margin-top:10px;
          margin-bottom:10px;
          font-weight:800;
          font-family: Lato;
        }

        .infoSectionDesc{
          width:80%;
          font-size:22px;
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
          position: relative;
          right: 50%;
          top: 110%;
          width:600px;
          height:600px;
        }
        .space2Image{
          position: relative;
          right: 50%;
          top: 20%;
          width:350px;
          height:350px;
        }
        .space3Image{
          position: relative;
          right: 20%;
          top: 20%;
          width:350px;
          height:350px;
        }


      </style>

      <div data-gjs-dmode="absolute" class="row tempHeight">
        <div class="col">
          <div class ='gradientBackground'/>
        </div>

        <div class="header">
    
          <div class="menuM">

            <a class="headerItem">
            <img src="${discord}" width="35" height="35" />
            </a>
            <a class="headerItem">
              <img src="${twitter}" width="35" height="35" />
            </a>
            

            <div class="headerItem">
              <img src="${opensea}" width=35" height="35" />

            </div>
      
          </div>
        </div>
        <div class = "nftCollectionTitleSection">
          <div class="tripleComparisonContainer">
           
              <h1 class ="tripleComparisonHeader">
                Monkey Squad
              </h1>
 
            <p class = "tripleComparisonSubHeader">
              10,000 space travelers looking for a way home by building and creating together.
            </p>
           
            </div>
        </div>
        
  
        <img class ="space1Image" src="${space1}"/>
        <img class ="space2Image" src="${space2}"/>
        <img class ="space3Image" src="${space3}"/>

        <div class = "NFTSpecPosition">
          <div class = "NFTSpecContainer">
            <p class ="NFTSpecTitle"> The Specs </p>
            <p class = "MFTSpecContent"> Each monkey is unique and programmatically generated from over 200 possible traits, including expression, headwear, clothing, and more. 
            Some of the monkeys are more rare than others.
            The monkeys are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. Mint price to be determined.
             </p>
          </div>
        </div>




        
        <div class = "tripleComparisonSection">
          <div class="tripleComparisonContainer">
            <p class="tripleComparisonHeader">
              Grow together
            </p>
            <p class="tripleComparisonSubHeader">
              Build and invest as a community
            </p>
          </div>
          <div class="teamContainer">
            <div class="infoSection">
              <div class="itemCenter">
                <img src="${astro}" width="300" height="200" />
                <div class="infoSectionTitle"> Build </div>
                <p class="infoSectionDesc">
                  ful learning rarely comes from passively consuming content. 
                  It comes from building, teaching, a
                </p>
              </div>
            </div>

            <div class="infoSection">
              <div class="itemCenter">
                <img src="${coding}" width="300" height="200" />
                <div class="infoSectionTitle"> Create </div>
                <p class="infoSectionDesc">
                  ful learning rarely comes from passively consuming content. 
                  It comes from building, teaching, a
                </p>
              </div>
            </div>

            <div class="infoSection">
              <div class="itemCenter">
                <img src="${apartment}" width="300" height="200" />
                <div class="infoSectionTitle"> Own </div>
                <p class="infoSectionDesc">
                  ful learning rarely comes from passively consuming content. 
                  It comes from building, teaching, a
                </p>
              </div>
            </div>




            </div>
          </div>
        </div>




        <div class="teamSection ">
     
              <div class="teamTitle">
              Team
              </div>
  
          <div class="teamContainer">
            
            <div class="card">
              <img class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_960_720.png"/>
              <div class="container">
                <h4 class="teamPersonName"><b>John Doe</b></h4>
                <p class="teamPersonRole">Founding Artist</p>
              </div>
            </div> 

            <div class="card">
              <img class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/02/18/16/09/ape-7020995_960_720.png"/>
              <div class="container">
                <h4 class="teamPersonName"><b>Jillian Lee</b></h4>
                <p class="teamPersonRole">Head of Marketing</p>
              </div>
            </div> 
            
           
            <div class="card">
              <img class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/01/06/10/10/nft-6919119_960_720.jpg"/>
              <div class="container">
                <h4 class="teamPersonName"><b>John Doe</b></h4>
                <p class="teamPersonRole">Head of Community Affairs </p>
                </div>
            </div> 
            
            <div class="card">
              <img class ="testFirstPersonImage" src = "https://cdn.pixabay.com/photo/2022/01/06/10/10/nft-6919119_960_720.jpg"/>
              <div class="container">
                <h4 class="teamPersonName"><b>John Doe</b></h4>
                <p class="teamPersonRole">Head of Community Affairs </p>
              </div>
            </div> 

            </div>

            
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'ConnectToWalletButton',
    label: 'Connect To Wallet Button',
    category: 'NFT Collection',
    activate: true,
    media: `
      <div>
        <button type="button" class="btn btn-primary">Connect To Wallet</button>
      </div>
    `,
    content: `
      <div data-gjs-type= "ConnectToWalletButton"></div>
    `

  },
  {
    id: 'MintNFTButton',
    label: "Mint NFT Button",
    category: "NFT Collection",
    activate: true,
    media: `
      <div>
        <button type="button" class="btn btn-primary">Mint</button>
      </div>
    `,
    content: `
      <div data-gjs-type= "MintNFTButton"></div>
    `


  },
  {
    id: "NFTMarketPlace",
    label: "NFT Market Place",
    category: "NFT Collection",
    activate: true,
    media: `
      <div>
        <img class="img" src="${image25}" />
      </div>
    `,
    content: `
      <div data-gjs-type= "NFTMarketPlace"></div>
    `

  },

  {
    id: "NFTRoadMap",
    label: "NFT Road Map",
    category: "NFT Collection",
    activate: true,
    media: `
      <div>hey</div>
    `,
    content: `
      <div data-gjs-type= "NFTRoadMap"></div>
    `
  }



]
