/*
  This will be the real editor to edit stuff directly
*/

import React, { useState, useEffect, useRef } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard  } from '@fortawesome/free-solid-svg-icons'
import {Canvas} from '../../TestingFolder/ReactDesignerTest';
import {
  ButtonType1,
  ButtonType2,
  ButtonType3,
  ButtonType4,
  ButtonType5,
  CoreButtonType } from './CustomTypes/CustomButtonTypes';
import {
  UpdateTextType,
  Header1TextType,
  Header2TextType,
  Header3TextType,
  Header4TextType,
  Header5TextType,
  Header6TextType,
  ParagraphTextType
} from './CustomTypes/CustomTextTypes';
import {
  ShapeType,
  Circle1,
  Triangle2
} from './CustomTypes/CustomShapeTypes';
import {
  LineTypes,
  Line1,
  Line2,
} from './CustomTypes/CustomLineTypes';
import {
  InputTypes,
  Input1,
  Input2,
} from './CustomTypes/CustomInputTypes';
import {
  RowCore,
  ColumnCore,
} from './CustomTypes/CustomTemplateTypes';
import {
  CustomLinkText1
} from './CustomTypes/CustomHeaderNavTypes';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import grapesjsStyleBg from 'grapesjs-style-bg';
import image1 from '../../../images/image3.png';

const PLUGINS = [

  grapesjsBlocksBasic,
  CoreButtonType,
  ButtonType1,
  ButtonType2,
  ButtonType3,
  ButtonType4,
  ButtonType5,

  UpdateTextType,
  Header1TextType,
  Header2TextType,
  Header3TextType,
  Header4TextType,
  Header5TextType,
  Header6TextType,
  ParagraphTextType,

  ShapeType,
  Circle1,
  Triangle2,

  LineTypes,
  Line1,
  Line2,

  InputTypes,
  Input1,
  Input2,

  RowCore,
  ColumnCore,
  grapesjsStyleBg,

  CustomLinkText1
]

const translatedItems = [
  'mTemplate1',
  'mTemplate2',
  'mTemplate3',
  'template1',
  'template2',
  'template3'

]
export const Editor = (props) => {

  const [editorMain, setEditor] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [toolsCategory, setToolsCategory] = useState("");



  const useOutSideAlerter = (ref) => {
    useEffect(() => {
      function handleClickOutside(event){
        const className = event.srcElement.className
        if (ref.current && !ref.current.contains(event.target) && typeof className ==="string") {


            if(className.includes("gjs-frame")){
              setVisibility(false)
            }

        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.addEventListener("mousedown", handleClickOutside)
      }
    }, [ref]);
  }

  const wrapperRef  = useRef(null);
  useOutSideAlerter(wrapperRef)

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: 1,
      allowScripts: 1,
      dragMode: 'translate',
      height: '95vh',
      width: 'auto',
      plugins:PLUGINS,
      autosave: true,
      pluginsOpts: {
        grapesjsStyleBg:{}
       },
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
      assetManager:{
        assets:[
          'http://placehold.it/350x250/78c5d6/fff/image1.jpg',
           // Pass an object with your properties
           {
             type: 'image',
             src: image1,
             height: 350,
             width: 250,
             name: 'displayName1'
           },
           {
             // As the 'image' is the base type of assets, omitting it will
             // be set as `image` by default
             src: 'http://placehold.it/350x250/79c267/fff/image3.jpg',
             height: 350,
             width: 250,
             name: 'displayName2'
           },
        ]
      },
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
      }

    })


    editor.StyleManager.addProperty('decorations', {
      name: 'Gradient',
      property: 'background-image',
      type: 'gradient',
      defaults: 'none'
    });




    editor.on("block:drag:start", (block, obj) => {
      console.log(block, obj)
      setVisibility(false)

      if(translatedItems.includes(block.id)){
        console.log('template here')
        editor.setDragMode("translate")
      } else {
        editor.setDragMode("absolute")
      }
    })

    editor.runCommand('sw-visibility');
    editor.addComponents(`<script src="https://kit.fontawesome.com/2638379ee9.js" crossorigin="anonymous"></script>`);

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
    editor.on('component:selected', model =>{
      // editor.addComponents('<div class="popoverDiv">New component</div>')
      // editor.setStyle('.popoverDiv{ top:200}');
      // console.log("model selected")
    })
    editor.on('run:export-template', () => console.log('After the command run'));
    editor.on('abort:export-template', () => console.log('Command aborted'));

    editor.on('load', () => {
      const fontProperty = editor.StyleManager.getProperty('typography', 'font-family')
      const typographySector = editor.StyleManager.getSector('Typography');

    })
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

  // mechanics for opening and closing the drawer
  const changeDrawerVisibility = (category) => {

    if(visibility === false){
      setToolsCategory(category)
      setVisibility(true)
    } else{
      if(category !== toolsCategory){
        setToolsCategory(category)
        if(!visibility){
          setVisibility(true)
        }
      } else {
        setToolsCategory('')
        setVisibility(false)
      }
    }

    // if(visibility){
    //   setVisibility(false)
    // } else {
    //   setVisibility(true)
    // }
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
      <div class="row">
        <div class = "firstColumn">
          <div className = "mainButtons">
            <div className = "mainButtonHolder">
             <Button
               onClick = {() => changeDrawerVisibility("basic")}
               type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">

              <Button
                onClick = {() => changeDrawerVisibility("shapes")}
                type="primary" shape="circle" icon={<FontAwesomeIcon style={{marginRight:5}} icon={faShapes} />} size="large" />
            </div>

            <div className = "buttonHolder">
              <Button
                onClick = {() => changeDrawerVisibility("pens")}
                type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">
              <Button
                onClick = {() => changeDrawerVisibility("colors")}
                type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">
              <Button
                onClick = {() => changeDrawerVisibility("input")}
                type="primary" shape="circle" icon={<FontAwesomeIcon icon={faKeyboard} />} size="large" />
            </div>


            <div className = "buttonHolder">
              <Button
                // onClick = {() => changeDrawerVisibility("colors")}
                shape="circle" icon={<FontAwesomeIcon icon={faFont} />} size="large" />
            </div>


            <div className = "buttonHolder">
              <Button
                // onClick = {() => changeDrawerVisibility("colors")}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faCircle} />} size="large" />
            </div>


          </div>

        </div>

        <div ref = {wrapperRef}>
          <Drawer  visibility = {visibility}>
            <BlocksContainer editor = {editorMain} category ={toolsCategory}/>
          </Drawer>

        </div>

        <div class="column">
          {/*
            <Canvas />
            */}
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
