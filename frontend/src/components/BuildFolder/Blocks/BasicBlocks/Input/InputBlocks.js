// NOTES FOR FUTURE: if you want to add your own functions
// to a new block, you have to create your own type
import { Input } from 'antd';

const { Search } = Input;

export const InputBlocks = [
  {
    label: 'Input 1',
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
        height: 25px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
        }

        .searchTerm:focus{
        color: #00B4CC;
        }

        .searchButton {
        width: 36px;
        height: 25px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 12px;
        }

        /*Resize the wrap to see the search bar change!*/
        .wrap{
        // width: 45%;
        // position: absolute;
        // left:25%;

        }
      </style>
      `,
    content:{type:'input1'}

  },
  {
    label: 'Password',
    category: 'input',
    media:
    `
    <div class="container">

<div class="demo-flex-spacer"></div>

<div class="addPadding">
<input class="" type="email" placeholder="What's your email?"></input>
<button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
</div>

    </div>
      <style>
      html { box-sizing: border-box; font-size: 10px; }
      *, *:before, *:after { box-sizing: inherit; }
      body, ul, li  { margin: 0; padding: 0; }
      li { list-style: none; }
      p, h1, h2, h3, h4, h5, h6 { margin-top: 0; }
      a { text-decoration: none; }
      input { border-style: none; background: transparent; outline: none; }
      button { padding: 0; background: none; border: none; outline: none; }

      // some basic page styles
      body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        background-image: radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26);
      }

      addPadding{
        padding:20px;
      }

      // for demo
      h1.demo {
        text-align: center;
        font-size: 2.4rem;
        font-weight: normal;
        margin-bottom: 1rem;
        color: #f5f6ff;
      }
      a.demo {
        text-align: center;
        font-size: 1.6rem;
        font-weight: normal;
        color: rgba(202, 205, 239, 0.8);
        margin-bottom: 3rem;
      }
      .demo-flex-spacer {
        flex-grow: 1;
      }
      .container {
        // background:red;
        border: 1px solid #00B4CC;
      }


    }
      </style>
      `,
    content:{type:'input2'}

  },

]
