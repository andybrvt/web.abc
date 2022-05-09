
// FOR ROWS
import {
  rowStyle,
  colStyle,
  normalButton,
  rowStyleMedia,
  colStyleMedia
} from '../GeneralBlockCss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay, faGlobe  } from '@fortawesome/free-solid-svg-icons'


import astro from './astro.svg';
import coding from './coding.svg';
import apartment from './apartment.svg';


import twitter from './twitter.png';
import opensea from './opensea.png';
import discord from './discord.png';
import space1 from './space1.svg';
import space2 from './space2.svg';
import space3 from './space3.svg';
// import twitter from './twitter.png';
// import opensea from './opensea.png';
// import discord from './discord.png';
// FOR MENU
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
    padding: 25px;
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


// this will be used more for modernized templates like that of the
// web3 space
export const NFTCollectionTemplates = [
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
          position: absolute;
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
          position: absolute;
          left: 12%;
          top: 200%;
          width: 85%;
          height:50%;
        }
        
        .nftCollectionTitleSection {    
          position: absolute;
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
          position: absolute;
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
          position: absolute;
          right: 50%;
          top: 10%;
          width:200px;
          height:200px;
        }
        
        .space1Image{
          position: absolute;
          right: 50%;
          top: 110%;
          width:600px;
          height:600px;
        }
        .space2Image{
          position: absolute;
          right: 50%;
          top: 20%;
          width:350px;
          height:350px;
        }
        .space3Image{
          position: absolute;
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
          <a class="logo ">
            

          </a>
          <div class="menuM">
       
            <a class="headerItem">
            <img src="${discord}" width="52.5" height="52.5" />
            </a>
            <a class="headerItem">
              <img src="${twitter}" width="50" height="40" />
            </a>
            

            <div class="headerItem">
              <img src="${opensea}" width="45" height="45" />

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
    id: 'mTemplate2',
    category: 'NFT Templates',
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
        .gradientBackground2{
          // background-image:radial-gradient(ellipse at left, #e66465, #9198e5)
        }
        .posMenu{
          margin-right: 20%;
        }
        .posProfile{

          padding: 5px;
          margin-right: 7%;
          font-size: 10px;
        }
        .posHeaderText2{
          position: absolute;
          width: 30%;
          left: 62%;
          top: 20%;
          font-size: 15px;
          font-family: Monospace;
          text-align:left;}
        .posBodyText2{
          text-align: left;
          position: absolute;
          width: 30%;
          left: 62%;
          top: 40%;
          font-size: 5px;
          font-family: Monospace;}
        .posButton3{
            background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
            left: 62%;
            top: 75%;}
        .posButton4{
            background: black;
            left: 75%;
            top: 75%;}
        .mImage2{
          border-radius: 25px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

          position: absolute;
          left: 15%;
          top: 17%;
          height: 70%;}
      </style>
      <div data-gjs-dmode="absolute" class="rowStyleM">
        hi
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
    .gradientBackground2{
      // background-image: radial-gradient(ellipse at left, #e66465, #9198e5);
    }
    .posMenu{
      margin-right: 20%;
    }
    .posProfile{

      padding: 20px;
      margin-right: 7%;
      font-size: 35px;
    }
    .posHeaderText2{
      position: absolute;
      font-size: 70px;
      width: 30%;
      left: 60%;
      top: 20%;
      font-family: Monospace;

    }
    .posBodyText2{
      position: absolute;
      width: 25%;
      left: 60%;
      top: 48%;
      font-family: Monospace;}
    .posButton3{
        background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
        left: 60%;
        top: 70%;}
    .posButton4{
        background: black;
        left: 73%;
        top: 70%;}
    .mImage2{
      border-radius: 25px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

      position: absolute;
      left: 15%;
      top: 17%;
      height: 70%;}
    </style>
    <div data-gjs-dmode="absolute" class="row tempHeight">
      hi

    </div>`

  },

  {
    id: 'mTemplate3',
    category: 'NFT Templates',
    media: `

        <style>
        ${headerStyle}
        ${rowStyleMedia}
        ${colStyleMedia}
        ${background}
        ${menu}
        ${logo}
        ${headerItemMedia}
        ${mediaButton}
        .gradientBackground3{
          // background-image:linear-gradient(180deg, #00008B, rgba(255,0,0,0) 70.71%),
          //   linear-gradient(127deg, #8A2BE2, rgba(0,255,0,0) 70.71%),
          //   linear-gradient(336deg, #8B008B, rgba(0,0,255,0) 70.71%);
          }
        .posMenu3{
          margin-right: 20%;
        }
        .newLogo{
          padding: 5px;
          text-align: center;
          margin-left: 7%;
          font-size: 10px;
          color: black;
        }
        .posHeaderText3{
            position: absolute;
            font-size: 15px;
            width: 60%;
            left: 50%;
            top: 10%;
            transform: translateX(-50%);
            text-align: center;
            font-family: Monospace;}
          .posBodyText3{
            position: absolute;
            width: 60%;
            left: 50%;
            transform: translateX(-50%);
            top: 20%;
            text-align:center;
            font-size: 5px;
            font-family: Monospace;}
          .posButton5{
              background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
              left: 40%;
              transform: translateX(-50%);
              top: 38%;}
          .posButton6{
              background: black;
              left: 60%;
              transform: translateX(-50%);
              top: 38%;}
          .mImage3{
            border-radius: 25px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 50%;
            height: 45%;
          }

        </style>

        <div data-gjs-dmode="absolute" class="rowStyleM">
          <div class="colStyleM">
            <div class ='gradientBackground gradientBackground3'/>
          </div>

          <div class="header">
            <a class="newLogo">
              Web.abc
            </a>
            <div class="menuM posMenu3">
              <a class="headerItem">
                Home
              </a>
              <a class="headerItem">
                About
              </a>
              <a class="headerItem">
                Team
              </a>
              <a class="headerItem">
                Funding
              </a>
            </div>

            <a class="posProfile">
              <i class="fas fa-circle"></i>
            </a>
          </div>



          <h1 class ="posHeaderText3">
            Brand New Protocol
          </h1>
          <div class = "posBodyText3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
          <div data-gjs-type="button" class='mButton posButton5'>
            Go to Page
          </div>
          <div data-gjs-type="button1" class='mButton posButton6'>
            Buy Now
          </div>

          <img class ="mImage3" src = "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>


        </div>

    `,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        ${background}
        ${headerStyle}
        ${menu}

        ${headerItem}
        ${normalButton}
        ${tempHeight}
        .colExtraHeight{
          height: 95vh;
        }
        .newLogo{
          padding: 20px;
          text-align: center;
          margin-left: 7%;
          font-size: 25px;
        }
        .gradientBackground3{
          // background-image:linear-gradient(180deg, #00008B, rgba(255,0,0,0) 70.71%),
          //   linear-gradient(127deg, #8A2BE2, rgba(0,255,0,0) 70.71%),
          //   linear-gradient(336deg, #8B008B, rgba(0,0,255,0) 70.71%);
        }
        .posMenu3{
          position:absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .posProfile{

          padding: 20px;
          margin-right: 7%;
          font-size: 35px;
        }
        .posHeaderText3{
          position: absolute;
          font-size: 70px;
          width: 60%;
          left: 50%;
          top: 10%;
          transform: translateX(-50%);
          text-align: center;
          font-family: Monospace;}
        .posBodyText3{
          position: absolute;
          width: 60%;
          left: 50%;
          transform: translateX(-50%);
          top: 27%;
          text-align:center;
          font-family: Monospace;}
        .posButton5{
            background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
            left: 40%;
            transform: translateX(-50%);
            top: 38%;}
        .posButton6{
            background: black;
            left: 60%;
            transform: translateX(-50%);
            top: 38%;}
        .mImage3{
          border-radius: 25px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 50%;
          height: 45%;
        }
      </style>
      <div data-gjs-dmode="absolute" class="row tempHeight">
        <div class="col colExtraHeight">
          <div class="gradientBackground gradientBackground3"/>
        </div>
        <div class="header">
          <a class="newLogo">Web.abc</a>
          <div class="menuM posMenu3">
            <a class="headerItem">
              Home
            </a>
            <a class="headerItem">
              About
            </a>
            <a class="headerItem">
              Our Team
            </a>
            <a class="headerItem">
              Funding
            </a>
          </div>

          <a class="posProfile">
            <i class="fas fa-circle"></i>
          </a>
        </div>

        <h1 class ="posHeaderText3">
          Brand New Protocol
        </h1>
        <div class = "posBodyText3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <div data-gjs-type="button" class='mButton posButton5'>
          Go to Page
        </div>
        <div data-gjs-type="button1" class='mButton posButton6'>
          Buy Now
        </div>

        <img class ="mImage3" src = "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>



      </div>
    `

  }


]

// <img class ="mImage3" src = "https://images.unsplash.com/photo-1636471339182-8584b963a73a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>


// <img src="https://o.remove.bg/downloads/3a752349-25eb-4aaf-905e-0e22a8c4af17/jeremy-bezanger-Ld0ktDeje8I-unsplash-removebg-preview.png" />
// <img src="https://o.remove.bg/downloads/4a9facba-afb5-40c9-82f5-28d26a6d343e/ferhat-deniz-fors-YOCDD-D4oOM-unsplash__1_-removebg-preview.png" />
// <img src ="https://o.remove.bg/downloads/e51400c6-4705-433e-b8e5-5e98176083b3/shubham-dhage-26PeYRqpBh8-unsplash-removebg-preview.png"/>
// <img src="https://o.remove.bg/downloads/5553185c-2c22-45b7-8444-9ce8ac1f9cd2/arthur-mazi-PIwz4C6wr9A-unsplash-removebg-preview.png" />
// <img src="https://o.remove.bg/downloads/424c7b85-b592-4a40-b6ca-6c7c5af942a7/jeremy-bezanger-cD5qFAlSk_E-unsplash-removebg-preview.png" />
