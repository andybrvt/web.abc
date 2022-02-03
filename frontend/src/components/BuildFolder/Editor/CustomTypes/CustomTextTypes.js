// THIS FILE WILL HOUSE ALL THE CUSTOM TEXT TYPE
// FOR USES IN EDITOR PLUGINS

export const Header1TextType = editor => {
  editor.DomComponents.addType("header1", {
    extend: 'text',
    model: {
      defaults: {
        name: 'Header 1',
        content: `<h1>Header 1</h1>`
      }
    }
  })


}
