// THIS FILE WILL HOUSE ALL THE CUSTOM BUTTON TYPES HERE
// FOR USES IN EDITOR PLUGINS



// this will be the core of every button
export const ShapeType = editor => {

  editor.DomComponents.addType("shape", {

    model: {
      defaults:{
        name: "shape",
        // stylable: [],
        // stylable-require: [],
        resizable:true,

      }
    }

  })
}

export const Circle1 = editor => {
  editor.DomComponents.addType("shape1", {
    extend: 'shape',
    model: {
      defaults:{
        styles: `
            .circle{
              height: 25px;
              width: 25px;
              background-color: red;
              border-radius: 50%;
              display: inline-block;
            }
        `,
        content:
        `<div class = "circle">
          </div>`,
      }
    }
  })
}

export const Triangle2 = editor => {
  editor.DomComponents.addType("shape2", {
    extend: 'shape',
    model: {
      defaults:{
        styles: `
          .triangle2{
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 40px solid lightblue;
          }
        `,
        content:
        `<div shape = "triangle2">
          </div>`,
      }
    }
  })
}
