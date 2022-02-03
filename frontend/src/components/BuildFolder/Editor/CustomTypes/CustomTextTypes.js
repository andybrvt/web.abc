// THIS FILE WILL HOUSE ALL THE CUSTOM TEXT TYPE
// FOR USES IN EDITOR PLUGINS

export const UpdateTextType = editor => {
  editor.DomComponents.addType("text", {
    model: {
      defaults: {
        resizable: true,
      }
    }
  })
}

export const Header1TextType = editor => {
  editor.DomComponents.addType("header1", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 1',
        content: `<h1>Add Header 1</h1>`
      }
    }
  })

}
export const Header2TextType = editor => {
  editor.DomComponents.addType("header2", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 2',
        content: `<h2>Add Header 2</h2>`
      }
    }
  })

}
export const Header3TextType = editor => {
  editor.DomComponents.addType("header3", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 3',
        content: `<h3>Add Header 3</h3>`
      }
    }
  })

}
export const Header4TextType = editor => {
  editor.DomComponents.addType("header4", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 4',
        content: `<h4>Add Header 4</h4>`
      }
    }
  })

}
