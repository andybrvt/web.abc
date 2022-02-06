// THIS FILE WILL HOUSE ALL THE CUSTOM BUTTON TYPES HERE
// FOR USES IN EDITOR PLUGINS



// this will be the core of every button
export const InputTypes = editor => {

  editor.DomComponents.addType("input", {

    model: {
      defaults:{
        name: "input",
        // stylable: [],
        // stylable-require: [],
        resizable:true,

      }
    }

  })
}

export const Input1 = editor => {
  editor.DomComponents.addType("input1", {
    extend: 'input',
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

export const Input2 = editor => {
  editor.DomComponents.addType("input2", {
    extend: 'input',
    model: {
      defaults:{
        styles: `
            .button2{

              padding:20px 55px 20px 55px;
              background: white;
              border: 1px solid black;
              text-align: center;
            }
            .text2{

              color: black;
            }
        `,
        content:
        `<div class = "button2">
            <div class="text2">Button</div>
          </div>`,
      }
    }
  })
}
