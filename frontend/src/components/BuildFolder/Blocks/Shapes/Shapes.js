// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const Shapes = [
  {
    label: '',
    media:
    `
      <div class = "circle">

      </div>

      <style>
      .circle{
        padding:20px;
        height: 25px;
        width: 25px;
        background-color: red;
        border-radius: 50%;
        display: inline-block;
      }
      </style>

    `,

    content:{type:'shape1'}

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
    content:{type:'shape2'}

  },


]
