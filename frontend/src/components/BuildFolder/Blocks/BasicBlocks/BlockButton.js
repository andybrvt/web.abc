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
  {
    id: 'triangle',
    label: 'Triangle ',
    // Select the component once it's dropped
    select: true,
    // You can pass components as a JSON instead of a simple HTML string,
      // in this case we also use a defined component type `image`
    content: `<span  style="border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 80px solid lightblue; "> </span> `,
    // This triggers `active` event on dropped components and the `image`
    // reacts by opening the AssetManager
    activate: true,
  },

{
  id: 'circle',
  label: '<span  style="background-color:powderblue; border-radius:50%; width:100px; height:50px;  "> tt</span> ',
  // Select the component once it's dropped
  select: true,
  // You can pass components as a JSON instead of a simple HTML string,
    // in this case we also use a defined component type `image`
  content: `<span  style="background-color:powderblue; border-radius:50%; width:50px; height:50px;  "> tt</span> `,
  // This triggers `active` event on dropped components and the `image`
  // reacts by opening the AssetManager
  activate: true,
},
]
