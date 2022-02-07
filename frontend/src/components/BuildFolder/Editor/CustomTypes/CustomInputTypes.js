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
        font-size: 16px;
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
            .button2{

              padding:20px 55px 20px 55px;
              background: white;
              border: 1px solid black;
              text-align: center;
            }
            .text2{

              color: black;
            }
        `,
        content:
        `<div class = "button2">
            <div class="text2">Button</div>
          </div>`,
      }
    }
  })
}
