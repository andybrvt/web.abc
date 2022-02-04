// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const LineBlocks = [
  {
    label: 'test1',
    category: 'Lines',
    media:
    `<div class = "button">
        <div class="text">Button</div>
      </div>
      <style>
        .button{

          padding:20px 55px 20px 55px;
          background: black;
          text-align: center;
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
      <div class="dashedLine">Dashed </div>
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

]
