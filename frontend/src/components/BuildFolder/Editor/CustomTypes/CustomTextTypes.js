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
export const Header5TextType = editor => {
  editor.DomComponents.addType("header5", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 5',
        content: `<h5>Add Header 5</h5>`
      }
    }
  })

}
export const Header6TextType = editor => {
  editor.DomComponents.addType("header6", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 6',
        content: `<h6>Add Header 6</h6>`
      }
    }
  })

}
export const ParagraphTextType = editor => {
  editor.DomComponents.addType("paragraph", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Paragraph',
        styles: `
          .paragraph{
          }
        `,
        content: `
          <div class = "paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
        `
      }
    }
  })

}
