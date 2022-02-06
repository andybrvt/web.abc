// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const LineBlocks = [
  {
    label: 'test1',
    category: 'Lines',
    media:
    `<div class = "dashedRectBlueLine">
      </div>
      <style>
        .dashedRectBlueLine{

          width: 100px;

           border: 3px dashed #1A85FD;
        }
        .text{

          color: white;
        }
      </style>
      `,
    content:{type:'line1'}

  },
  {
    label: 'test2',
    category: 'Lines',
    media:
    `
      <div class="dashedLine"> </div>
      <style>
        .dashedLine{
          order: none;
          border-top: 5px dotted #f00;
          color: black;

          height: 1px;
          width: 200px;
        }
      </style>
      `,
    content:{type:'line2'}

  },

  {
    label: 'test3',
    category: 'Lines',
    media:
    `
      <div class="dashedLine"> </div>
      <style>
        .dashedLine{
          order: none;
          border-top: 5px dotted #f00;
          color: black;

          height: 1px;
          width: 200px;
        }
      </style>
      `,
    content:`<div> <input type="text" id="fname" name="fname"></div>`

  },

]
