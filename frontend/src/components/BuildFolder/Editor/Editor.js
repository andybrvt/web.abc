/*
  This will be the real editor to edit stuff directly

*/


import React, { useState, useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './Editor.css'

export const Editor = (props) => {

  const [editor, setEditor] = useState(null);


  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      width: 'auto',
      dragMode: "absolute",
      // this is the local storage
      storageManager: {
        id: 'gjs-', // just the identifier that you will be using
        type: 'local', // type of storage
        autosave: true,
        autoload: true,
        stepsBeforeSave: 1, // how mnay changes are neccary before save happens,
        storeComponents: true, // enable/disable storing of componets in JSON format
        storeStyles: true,
        storeHtml: true,
        storeCss: true
      },
      // // this is the remote storage (probally gonna use this one here)
      // storageManager: {
      //   type: 'remote',
      //   stepsBeforeSave: 10,
      //   urlStore: 'http://store/endpoint',
      //   urlLoad: 'http://load/endpoint' // django endpoint would go here
      //   params: {},
      //   headers: {}
      // },
      panels: {
        defaults: [
          {
          id: 'layers',
          el: '.panel__right',
          // Make the panel resizable
          resizable: {
            maxDim: 350,
            minDim: 200,
            tc: 0, // Top handler
            cl: 1, // Left handler
            cr: 0, // Right handler
            bc: 0, // Bottom handler
            // Being a flex child we need to change `flex-basis` property
            // instead of the `width` (default)
            keyWidth: 'flex-basis',
          },
        },

        {
          id:'panel-switcher', // id of the element, honestly be any becuase you are adding shit in
          el: '.panel__switcher', // this is the element you want to put it in
          buttons:[
            {
              id: 'show-layers',
              active: true, // gotta set this one too to active only (like the button is clicked on)
              label: 'Layers',
              command: "show-layers", // you can make custom commands and put them here
              togglable: false,
            },
            {
              id: 'show-style',
              active: true, // means when the button is active then the thing runs
              label: 'Styles',
              command: 'show-styles',
              togglable: false
            },
            {
              id: "show-traits",
              active: true,
              label: 'Traits',
              command: 'show-traits',
              togglable: false
            }
          ]
        },
        {
          id: 'panel-devices', // the id you want to give
          el: '.panel__devices', // name of the div element you trying to put it into
          buttons: [
            {
              id: 'device-desktop',
              label: "D",
              command: 'set-device-desktop', // again this can be called any, its just a function call
              active: true,
              togglable: false
            },
            {
              id: 'device-mobile',
              label: 'M',
              command: 'set-device-mobile',
              togglable: false
            }
          ]
        },

      ]
      },
      traitManager: {
        appendTo: '.traits-container'
      },
      selectorManager: {
        // if it is a class you would do .NAMEH
        appendTo: '.styles-container'
      },
      styleManager: {
        appendTo: '.styles-container',
        sectors: [
          {
            name: 'Dimension',
            open: false,
            // build props is any css property
            buildProps: ['width', 'min-height', 'padding', 'color'],
            // this to modify and adjust
            properties: [
              {
                // You can have different types of inputsto change the
                // dimention
                type: 'integer',
                name: 'The width',
                property: 'width', // will extend build props if in it
                units: ['px', '%'],
                defaults: 'auto',
                min: 0,
              },

            ]
          },

          // you gotta put it seperately
          {
            name: 'Extra',
            open: false,
            buildProps: ['background-color', 'box-shadow','custom-prop'],
            // custom-prop --> you can show it here in properties
            properties:[
              {
                id: 'custom-prop',
                name: 'Custom Label',
                property: 'font-size',
                type: 'select',
                defaults: '32px',
                // List of options available only for select and radio types
                option: [
                  {value: '12px', name: 'Tiny'},
                  {value: '18px', name: 'Medium'},
                  {value: '32px', name: 'Big'}
                ]
              }
            ]
          }

        ]
      },
      layerManager:{
        appendTo: '.layers-container'
      },
      deviceManager:{ // the width and see what it looks like on different devices

        devices:[
          {
            name: 'Desktop',
            width: '', //default size
          }, {
            name: 'Mobile',
            width: '320px', // value used on canvas width
            widthMedia: '480px', // this value will be used in css@media
          }
        ]

      },
      blockManager: {
        // if it is id then you would use #NAME
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', // id is mandatory
            label: '<b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class:'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          }, {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          }, {
            id: 'image',
            label: 'Image',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
            // in this case we also use a defined component type `image`
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          }
        ]
      }

    })


    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice("Desktop")
    });
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice("Mobile")
    })
    editor.Commands.add("show-layers", {
      // editor.getContainer gets the container you listed in init
      // closest will get the closes div element going upward the tree
      getRowEl(editor){return editor.getContainer().closest('.editor-row');},
      // querySelector gets a element inside the row given the name
      getLayersEl(row){return row.querySelector(".layers-container")},

      // get the style container and then show it because you put display as ''
      run(editor, sender){
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = "";
      },
      stop(editor, sender){
        const lmEl = this.getLayersEl(this.getRowEl(editor));
        lmEl.style.display = "none";
      }

    })

    console.log(editor.StyleManager.getBuiltInAll())

    editor.Commands.add('show-styles', {
      // editor.getContainer gets the container you listed in init
      // closest will get the closes div element going upward the tree
      getRowEl(editor){return editor.getContainer().closest('.editor-row');},
      // querySelector gets a element inside the row given the name
      getStyleEl(row){return row.querySelector(".styles-container")},

      // get the style container and then show it because you put display as ''
      run(editor, sender){
        const lmEl = this.getStyleEl(this.getRowEl(editor));
        lmEl.style.display = "";
      },
      stop(editor, sender){
        const lmEl = this.getStyleEl(this.getRowEl(editor));
        lmEl.style.display = "none";
      }
    })

    editor.Commands.add("show-traits", {
      getTraitsEl(editor){
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector(".traits-container");
      },
      run(editor, sender){
        this.getTraitsEl(editor).style.display = "";
      },
      stop(editor, sender){
        this.getTraitsEl(editor).style.display = "none";

      }


    })

    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
    });
    editor.Panels.addPanel({
      id: 'basic-actions',
      el: '.panel__basic-actions',
      buttons: [
        {
          id: 'visibility',
          active: true, // active by default
          className: 'btn-toggle-borders',
          label: '<u>B</u>',
          command: 'sw-visibility', // Built-in command
        }, {
          id: 'export',
          className: 'btn-open-export',
          label: 'Exp',
          command: 'export-template',
          context: 'export-template', // For grouping context of buttons from the same panel
        }, {
          id: 'show-json',
          className: 'btn-show-json',
          label: 'JSON',
          context: 'show-json',
          command(editor) {
            editor.Modal.setTitle('Components JSON')
              .setContent(`<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`)
              .open();
          },
        }
      ],
    });

    editor.on('run:export-template:before', opts => {
      console.log('Before the command run');
      if (0 /* some condition */) {
        opts.abort = 1;
      }
    });
    editor.on('run:export-template', () => console.log('After the command run'));
    editor.on('abort:export-template', () => console.log('Command aborted'));

  },[])


  return(
    <div>

      <div class="panel__top">
          <div class="panel__basic-actions"></div>
          <div class="panel__devices"></div>
          <div class="panel__switcher"></div>
      </div>

      <div class="editor-row">
        <div class="editor-canvas">
          <div id = "gjs"></div>
        </div>
        <div class="panel__right">
          <div class="layers-container"></div>
          <div class="styles-container"></div>
          <div class="traits-container"></div>

        </div>
      </div>

      <div id="blocks"></div>


    </div>


  )
}
