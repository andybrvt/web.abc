const rowStyle  = `
  .rowStyleM{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    color: white;
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

// this will be used more for modernized templates like that of the
// web3 space
export const ModernTemplateBlocks = [
  {
    id: 'mTemplate1',
    category: 'Modern Template',
    media: `<div>Stuff here</div>`,
    content: `
      <style>

        ${rowStyle}
        ${colStyle}
        .gradientBackground1{
          text-align: center;
          color: white;
          height: 100%;
          background-image: linear-gradient(90deg, #8a2be2 1%, #ba55d3 99%)
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
          top: 47%;
          font-family: Monospace;
        }
        .mButton1{
            position: absolute;
            display: inline-flex;
            align-items: center;
            background: black;
            padding: 0 50px;
            height: 45px;
            left: 12%;
            top: 70%;
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
        }
      </style>
      <div class="rowStyleM">
        <div class="colStyleM">
          <div class ='gradientBackground1'/>
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
        <div data-gjs-type="button" class='mButton2'>
          Buy Now
        </div>

      </div>
    `
  }


]
