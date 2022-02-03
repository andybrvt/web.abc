// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const Shapes = [
  {
    label: 'Button',
    media:
    `
      <div class = "button">
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
    content:
    `
      <div class = "circle">

      </div>

      <style>
        .circle{

          background-color:powderblue; border-radius:50%; width:50px; height:50px
        }

      </style>

    `

  },
  {
    label: '',
    media:
    `
    <span class="triangle"> </span>
    <style>
      .triangle{
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 40px solid lightblue;
      }
    </style>

    `,
    content:
    `
      <span class="triangle"> </span>
      <style>
        .triangle{
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 80px solid lightblue;
        }
      </style>

    `

  },


]
