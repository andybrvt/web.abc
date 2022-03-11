// Function will be used as add nfts in

export const CustomNFTShowcase = editor => {


  editor.DomComponents.addType("NFTShowcase", {
    model: {
      name: 'NFTShowcase',
      tagName: "NFTShowcase",
      resizable: 'true',
      defaults:{

        content:
        `<div>this is a list</div>`
      }

    },


    view: {

      events: {
        dblclick: 'onActive'
      },
      onActive(){
        editor.Modal.open()
      }
    }

  })
}
