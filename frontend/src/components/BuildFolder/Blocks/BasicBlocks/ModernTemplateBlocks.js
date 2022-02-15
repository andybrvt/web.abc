const rowStyle  = `
  .rowStyleM{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    color: white;
    font-family: Monospace;

  }
`

const headerStyle = `
  .header{
    position: absolute;
    top: 0;
    width: 100%;
    display:flex;
  }
`
const rowStyleMedia = `
  .rowStyleM{
    position: relative;
    width: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
  }
`
const colStyle = `
.colStyleM{
  position: relative;
  min-height: 100px;
  height: 90vh;
  flex-grow: 1;
  flex-basis: 100%;
}
`

const colStyleMedia = `
.colStyleM{
  position: relative;
  height: 150px;
  flex-grow: 1;
  flex-basis: 100%;
  overflow:hidden;
}
`

const menu = `
  .menu{
    display: flex;
    flex-direction: row;
    margin-left: auto;
    margin-right: 5%;
  }
`

const logo = `
  .logo{
    top: 100px;
    width: 100px;
    margin-left: 7%;
    font-weight: bold;
    text-align:center;
  }
`

const headerItem = `
  .headerItem{
    text-align:center;
    justify-content: center;
    padding: 25px;
    font-size: 20px;
  }
`
// this will be used more for modernized templates like that of the
// web3 space
export const ModernTemplateBlocks = [
  {
    id: 'mTemplate1',
    category: 'Modern Template',
    media: `<div>Stuff here</div>`,
    content: `
      <style>
        ${headerStyle}
        ${rowStyle}
        ${colStyle}
        ${menu}
        ${logo}
        ${headerItem}
        .gradientBackground1{
          text-align: center;
          color: white;
          height: 100%;
          background-image: linear-gradient(90deg, #4B0082 1%, #ba55d3 99%)
        }
        .mHeaderText{
          position: absolute;
          font-size: 70px;
          width: 30%;
          left: 12%;
          top: 20%;
          font-family: Monospace;

        }
        .mBodyText{
          position: absolute;
          width: 25%;
          left: 12%;
          top: 48%;
          font-family: Monospace;
        }
        .mButton1{
            position: absolute;
            display: inline-flex;
            align-items: center;
            background-image: linear-gradient(90deg, #483D8B 1%,#8B008B 99%);
            padding: 0 50px;
            height: 45px;
            left: 12%;
            top: 70%;
            border-radius: 15px;
            font-family: Monospace;

        }
        .mButton2{
            position: absolute;
            display: inline-flex;
            align-items: center;
            background: black;
            padding: 0 50px;
            height: 45px;
            left: 25%;
            top: 70%;
            border-radius: 15px;
            font-family: Monospace;

        }
        .mImage{
          position: absolute;
          right: 5%;
          top: 15%;
          width: 50%;

        }
      </style>
      <div data-gjs-dmode="absolute" class="rowStyleM">
        <div class="colStyleM">
          <div class ='gradientBackground1'/>
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
          <div class="menu">
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
        <div data-gjs-type="button" class='mButton1'>
          Go to Page
        </div>
        <div data-gjs-type="button1" class='mButton2'>
          Buy Now
        </div>
        <img class ="mImage" src = "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1102&q=80"/>
      </div>
    `
  }


]

// <img src="https://o.remove.bg/downloads/3a752349-25eb-4aaf-905e-0e22a8c4af17/jeremy-bezanger-Ld0ktDeje8I-unsplash-removebg-preview.png" />
// <img src="https://o.remove.bg/downloads/4a9facba-afb5-40c9-82f5-28d26a6d343e/ferhat-deniz-fors-YOCDD-D4oOM-unsplash__1_-removebg-preview.png" />
// <img src ="https://o.remove.bg/downloads/e51400c6-4705-433e-b8e5-5e98176083b3/shubham-dhage-26PeYRqpBh8-unsplash-removebg-preview.png"/>
// <img src="https://o.remove.bg/downloads/5553185c-2c22-45b7-8444-9ce8ac1f9cd2/arthur-mazi-PIwz4C6wr9A-unsplash-removebg-preview.png" />
// <img src="https://o.remove.bg/downloads/424c7b85-b592-4a40-b6ca-6c7c5af942a7/jeremy-bezanger-cD5qFAlSk_E-unsplash-removebg-preview.png" />
