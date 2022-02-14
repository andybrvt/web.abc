// THIS FILE WILL HOUSE ALL THE CUSTOM COLUMN AND ROW TYPES
// USE FOR EDITOR PLUG INS

// Columns include single colums, multi columns, list etc

// building just the row type so that it can be used in other areas
export const RowCore = editor => {

  editor.DomComponents.addType("rowNew", {

    isComponent: function (el){
      return el.id === "row-new"
    },
    model: {
      defaults:{
        name: 'rowNew',
        resizable:true,
        // droppable: ['colNew', 'testColumn'],
        editable:true,
      }
    },

  })

}




// same with colums
export const ColumnCore = editor => {

  editor.DomComponents.addType("colNew", {
    isComponent: function(el){
      return el.id === "column-new"
    },
    model: {
      defaults:{
        name: 'colNew',
        resizable: true,
        // draggable:['rowNew', 'testRow'],
        editable:true
      }
    }

  })
}


export const TestRow = editor => {
  editor.DomComponents.addType("testRow", {
    extend: 'rowNew',
    model: {
      defaults:{
        styles: `
        .singleRowNoPadding{
           background:pink;
           display: flex;

         }

         `,
        content: `
          <div class = "singleRowNoPadding">

          </div>
        `


      }
    }
  })
}

export const TestColumn = editor => {
  editor.DomComponents.addType("testColumn", {
    extend: 'colNew',
    model: {
      defaults:{
        styles: `

         .singleColumn{
           flex:1,
           background: pink;
           height: 100px;
           width: 200px;
         }
         `,
        content: `
          <div class = "singleColumn">

          </div>
        `


      }
    }
  })
}
