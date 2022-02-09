// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const Shapes = [
  {
    label: 'Circle',
    media:
    `
      <div class = "circle">

      </div>

      <style>
      .circle{

        height: 50px;
        width: 50px;
        padding:35px;
        background-color: red;
        border-radius: 50%;

      }
      </style>

    `,

    content:{type:'shape1'}

  },
  {
    label: 'Triangle',
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
    content:{type:'shape2'}

  },


]
