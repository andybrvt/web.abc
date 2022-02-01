/*
  This will be the real editor to edit stuff directly

*/


import React, { useState, useEffect } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './Editor.css'
import {BlocksContainer} from '../Blocks/BlocksContainer';
import {LayersContainer} from '../Layers/LayersContainer';
import {StylesContainer} from '../Styles/StylesContainer';
import {PagesContainer} from '../Pages/PagesContainer';
import {Drawer} from '../../UsefulComponents/Drawer';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, Dropdown, Button, Space } from 'antd';
import { LockOutlined, PlusOutlined, RadarChartOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { Input, Form, List, Avatar } from 'antd';
export const Editor = (props) => {

  const [editorMain, setEditor] = useState(null);
  const [visibility, setVisibility] = useState(false);




  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
      dragMode: "absolute",
      width: 'auto',
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
              command: "show-layers", //PUT BACK LATER
              togglable: false,
            },
            {
              id: 'show-style',
              active: true, // means when the button is active then the thing runs
              label: 'Styles',
              command: 'show-styles', // PUT BACK LATER
              togglable: false
            },


              {
                id: 'alert-button',
                className: 'btn-alert-button',
                label: 'Clear canavas',
                command(editor) {
                  // editor.BlockManager.getAll().reset();
                  editor.runCommand('core:canvas-clear');
                }
              },

            {
              id: "clearCanvas",
              active: true,
              label: 'Clear',
              command: 'show-traits', // PUT BACK LATER
              togglable: false
            },


          ]
        },


      ]
      },
      pageManager: {
        pages: [
          {
            id: 'page-1',
            name: 'Page 1',
            component: '<div id="comp1">Page 1</div>',

          },
          {
            id: 'page-2',
            name: 'Page 2',
            component: '<div id="comp1">Page 2</div>',
          },
           {
             id: 'page-3',
             name: 'Page 3',
             component: '<div id="comp1">Page 3</div>',
            }
        ]
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
            label: '<div>Sections</div>', // You can use HTML/SVG inside labels
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
          },
          {
            id: 'h4Block',
            label: 'h4',
            // Select the component once it's dropped
            select: true,
            content: `
              <h4>This is a simple title</h4>

            `,
            activate: true,
          },
          {
            id: 'clearCanvas',
            label: 'Clear Canvas',
            // Select the component once it's dropped
            select: false,
            // You can pass components as a JSON instead of a simple HTML string,
              // in this case we also use a defined component type `image`
            content: ` `,
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
            activate: true,
          },
          {
            id: 'circle',
            label: '<span  style="background:white; border-radius:50%;width:50px; height:50px;  "> tt</span> ',
            // Select the component once it's dropped
            select: true,
            // You can pass components as a JSON instead of a simple HTML string,
              // in this case we also use a defined component type `image`
            content: `<span  style="background:white; border:2px solid black;  border-radius:50%;  width:50px; height:50px;  "> </span> `,
            // This triggers `active` event on dropped components and the `image`
            // reacts by opening the AssetManager
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
      }

    })

    editor.setDevice("Desktop")
    console.log(editor.getDevice())

    // editor.Commands.add('set-device-desktop', {
    //   run: editor => editor.setDevice("Desktop")
    // });
    // editor.Commands.add('set-device-mobile', {
    //   run: editor => editor.setDevice("Mobile")
    // })

    // CHANGE THIS LATER
    editor.Commands.add("show-layers", {
      // editor.getContainer gets the container you listed in init
      // closest will get the closes div element going upward the tree
      getRowEl(editor){return editor.getContainer().closest('.row');},
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


    // CHANGE THIS LATER
    editor.Commands.add('show-styles', {
      // editor.getContainer gets the container you listed in init
      // closest will get the closes div element going upward the tree
      getRowEl(editor){return editor.getContainer().closest('.row');},
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


    editor.Panels.addPanel({
      id: 'panel-top',
      el: '.panel__top',
      buttons: [
   {
     id: 'alert-button',
     className: 'btn-alert-button',
     label: 'Click my butt(on)',
     command(editor) { alert('Hello World'); }
   }
 ]
    });
    // editor.Panels.addPanel({
    //   id: 'basic-actions',
    //   el: '.panel__basic-actions',
    //   buttons: [
    //     {
    //       id: 'visibility',
    //       active: true, // active by default
    //       className: 'btn-toggle-borders',
    //       label: '<u>B</u>',
    //       command: 'sw-visibility', // Built-in command
    //     }, {
    //       id: 'export',
    //       className: 'btn-open-export',
    //       label: 'Exp',
    //       command: 'export-template',
    //       context: 'export-template', // For grouping context of buttons from the same panel
    //     }, {
    //       id: 'show-json',
    //       className: 'btn-show-json',
    //       label: 'JSON',
    //       context: 'show-json',
    //       command(editor) {
    //         editor.Modal.setTitle('Components JSON')
    //           .setContent(`<textarea style="width:100%; height: 250px;">
    //             ${JSON.stringify(editor.getComponents())}
    //           </textarea>`)
    //           .open();
    //       },
    //     }
    //   ],
    // });

    editor.on('run:export-template:before', opts => {
      console.log('Before the command run');
      if (0 /* some condition */) {
        opts.abort = 1;
      }
    });
    editor.on('run:export-template', () => console.log('After the command run'));
    editor.on('abort:export-template', () => console.log('Command aborted'));


    setEditor(editor)
  },[])

  const menu = (
        <Menu className = "menuContianer">
          <Menu.Item >
            <div className = "menuContianerText">
                1st menu item
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className = "menuContianerText">
                2st menu item
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className = "menuContianerText">
                3st menu item
            </div>
          </Menu.Item>
        </Menu>
      );

  const changeDrawerVisibility = () => {
    console.log('change visiblity')
    if(visibility){
      setVisibility(false)
    } else {
      setVisibility(true)
    }
  }


  return(
    <div>


      <div className = "editorHeaderContainer">
          <div class="editorHeader">
            <div class="logoFont">web.abc</div>
          </div>
          <div className = "pageDropContainer">
            <PagesContainer editor = {editorMain} />
          </div>
          <div className = "test2">
            <Avatar icon={<UserOutlined />}>
              0x086a842...
            </Avatar>

          </div>
      </div>


          {/*



            <div class="panel__devices"></div>

            <div id="panel__basic-actions"></div>



          */}





      <div class="row">




        <div class = "firstColumn">
          <div className = "mainButtons">
            <div className = "mainButtonHolder">
             <Button
               onClick = {() => changeDrawerVisibility()}
               type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">
              <RadarChartOutlined />
            </div>

          </div>

        </div>

        <Drawer visibility = {visibility}>
          <BlocksContainer editor = {editorMain}/>
        </Drawer>

        {/*
          <div class="firstColumn" >
          </div>

          */}





        <div class="column">
          <div id = "gjs"></div>
        </div>

        <div class="panel__right">
          <div class= "panel__top">
            <div class="panel__switcher"></div>
          </div>
          <LayersContainer editor = {editorMain}/>
          <StylesContainer editor = {editorMain} />
        </div>


      </div>



    </div>


  )
}
