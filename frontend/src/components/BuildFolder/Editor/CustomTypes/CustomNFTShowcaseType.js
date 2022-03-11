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

        components: model => {
          return `<h1>Header test: ${model.get('type')}</h1>`;
        },
      }

    },


    view: {

      events: {
        dblclick: 'onActive'
      },

    }

  })
}
