// THIS FILE WILL HOUSE ALL THE CUSTOM BUTTON TYPES HERE
// FOR USES IN EDITOR PLUGINS



// this will be the core of every button
export const LineTypes = editor => {

  editor.DomComponents.addType("line", {

    model: {
      defaults:{
        name: "line",
        // stylable: [],
        // stylable-require: [],
        resizable:true,

      }
    }

  })
}

export const Line1 = editor => {
  editor.DomComponents.addType("line1", {
    extend: 'line',
    model: {
      defaults:{
        styles: `
        .dashedRectBlueLine{

          width: 100px;

           border: 3px dashed #1A85FD;
        }
        `,
        content:
        `<div class="dashedRectBlueLine"> </div>`,
      }
    }
  })
}

export const Line2 = editor => {
  editor.DomComponents.addType("line2", {
    extend: 'line',
    model: {
      defaults:{
        styles: `
          .dashedLine{
            order: none;
            border-top: 5px dotted #f00;
            color: black;

            height: 1px;
            width: 200px;
          }
        `,
        content:
          `<div class="dashedLine"> </div>`,
      }
    }
  })
}
