// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const ButtonBlocks = [
  {
    label: 'test 1',
    category: 'Buttons',
    media:
    `
      <div>
      <svg height="400" width="450">
        <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
          <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
          <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
          <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
          <!-- Mark relevant points -->
          <g stroke="black" stroke-width="3" fill="black">
            <circle id="pointA" cx="100" cy="350" r="3" />
            <circle id="pointB" cx="250" cy="50" r="3" />
            <circle id="pointC" cx="400" cy="350" r="3" />
          </g>
          <!-- Label the points -->
          <g font-size="30" font-family="sans-serif" fill="black" stroke="none" text-anchor="middle">
            <text x="100" y="350" dx="-30">A</text>
            <text x="250" y="50" dy="-10">B</text>
            <text x="400" y="350" dx="30">C</text>
          </g>
          Sorry, your browser does not support inline SVG.
        </svg>

      </div>

      <style>
      </style>
      `,
    content:`
    <svg height="400" width="450">
      <path id="lineAB" d="M 100 350 l 150 -300" stroke="red" stroke-width="3" fill="none" />
        <path id="lineBC" d="M 250 50 l 150 300" stroke="red" stroke-width="3" fill="none" />
        <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
        <path d="M 100 350 q 150 -300 300 0" stroke="blue" stroke-width="5" fill="none" />
        <!-- Mark relevant points -->
        <g stroke="black" stroke-width="3" fill="black">
          <circle id="pointA" cx="100" cy="350" r="3" />
          <circle id="pointB" cx="250" cy="50" r="3" />
          <circle id="pointC" cx="400" cy="350" r="3" />
        </g>
        <!-- Label the points -->
        <g font-size="30" font-family="sans-serif" fill="black" stroke="none" text-anchor="middle">
          <text x="100" y="350" dx="-30">A</text>
          <text x="250" y="50" dy="-10">B</text>
          <text x="400" y="350" dx="30">C</text>
        </g>
        Sorry, your browser does not support inline SVG.
      </svg>

    `

  },
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
    content:{type:'button1'},
    select:true,
  

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
  {
    label: '',
    category: 'Buttons',
    media:
    `<div class="button5">
  Subscribe
</a>
      <style>
      .button5 {
      display: inline-flex;
      align-items: center;
      background: #C06C84;

      border-radius: 5px;
      height: 45px;
      padding: 0 30px;
      color: #fff;

      text-transform: uppercase;
      text-decoration: none;


    }


      </style>
      `,
    content:{type:'button4'}

  },


]
