import {rowStyle, colStyle} from './GeneralBlockCss';

import image4 from '../../../../images/image4.png';
import image5 from '../../../../images/image5.png';

// This will be for the header and be used for navigation
export const HeaderBlocks = [
  {
    id: "header1",
    category: "Header",
    media: `
    <style>

    </style>
    <div>
      <img src="${image4}" />

    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .colHeader{
          position: relative;
          min-height: 0px;
          height: 80px;
          display:flex;

        }
        .logoHolder{
          position: relative;
          width: 10%;

        }
        .logoHeader{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .menuContainerSingle{
        }
        .menuSingle{
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          -ms-transform: translateY(-50%);

        }
        .headerItemSingle{
          color: black;
          font-size: 25px;
          margin-right: 10px;
        }
        .iconHolder{
          position: relative;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          display: flex;
          flex-direction: row;
          width: 30%;
        }
        .iconHolderHolder{
          position: absolute;
          background: red;
          right: 0;
          width: 10%;
          margin-right: 5%;
          height:100%;

        }
        .iconSingle{
          position: absolute;
          color: black;
          font-size: 35px;
          top: 50%;
          transform: translateY(-50%);

        }
        .iconSingle1{

          right: 10%;

        }
        .iconSingle2{

          right: 5%;

        }
      </style>
      <div class = "row">
        <div class="col colHeader">
          <div class ="logoHolder">
            <a class="logoHeader">
              <svg width="50" height="50" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          </div>

          <div class='menuContainerSingle'>
            <div class="menuSingle">
              <a class="headerItemSingle">
                Home
              </a>
              <a class="headerItemSingle">
                About
              </a>
              <a class="headerItemSingle">
                Our Team
              </a>
              <a class="headerItemSingle">
                Funding
              </a>
            </div>

          </div>



          <div class="iconSingle iconSingle1">
            <i class="fa-light fa-magnifying-glass"></i>
          </div>

          <div class="iconSingle iconSingle2">
            <i class="fas fa-user"></i>
          </div>



        </div>
      </div>

    `

  },
  {
    id: "header2",
    category: "Header",
    media: `
    <style>

    </style>
    <div>
      <img src="${image5}" />

    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .colHeader{
          position: relative;
          min-height: 0px;
          height: 80px;
          display:flex;

        }
        .logoHolder{
          position: relative;
          width: 10%;

        }
        .logoHeader{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .menuContainerSingle{
          position:absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 5%;
        }
        .menuSingle{
          position: relative;

        }
        .headerItemSingle{
          color: black;
          font-size: 25px;
          margin-right: 10px;
        }
        .iconHolder{
          position: relative;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          display: flex;
          flex-direction: row;
          width: 30%;
        }
        .iconHolderHolder{
          position: absolute;
          right: 0;
          width: 10%;
          margin-right: 5%;
          height:100%;

        }

      </style>
      <div class = "row">
        <div class="col colHeader">
          <div class ="logoHolder">
            <a class="logoHeader">
              <svg width="50" height="50" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          </div>

          <div class='menuContainerSingle'>
            <div class="menuSingle">
              <a class="headerItemSingle">
                Home
              </a>
              <a class="headerItemSingle">
                About
              </a>
              <a class="headerItemSingle">
                Our Team
              </a>
              <a class="headerItemSingle">
                Funding
              </a>
            </div>

          </div>




        </div>
      </div>

    `

  },
  {
    id: "header3",
    category: "Header",
    media: `
    <style>

    </style>
    <div>
      <img src="${image5}" />

    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .colHeader{
          position: relative;
          min-height: 0px;
          height: 80px;
          display:flex;

        }
        .logoHolder{
          position: relative;
          width: 10%;

        }
        .logoHeader{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
        .menuContainerSingle{
          position:absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 5%;
        }
        .menuSingle{
          position: relative;

        }
        .headerItemSingle{
          color: black;
          font-size: 25px;
          margin-right: 10px;
        }
        .iconHolder{
          position: relative;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          display: flex;
          flex-direction: row;
          width: 30%;
        }
        .iconHolderHolder{
          position: absolute;
          right: 0;
          width: 10%;
          margin-right: 5%;
          height:100%;

        }

      </style>
      <div class = "row">
        <div class="col colHeader">
          <div class ="logoHolder">
            <a class="logoHeader">
              <svg width="50" height="50" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          </div>

          <div class='menuContainerSingle'>
            <div class="menuSingle">
              <a class="headerItemSingle">
                Home
              </a>
              <a class="headerItemSingle">
                About
              </a>
              <a class="headerItemSingle">
                Our Team
              </a>
              <a class="headerItemSingle">
                Funding
              </a>
            </div>

          </div>




        </div>
      </div>

    `

  }

]
