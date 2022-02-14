const rowStyle  = `
  .rowStyle{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
  }
`
const rowStyleMedia = `
  .rowStyle{
    position: relative;
    width: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
  }
`
const colStyle = `
.colStyle{
  position: relative;
  min-height: 100px;
  max-height: 80vh;
  flex-grow: 1;
  flex-basis: 100%;
  overflow:hidden;
}
`

const colStyleMedia = `
.colStyle{
  position: relative;
  height: 150px;
  flex-grow: 1;
  flex-basis: 100%;
  overflow:hidden;
}
`

export const TableBlocks = [

  {
    id: 'template1',
    category: 'Templates',
    media: `  <style>
      ${rowStyleMedia}
      ${colStyleMedia}
        .testImage{
          height: 100%:
        }
        .testText{
          position: absolute;
          width: 40%;
          left:5%;
          top: 20%;
          font-size: 10px;
        }
        .buttonTemp1{
          position:absolute;
          display: inline-flex;
          align-items: center;
          background: black;
          padding: 0 20px;
          height: 15px;
          left: 5%;
          top: 50%;
        }
        .textTemp1{
          color: white;
          font-size: 5px;
        }
      </style>

      <div data-gjs-dmode = "absolute" class="rowStyle">
        <div class="colStyle">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <h1 class = "testText">
          Put your brands message here and show the world who you are
        </h1>
        <div data-gjs-type ="button" class="buttonTemp1">
          <div class="textTemp1">Check it out</div>
        </div>
      </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .testImage{
          width:100%;
          height: 100%:
        }
        .testText{
          position: absolute;
          width: 40%;
          left: 10%;
          top: 20%;
          font-size: 70px;
        }
        .buttonTemp1{
          position:absolute;
          display: inline-flex;
          align-items: center;
          background: black;
          padding: 0 50px;
          height: 45px;
          left: 10%;
          top: 75%;
        }
        .textTemp1{
          color: white;
        }

      </style>

      <div data-gjs-dmode = "absolute" class="rowStyle">
        <div class="colStyle">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <h1 class = "testText">
        Put your brands message here and show the world who you are
        </h1>
        <div data-gjs-type ="button" class="buttonTemp1">
          <div class="textTemp1">Check it out</div>
        </div>
      </div>
      `,

  },
  {
    id: 'template2',
    category: 'Templates',
    media: `  <style>
        ${rowStyleMedia}
        ${colStyleMedia}
        .testImage{
          width:100%;
          height: 100%:
        }
        .testText2{
          text-align:left;
          width: 60%;
          position: absolute;
          left:5%;
          top: 20%;
          font-size: 10px;
        }
        .buttonTemp2{
          position:absolute;
          display: inline-flex;
          align-items: center;
          background: black;
          padding: 0 20px;
          height: 15px;
          left: 5%;
          top: 60%;
        }
        .textTemp2{
          color: white;
          font-size: 5px;
        }
      </style>

      <div data-gjs-dmode = "absolute" class="rowStyle">
        <div class="colStyle">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div class="colStyle">
          <h1 class = "testText2">
          Put your brands message here and show the world who you are
          </h1>
          <div data-gjs-type ="button" class="buttonTemp2">
            <div class="textTemp2">Check it out</div>
          </div>
        </div>
      </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .testImage{
          width:100%;
          height: 100%:
        }
        .testText2{
          position: absolute;
          width: 80%;
          left: 10%;
          top: 0%;
          font-size: 70px;
        }
        .buttonTemp2{
          position:absolute;
          display: inline-flex;
          align-items: center;
          background: black;
          padding: 0 50px;
          height: 45px;
          left: 10%;
          top: 75%;
        }
        .textTemp2{
          color: white;
        }

      </style>

      <div data-gjs-dmode = "absolute" class="rowStyle">
        <div class="colStyle">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div class="colStyle">
          <h1 class = "testText2">
          Put your brands message here and show the world who you are
          </h1>
          <div data-gjs-type ="button" class="buttonTemp2">
            <div class="textTemp2">Check it out</div>
          </div>
        </div>

      </div>
      `,

  },
  {
    id: 'template3',
    category: 'Templates',
    media: `  <style>
        ${rowStyleMedia}
        ${colStyleMedia}
        .testImage{
          width:100%;
          height: 100%:
        }
        .testText2{
          text-align:left;
          width: 60%;
          position: absolute;
          left:5%;
          top: 20%;
          font-size: 10px;
        }
        .buttonTemp2{
          position:absolute;
          display: inline-flex;
          align-items: center;
          background: black;
          padding: 0 20px;
          height: 15px;
          left: 5%;
          top: 60%;
        }
        .textTemp2{
          color: white;
          font-size: 5px;
        }
      </style>

      <div data-gjs-dmode = "absolute" class="rowStyle">
        <div class="colStyle">
          <h1 class = "testText2">
          Put your brands message here and show the world who you are
          </h1>
          <div data-gjs-type ="button" class="buttonTemp2">
            <div class="textTemp2">Check it out</div>
          </div>
        </div>
        <div class="colStyle">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>

      </div>`,
    content: `
      <style>
        ${rowStyle}
        ${colStyle}
        .testImage{
          width:100%;
          height: 100%:
        }
        .testText2{
          position: absolute;
          width: 80%;
          left: 10%;
          top: 0%;
          font-size: 70px;
        }
        .buttonTemp2{
          position:absolute;
          display: inline-flex;
          align-items: center;
          background: black;
          padding: 0 50px;
          height: 45px;
          left: 10%;
          top: 75%;
        }
        .textTemp2{
          color: white;
        }

      </style>
      <div data-gjs-dmode = "absolute" class="rowStyle">
        <div class="colStyle">
          <h1 class = "testText2">
          Put your brands message here and show the world who you are
          </h1>
          <div data-gjs-type ="button" class="buttonTemp2">
            <div class="textTemp2">Check it out</div>
          </div>
        </div>
        <div class="colStyle">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
      </div>
      `,
  },






]
