// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type
import { Input } from 'antd';

const { Search } = Input;

export const InputBlocks = [
  {
    label: '',
    category: 'input',
    media:
    `<div ">
      <div class="wrap">
        <div class="search">
          <input type="text" class="searchTerm">
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
         </button>
        </div>
      </div>
    </div>
      <style>
        @import url(https://fonts.googleapis.com/css?family=Open+Sans);

        body{
        background: #f2f2f2;
        font-family: 'Open Sans', sans-serif;
        }

        .search {
        width: 100%;
        position: relative;
        display: flex;
        }

        .searchTerm {
        width: 100%;
        border: 3px solid #00B4CC;
        border-right: none;
        padding: 5px;
        height: 32px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
        }

        .searchTerm:focus{
        color: #00B4CC;
        }

        .searchButton {
        width: 36px;
        height: 32px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 13px;
        }

        /*Resize the wrap to see the search bar change!*/
        .wrap{
        width: 45%;
        position: absolute;

        left:25%;
        transform: translate(-50%, -50%);
        }
      </style>
      `,
    content:{type:'input1'}

  },
  {
    label: 'test',
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
