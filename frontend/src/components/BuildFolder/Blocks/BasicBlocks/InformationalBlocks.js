
// this is just for informational stuff like features, displays
// etc etc


import {rowStyle, colStyle, rowStyleMedia, colStyleMedia} from './GeneralBlockCss';
import imageMedia1 from '../../../../images/imageMedia1.png';
import imageMedia2 from '../../../../images/imageMedia2.png';
import image8 from '../../../../images/image8.png';
import image9 from '../../../../images/image9.png';
import image11 from '../../../../images/image11.png';
import image15 from '../../../../images/image15.png';
export const InformationalBlocks = [
  {
    id: 'info1',
    category: "Information",
    media: `
    <div>
      <img class="img" src="${image15}" />
    </div>
    `,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .infoRow1{
        }
        .infoColH1{
          height: 60vh;
        }
        .image{
          border-radius: 25px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

          position: relative;
          height: 80%;
          left: 50%;
          top: 50%;
          transform: translateY(-50%) translateX(-50%) ;
        }
        .infoHolder{
          position: relative;
          width: 80%;
          top: 50%;
          transform: translateY(-50%);
        }
        .infoHeader1{
          position:relative;
          color:black;
          font-size: 50px;
        }
        .infoBody{
          position: relative;
          color: black;
        }

      </style>

      <div class="row infoRow1">
        <div class = "col infoColH1">
          <img class ="image" src = "https://images.unsplash.com/photo-1644007497105-8d0ae9ec9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"/>
        </div>
        <div class = "col infoColH1">

          <div class = "infoHolder">
            <h1 class="infoHeader1">
              This is what the protocol does
            </h1>
            <div class="infoBody">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </div>
          </div>

        </div>
      </div>
    `
  },
  {
    id: 'info2',
    category: 'Information',
    media: `
    <style>
      .img{
        width: 400px;
        height: 175;
      }
    </style>
    <div>
      <img class="img" src =${imageMedia1} />
    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .infoRow2{
          padding: 20px;
          background: #00008B;
        }
        .infoColH2{
          height: 60vh;
        }
        .image{
          position: relative;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
        .infoHeader2{
          position:relative;
          color:white;
          width: 70%;
          font-size: 50px;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top: 15%;
        }
        .infoBody2{
          position: relative;
          color: white;
          width: 70%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top:15%;
        }

      </style>

      <div class="row infoRow2">

        <div class = "col infoColH2">
          <h1 class="infoHeader2">
            This is what the protocol does
          </h1>
          <div class="infoBody2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
        </div>

        <div class = "col infoColH2">
          <img class ="image" src = "https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
        </div>
      </div>

    `
  },
  {
    id: 'info3',
    category: 'Information',
    media: `
    <style>
      .img{
        width: 400px;
        height: 175;
      }
    </style>
    <div>
      <img class="img" src =${imageMedia2} />
    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .infoRow3{
          padding: 20px;
          background: #F0F8FF;
        }
        .infoColH3{
          height: 60vh;
        }
        .image3{
          position: relative;
          height: 70%;
          left: 50%;
          transform: translateX(-50%);
        }
        .infoHeader2{
          position:relative;
          color:white;
          width: 70%;
          font-size: 50px;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top: 15%;
        }
        .infoBody2{
          position: relative;
          color: white;
          width: 70%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top:15%;
        }
        .miniText3{
          position: relative;
          width: 40%;
          top: 5%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          color:black;
        }

      </style>

      <div class="row infoRow3">


        <div class = "col infoColH3">
          <img class ="image3" src = "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div class = "miniText3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
        </div>
        <div class = "col infoColH3">
          <img class ="image3" src = "https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
          <div class = "miniText3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
        </div>
        <div class = "col infoColH3">
          <img class ="image3" src = "https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"/>
          <div class = "miniText3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
        </div>
      </div>

    `
  },
  {
    id: 'info4',
    category: 'Information',
    media: `
    <style>
      .img{
        width: 400px;
        height: 175;
      }
    </style>
    <div>
      <img class="img" src =${image8} />
    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .infoRow4{
          padding: 20px;
          background: black;
        }
        .infoColH4{
          height: 60vh;
        }
        .image4{
          position: relative;
          height: 70%;
          left: 50%;
          transform: translateX(-50%);
        }
        .infoHeader4{
          position:relative;
          color:white;
          width: 70%;
          font-size: 50px;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top: 15%;
        }
        .infoBody4{
          position: relative;
          color: white;
          width: 70%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top:15%;
        }
        .miniText4{
          position: relative;
          width: 40%;
          top: 5%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          color:white;
        }

      </style>

      <div class="row infoRow4">


        <div class = "col infoColH4">
          <img class ="image4" src = "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
          <div class = "miniText4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
        </div>

      </div>

    `
  },
  {
    id: 'info5',
    category: 'Information',
    media: `
    <style>
      .img{
        width: 400px;
        height: 175;
      }
    </style>
    <div>
      <img class="img" src =${image9} />
    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .infoRow5{
          padding: 20px;
          background: black;
        }
        .infoColH5{
          height: 60vh;
        }
        .image5{
          position: relative;
          height: 70%;
          left: 50%;
          transform: translateX(-50%);
        }
        .infoHeader5{
          position:relative;
          color:white;
          width: 70%;
          font-size: 50px;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top: 15%;
        }
        .infoBody5{
          position: relative;
          color: white;
          width: 70%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top:15%;
        }
        .miniText5{
          position: relative;
          width: 70%;
          top: 30%;
          left: 50%;
          font-size: 40px;
          transform:translateX(-50%);
          text-align: center;
          color:white;
        }

      </style>

      <div class="row infoRow5">


        <div class = "col infoColH5">
          <div class = "miniText5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
        </div>

      </div>

    `
  },
  {
    id: 'info6',
    category: 'Information',
    media: `
    <style>
      .img{
        width: 400px;
        height: 175;
      }
    </style>
    <div>
      <img class="img" src =${image11} />
    </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .infoRow6{
          padding: 20px;
          background: white;
        }
        .infoColH6{
          height: 60vh;
        }
        .image6{
          position: relative;
          height: 70%;
          left: 50%;
          transform: translateX(-50%);
        }
        .infoHeader6{
          position:relative;
          color:white;
          width: 70%;
          font-size: 50px;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top: 15%;
        }
        .infoBody6{
          position: relative;
          color: black;
          width: 70%;
          left: 50%;
          transform:translateX(-50%);
          text-align: center;
          top:15%;
        }
        .miniText6{
          position: relative;
          width: 70%;
          top: 30%;
          left: 50%;
          font-size: 40px;
          transform:translateX(-50%);
          text-align: center;
          color:black;
        }

      </style>

      <div class="row infoRow6">


        <div class = "col infoColH6">
          <div class = "miniText6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          </div>
        </div>

      </div>

    `
  }

]
