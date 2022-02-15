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
    margin-left: 7%;
    font-weight: bold;
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
          <a class="logo headerItem">Web.abc</a>
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
