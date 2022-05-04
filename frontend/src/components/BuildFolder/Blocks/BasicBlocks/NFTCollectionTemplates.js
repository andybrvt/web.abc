
// FOR ROWS
import {
  rowStyle,
  colStyle,
  normalButton,
  rowStyleMedia,
  colStyleMedia
} from './GeneralBlockCss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay, faGlobe  } from '@fortawesome/free-solid-svg-icons'

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
    category: 'Modern Feature',
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
      .gradientBackground1{
        // background-image: linear-gradient(90deg, #4B0082 1%, #ba55d3 99%)
      }
      .discordIcon{
        width:200px;
        height:200px;
      }
      .mHeaderText{
        color: black;
        position: absolute;
        font-size: 70px;
        width: 30%;
        left: 12%;
        top: 20%;
        font-size: 15px;
        font-family: Lato;
        text-align:left;}
      .mBodyText{
        text-align: left;
        color:black;
        position: absolute;
        width: 30%;
        left: 12%;
        top: 40%;
        font-size: 5px;
        font-family: Lato;}
      .mButton1{
          background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
          left: 12%;
          top: 75%;}
      .mButton2{
          background: black;
          left: 27%;
          top: 75%;}
      .mImage{
        border-radius: 25px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

        position: absolute;
        right: 5%;
        top: 20%;
        width: 50%;}

      .teamSection {
     
        position: absolute;
        right: 5%;
        top: 20%;
        width: 50%;
      }
    </style>

      <div data-gjs-dmode="absolute" class="rowStyleM">
        <div class="colStyleM">
          <div class ='gradientBackground gradientBackground1'/>
        </div>

        <div class="header">
          <a class="logo">
            <svg width="25" height="25" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_196)">
            <rect width="1024" height="1024" fill="#531DAB"/>
            <path d="M543.395 693L544.595 711C544.595 717.4 534.995 720.6 515.795 720.6C482.195 720.6 465.395 714.2 465.395 701.4C465.395 688.6 474.195 661 491.795 618.6C509.795 576.2 518.795 549.8 518.795 539.4C518.795 518.2 505.795 507.6 479.795 507.6L470.195 508.2C465.395 508.2 462.995 506.4 462.995 502.8C462.995 495.2 465.795 487.6 471.395 480C477.395 472 484.795 468 493.595 468C529.995 468 562.595 457.2 591.395 435.6C620.195 414 634.595 391.2 634.595 367.2C634.595 350 629.195 338 618.395 331.2C607.995 324.4 593.595 321 575.195 321C556.795 321 542.795 326.6 533.195 337.8C509.595 367.4 471.595 429.4 419.195 523.8C367.195 617.8 337.995 675.6 331.595 697.2C327.995 707.2 318.595 714.6 303.395 719.4C288.595 724.2 273.995 726.6 259.595 726.6C245.595 726.6 238.595 723.8 238.595 718.2V717C238.595 712.6 252.395 687 279.995 640.2C307.595 593.4 337.995 541.4 371.195 484.2C404.795 426.6 426.395 386.8 435.995 364.8C445.995 342.8 450.995 324.2 450.995 309V303C450.995 292.2 481.395 286.8 542.195 286.8C607.395 286.8 650.395 293.4 671.195 306.6C679.995 312.2 687.395 320.4 693.395 331.2C699.795 342 702.995 355.8 702.995 372.6C702.995 389.4 696.195 406.4 682.595 423.6C668.995 440.8 654.395 453.6 638.795 462C623.595 470 608.395 475.8 593.195 479.4C577.995 483 566.595 486 558.995 488.4C551.395 490.8 547.595 494.6 547.595 499.8C547.595 503 550.395 507 555.995 511.8C561.995 516.2 567.995 521.6 573.995 528C579.995 534.4 582.995 541.2 582.995 548.4C582.995 555.6 576.395 576.4 563.195 610.8C549.995 644.8 543.395 672.2 543.395 693Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_196">
            <rect width="1024" height="1024" fill="white"/>
            </clipPath>
            </defs>
            </svg>

          </a>
          <div class="menuM">
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
        </div>

        <h1 class ="mHeaderText">
          Brand New Protocol
        </h1>
        <div class = "mBodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <div data-gjs-type="button" class='mButton mButton1'>
          Go to Page
        </div>
        <div data-gjs-type="button1" class='mButton mButton2'>
          Buy Now
        </div>
        <img class ="mImage" src = "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"/>
        <div class="teamSection">
          This is the team
          This is the team
          This is the team
          This is the team

          This is the team
          This is the team

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
      </style>

      <div data-gjs-dmode="absolute" class="row tempHeight">
        <div class="col">
          <div class ='gradientBackground'/>
        </div>

        <div class="header">
          <a class="logo ">
            <svg width="75" height="75" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_196)">
            <rect width="1024" height="1024" fill="#531DAB"/>
            <path d="M543.395 693L544.595 711C544.595 717.4 534.995 720.6 515.795 720.6C482.195 720.6 465.395 714.2 465.395 701.4C465.395 688.6 474.195 661 491.795 618.6C509.795 576.2 518.795 549.8 518.795 539.4C518.795 518.2 505.795 507.6 479.795 507.6L470.195 508.2C465.395 508.2 462.995 506.4 462.995 502.8C462.995 495.2 465.795 487.6 471.395 480C477.395 472 484.795 468 493.595 468C529.995 468 562.595 457.2 591.395 435.6C620.195 414 634.595 391.2 634.595 367.2C634.595 350 629.195 338 618.395 331.2C607.995 324.4 593.595 321 575.195 321C556.795 321 542.795 326.6 533.195 337.8C509.595 367.4 471.595 429.4 419.195 523.8C367.195 617.8 337.995 675.6 331.595 697.2C327.995 707.2 318.595 714.6 303.395 719.4C288.595 724.2 273.995 726.6 259.595 726.6C245.595 726.6 238.595 723.8 238.595 718.2V717C238.595 712.6 252.395 687 279.995 640.2C307.595 593.4 337.995 541.4 371.195 484.2C404.795 426.6 426.395 386.8 435.995 364.8C445.995 342.8 450.995 324.2 450.995 309V303C450.995 292.2 481.395 286.8 542.195 286.8C607.395 286.8 650.395 293.4 671.195 306.6C679.995 312.2 687.395 320.4 693.395 331.2C699.795 342 702.995 355.8 702.995 372.6C702.995 389.4 696.195 406.4 682.595 423.6C668.995 440.8 654.395 453.6 638.795 462C623.595 470 608.395 475.8 593.195 479.4C577.995 483 566.595 486 558.995 488.4C551.395 490.8 547.595 494.6 547.595 499.8C547.595 503 550.395 507 555.995 511.8C561.995 516.2 567.995 521.6 573.995 528C579.995 534.4 582.995 541.2 582.995 548.4C582.995 555.6 576.395 576.4 563.195 610.8C549.995 644.8 543.395 672.2 543.395 693Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_196">
            <rect width="1024" height="1024" fill="white"/>
            </clipPath>
            </defs>
            </svg>

          </a>
          <div class="menuM">
            <a class="headerItem">
              Home
            </a>
            <a class="headerItem">
              Vision
            </a>
            <a class="headerItem">
              Our Team
            </a>
            <a class="headerItem">
              Funding
            </a>
            <FontAwesomeIcon icon={faGlobe} />

            <div class="headerItem">
            <FontAwesomeIcon  icon={faGlobe} />

            </div>
            <a class="headerItem">
              Funding
            </a>
          </div>
        </div>

        <h1 class ="mHeaderText">
          Brand New Protocol
        </h1>
        <div class = "mBodyText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <div data-gjs-type="button" class='mButton mButton1'>
          Go to Page
        </div>
        <div data-gjs-type="button1" class='mButton mButton2'>
          Buy Now
        </div>
        <img class ="mImage" src = "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"/>
        
      </div>
    `
  },

  {
    id: 'mTemplate2',
    category: 'Modern Feature',
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
    category: 'Modern Feature',
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
