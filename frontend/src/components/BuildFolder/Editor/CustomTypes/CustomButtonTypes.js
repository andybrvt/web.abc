// THIS FILE WILL HOUSE ALL THE CUSTOM BUTTON TYPES HERE
// FOR USES IN EDITOR PLUGINS

// this will be the core of every button
export const coreButtonType = editor => {

  editor.DomComponents.addType("button", {

    model: {
      defaults:{
        name: "button",
        // stylable: [],
        // stylable-require: [],
        resizable:true,

      }
    }

  })
}

export const buttonType1 = editor => {
  editor.DomComponents.addType("button1", {
    extend: 'button',
    model: {
      defaults:{
        styles: `
            .button{

              padding:20px 55px 20px 55px;
              background: black;
              text-align: center;
            }
            .text{

              color: white;
            }
        `,
        content:
        `<div class = "button">
            <div class="text">Button</div>
          </div>`,
      }
    }
  })
}
