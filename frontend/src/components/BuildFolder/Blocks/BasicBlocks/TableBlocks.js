

export const TableBlocks = [
  {
    label: "Button 1",
    category: "Columns",
    media: '<div>Stuff here</div>',
    content: {type: 'testRow'}


  },
  {
    id: 'table',
    label: 'Table',
    category: 'Columns',

    content: [`
      <style>
        .testRow{
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: stretch;
          flex-wrap: nowrap;
        }
        .testColumn{
          position: relative;
          min-height: 100px;
          max-height: 80vh;
          flex-grow: 1;
          flex-basis: 100%;
          overflow:hidden;
        }
        .testImage{
          width:100%;
          height: 100%:
        }
        .testText{
          position: absolute;
        }
      </style>

      <div data-gjs-dmode = "absolute" class="testRow">
        <div class="testColumn">
          <img class ='testImage' src = "https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <h1 class = "testText">
          Put your brands message here
        </h1>
      </div>
      `, {type: 'button1'}],

  }






]

// `
// <style>
//   .singleRowNoPadding{
//     background:pink;
//     height: 80vh;
//     width: 100vw;
//   }
//   .singleColumn{
//     background: pink;
//     height: 100px;
//     width: 200px;
//   }
//
// </style>
// <div class="singleRowNoPadding" id = "row-new">
//
// </div>
// `
