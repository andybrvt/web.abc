// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type
import { Input } from 'antd';

const { Search } = Input;

export const InputBlocks = [
  {
    label: 'Input',
    category: 'input',
    media:
    `<div ">
        <div class="text">Button</div>
      </div>
      <style>
        .button{

          padding:20px 55px 20px 55px;
          background: black;
          text-align: center;
        }
        .textx{

          color: white;
        }
      </style>
      `,
    content:{type:'input1'}

  },
  {
    label: 'Search',
    category: 'input',
    media:
    `
    <div> hi</div>
      <Search placeholder="input search text" enterButton="Search" size="large" loading />
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
    content:{type:'input1'}

  },

]
