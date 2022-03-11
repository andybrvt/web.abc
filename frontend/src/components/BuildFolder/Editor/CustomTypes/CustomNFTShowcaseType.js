// Function will be used as add nfts in

export const CustomNFTShowcase = editor => {


  editor.DomComponents.addType("NFTShowcase", {
    model: {
      name: 'NFTShowcase',
      tagName: "NFTShowcase",
      resizable: 'true',
      attributes: {
        name: "stuff",
      },
      defaults:{

        content:
        `<div>name</div>`
      }

    },


    view: {

      events: {
        dblclick: 'onActive'
      },

    }

  })
}
