// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type

export const basicBlocks = [
  {
    label: 'Button',
    attributes: {
        class: "gjs-fonts gjs-f-button"
    },
    content: "<button class='btn btn-success'>Button</button>",
    id: "myButtonId"
  },
  {
    media:
    `
      <div class="header">Content</div>

      <style>
        .header{
          color: red
        }
      </style>

    `,
    content:
    `
      <div class = "">
        <div class="header">Content</div>
      </div>

      <style>
        .header{
          color: red
        }
      </style>

    `

  },
]
