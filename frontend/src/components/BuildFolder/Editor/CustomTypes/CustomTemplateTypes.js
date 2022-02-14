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
