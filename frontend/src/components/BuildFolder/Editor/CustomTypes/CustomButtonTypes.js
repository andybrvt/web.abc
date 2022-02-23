// THIS FILE WILL HOUSE ALL THE CUSTOM BUTTON TYPES HERE
// FOR USES IN EDITOR PLUGINS
import './CustomButtonTypes.css'
import React, { Component }  from 'react';

const script = () => {
  console.log('right here')

  alert('this is an alert')

}
// this will be the core of every button
export const CoreButtonType = editor => {

  // console.log(editor.DomComponents.getComponent('function* () {

  var buttonText = editor.DomComponents.getType('text');

  editor.DomComponents.addType("button", {
    model: {
      defaults:{
        script,
        myprop1: 'value1',
        myprop2: '10',
        name: "button",
        resizable:"true",
        dmode: 'absolute',
        toolbar: [{
                    attributes: {class: 'fa fa-arrows'},
                    command: 'tlb-move',
                  },{
                    attributes: {class: 'fa fa-clone'},
                    command: 'tlb-clone',
                  },],
        traits: [
        {
          type: 'select',
          name: 'myprop1',
          changeProp: true,
          options: [
            { value: 'value1', name: 'Value 1' },
            { value: 'value2', name: 'Value 2' },
          ],
        }, {
          type: 'number',
          name: 'myprop2',
          changeProp: true,
        }, {
          name: 'onClick',

        }
      ],

      // 'script-props': ['myprop1', 'myprop2'],


    },
      init(){
        console.log('run this script here')
      }
    },

    isComponent: function (el) {
      return el.id === 'button'
    },

    extend: 'text', // NEED THIS LINE to extend text on button


    view: buttonText.view.extend({
      events: {
        dblclick: 'onActive',
        input: 'onInput',
        dragstart: 'handleDragStart',
        click:  function(e) {

        }
    },
    }),


  })

}

export const ButtonType1 = editor => {
  editor.DomComponents.addType("button1", {
    extend: 'button',
    isComponent: function(el){
      if(el.id ==="button1"){
        return {type: 'button1'}
      }
    },
    events: {


    },
    model: {
      defaults:{
        styles: `
            .button{
              display: inline-flex;
              align-items: center;
              background: black;
              padding: 0 50px;
              height: 45px;
            }
            .text{
              color: white;
            }
        `,
        content:
        `<div class = "button">
            <div class="text">Button</div>
          </div>`,
      }
    }
  })
}

export const ButtonType2 = editor => {
  editor.DomComponents.addType("button2", {
    extend: 'button',
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

export const ButtonType3 = editor => {
  editor.DomComponents.addType("button3", {
    extend: 'button',
    model: {
      defaults:{
        styles: `
            .button3{
              border-radius: 30px;
              padding:20px 55px 20px 55px;
              background: #6CB4EE;
              text-align: center;
            }
            .text3{

              color: white;
            }
        `,
        content:
        `<div class = "button3">
            <div class="text3">Button</div>
          </div>`,
      }
    }
  })
}
export const ButtonType4 = editor => {
  editor.DomComponents.addType("button4", {
    extend: 'button',
    model: {
      defaults:{
        styles: `
            .button4{
              border-radius: 10px;
              padding:20px 55px 20px 55px;
              background: #6CB4EE;
              text-align: center;
              display: flex;
              flex-direction: row;
              color: white;
              font-size: 25px;
            }
            .text4{
              margin-right: 10px;
              color: white;
            }
        `,
        content:
        `<div class = "button4">
            <i class="fas fa-arrow-right"></i>

          </div>`,
      }
    }
  })
}

export const ButtonType5 = editor => {
  editor.DomComponents.addType("button5", {
    extend: 'button',
    model: {
      defaults:{
        styles: `
        .button5 {
        display: inline-flex;
        align-items: center;
        background: #C06C84;

        border-radius: 5px;
        height: 45px;
        padding: 0 30px;
        color: #fff;

        text-transform: uppercase;
        text-decoration: none;


      }
        `,
        content:
        `<div class="button5">
            Subscribe
          </div>`,
      }
    }
  })
}
