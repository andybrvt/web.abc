// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const ButtonBlocks = [
  {
    label: 'Button 1',
    category: 'Buttons',
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
    content:{type:'button1'}

  },
  {
    label: 'Button 2',
    category: 'Buttons',
    media:
    `<div class = "button2">
        <div class="text2">Button</div>
      </div>
      <style>
        .button2{

          padding:20px 55px 20px 55px;
          background: white;
          border: 1px solid black;
          text-align: center;
        }
        .text2{

          color: black;
        }
      </style>
      `,
    content:{type:'button2'}

  },
  {
    label: 'Button 3',
    category: 'Buttons',
    media:
    `<div class = "button3">
        <div class="text3">Button</div>
      </div>
      <style>
      .button3{
        border-radius: 30px;
        padding:20px 55px 20px 55px;
        background: #6CB4EE;
        text-align: center;
      }
      .text3{

        color: white;
      }
      </style>
      `,
    content:{type:'button3'}

  },
  {
    label: 'Button 4',
    category: 'Buttons',
    media:
    `<div class = "button4">
        <i class="fas fa-arrow-right"></i>
      </div>
      <style>
      .button4{
        border-radius: 10px;
        padding:20px 55px 20px 55px;
        background: #6CB4EE;
        text-align: center;
        display: flex;
        flex-direction: row;
        color: white;
        font-size: 25px;
      }
      .text4{
        margin-right: 10px;
        color: white;
      }
      </style>
      `,
    content:{type:'button4'}

  },
]
