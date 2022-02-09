// THIS FILE WILL HOUSE ALL THE CUSTOM BUTTON TYPES HERE
// FOR USES IN EDITOR PLUGINS



// this will be the core of every button
export const InputTypes = editor => {
  var inputType = editor.DomComponents.getType('text');
  editor.DomComponents.addType("input", {
    model: {
      defaults:{
        name: "button",
        resizable:"true",
        // editable:true, ony works on text components
      }
    },
    extend: 'text', // NEED THIS LINE to extend text on button
    isComponent: function (el) {
    if (el.tagName === 'BUTTON')
      return {type: 'button'};
    },
    view: inputType.view.extend({
      events: {
      dblclick: 'onActive',
      input: 'onInput',
      dragstart: 'handleDragStart',
      click: function() {
         /*Click function */
      }
    },
    }),


  })
}

export const Input1 = editor => {
  editor.DomComponents.addType("input1", {
    extend: 'input',
    model: {
      defaults:{
        styles: `
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
        height: 36px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #9DBFAF;
        }

        .searchTerm:focus{
        color: black;
        }

        .searchButton {
        width: 40px;
        height: 36px;
        border: 1px solid #00B4CC;
        background: #00B4CC;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 15px;
        }

        /*Resize the wrap to see the search bar change!*/
        .wrap{
        width: 100%;

        }
        `,
        content:
        `<div ">
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" placeholder="Search...">
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
             </button>
            </div>
          </div>
        </div>
          <style>`,
      }
    }
  })
}

export const Input2 = editor => {
  editor.DomComponents.addType("input2", {
    extend: 'input',
    model: {
      defaults:{
        styles: `
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



        `,
        content:
        `<div class="container">

  <div class="demo-flex-spacer"></div>

  <div class="webflow-style-input">
    <input class="" type="email" placeholder="What's your email?"></input>
    <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
  </div>


</div>`,
      }
    }
  })
}
