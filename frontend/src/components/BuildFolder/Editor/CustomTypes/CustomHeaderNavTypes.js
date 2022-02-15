// THIS FILE WILL HOUSE ALL THE CUSTOM NAV AND HEADER TYPES
// IT WILL HAVE LINKS ETC ETC

// If you want to make a type do a certain thing then you have
// to first create a new type and then apply that type to your
// component


// used for headers (that is if you wanna limit what you put in headers)
// tabs, link for tabs
// menu items


// This will be just for text that can be used to link to other things
export const CustomLinkText1 = editor => {


  editor.DomComponents.addType("linkText", {
    model: {
      defaults: {
        script: function(){

        },
        name: 'Link Text',
        content: `<div>I am a link</div>`
      }
    },
    extend: 'link',



  })
}
