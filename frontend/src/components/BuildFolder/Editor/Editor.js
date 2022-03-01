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
import {TraitsContainer} from '../Traits/TraitsContainer';
import {Drawer} from '../../UsefulComponents/Drawer';
import ProfileDropDown from './ProfileDropDown';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, Dropdown, Button as AntButton, Space, Popover as AntdPopover, Divider} from 'antd';
import { LockOutlined, PlusOutlined, RadarChartOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { Input, Form, List, Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShapes, faCircle, faFont, faKeyboard, faPlay  } from '@fortawesome/free-solid-svg-icons'
import {IconButtonCanvas} from '../../TestingFolder/ReactDesignerTest';
import { Button as Button, ButtonGroup, Box, Tooltip, useColorModeValue, Text, Stack, IconButton } from '@chakra-ui/react'
import { BlockAttribute } from '../BlockAttributes/BlockAttribute';
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
import {
  CustomBoxType
} from './CustomTypes/CustomBoxType';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import grapesjsStyleBg from 'grapesjs-style-bg';
import image1 from '../../../images/image3.png';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import axios from 'axios';

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

  CustomLinkText1,

  CustomBoxType
]



const translatedItems = [
  'mTemplate1',
  'mTemplate2',
  'mTemplate3',
  'template1',
  'template2',
  'template3',
  'info1',
  'info2',
  "info3",
  "info4",
  "info5",
  "info6",
  "header1",
  "header2",
  "header3",
  "footer1"
]
export const Editor = (props) => {

  const [preview, setPreview] =useState(false);

  const [editorMain, setEditor] = useState(null);
  const [visibility, setVisibility] = useState(false);
  const [toolsCategory, setToolsCategory] = useState("");

  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [popOver, setPopOver]= useState(true);
  const [TextCssVariable, setTestCssVariable]= useState(null);
  const [BlockClickType, setBlockClickType]= useState(null);
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
  function testCoord (xVal, yVal, widthVal, heightVal){
    setCurrentX(xVal+100)
    setCurrentY(yVal)
    setCurrentWidth(widthVal)
    setCurrentHeight(heightVal)
    setTestCssVariable({
            position: "absolute",
            left: xVal,
            top: yVal,

            color: "red",
          })
  }
  const wrapperRef  = useRef(null);
  useOutSideAlerter(wrapperRef)

  useEffect(() => {

    const websiteId = props.history.location.state.websiteId
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
      // storageManager: {
      //   id: 'gjs-', // just the identifier that you will be using
      //   type: 'local', // type of storage
      //   autosave: true,
      //   autoload: true,
      //   stepsBeforeSave: 1, // how mnay changes are neccary before save happens,
      //   storeComponents: true, // enable/disable storing of componets in JSON format
      //   storeStyles: true,
      //   storeHtml: true,
      //   storeCss: true
      // },
      // // this is the remote storage (probally gonna use this one here)
      storageManager: {
        type: 'remote',
        stepsBeforeSave: 3,
        urlStore: `${global.API_ENDPOINT}/builder/saveWebsite/${websiteId}`,
        urlLoad: `${global.API_ENDPOINT}/builder/loadWebsite/${websiteId}`, // django endpoint would go here
        contentTypeJson: true,
        params: {
        },
        headers: {
          "Content-Type": "application/json",
        }
      },
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
          {/*
          id: 'layers',
          el: '.panel__right',
          // Make the panel resizable
          resizable: {
            maxDim: 700,
            minDim: 200,
            tc: 0, // Top handler
            cl: 1, // Left handler
            cr: 0, // Right handler
            bc: 0, // Bottom handler
            // Being a flex child we need to change `flex-basis` property
            // instead of the `width` (default)
            keyWidth: 'flex-basis',
          },
        */},

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
              id: 'Traits',
              active: true,
              label: "Traits",
              command: 'show-traits',
              togglable: false
            },
            {
              id: 'alert-button',
              className: 'btn-alert-button',
              label: 'Clear',
              command(editor) {
                // editor.BlockManager.getAll().reset();
                editor.runCommand('core:canvas-clear');
              }

            },

            {
              id: 'preview',
              className: 'btn-alert-button',
              label: 'Preview',
              command(editor) {
                console.log('is this the preview')
                // editor.BlockManager.getAll().reset();
                editor.runCommand('open-live-preview');
              }
            },
            {
              id: 'export',
              className: 'btn-alert-button',
              label: "Export",
              command(editor){
                editor.runCommand("export-template")
              }
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
      traitManager: {
       appendTo: '.traits-container',
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

    editor.runCommand('sw-visibility');
    editor.StyleManager.addProperty('decorations', {
      name: 'Gradient',
      property: 'background-image',
      type: 'gradient',
      defaults: 'none'
    });

    editor.on("run:preview", () => {
      // editor.stopCommand("sw-visibility")
      const canvas = editor.Canvas.getElement();
      const canvasS = canvas.style;
      canvasS.left = '770px';

      // setPreview(true)
    })

    editor.on("stop:preview", () => {
      // editor.runCommand("sw-visibility")
      // setPreview(false)
    })


    editor.on("block:drag:start", (block, obj) => {
      setVisibility(false)

      if(translatedItems.includes(block.id)){
        editor.setDragMode("translate")
      } else {
        editor.setDragMode("absolute")
      }
    })

    editor.addComponents(`<script src="https://kit.fontawesome.com/2638379ee9.js" crossorigin="anonymous"></script>`);

    // CHANGE THIS LATER
    editor.Commands.add("show-layers", {
      // editor.getContainer gets the container you listed in init
      // closest will get the closes div element going upward the tree
      getRowEl(editor){return editor.getContainer().closest('.editorRow');},
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

    editor.Commands.add('open-live-preview', {
      run(editor, sender){
        const html = editor.getHtml();
        const css = editor.getCss();
        const js = editor.getJs();
        let formData = new FormData()
        formData.append("css", css)
        formData.append('js', js)

        axios.post(`${global.API_ENDPOINT}/builder/uploadCss`, formData)
        .then(res=> {

          props.history.push('/previewPage', {
            html: html,
            css: css,
            js: js
          })

        })


      }

    })

    // CHANGE THIS LATER
    editor.Commands.add('show-styles', {
      // editor.getContainer gets the container you listed in init
      // closest will get the closes div element going upward the tree
      getRowEl(editor){return editor.getContainer().closest('.editorRow');},
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

    editor.Commands.add('show-traits', {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest('.editorRow');
        return row.querySelector('.traits-container');
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });

    editor.on('run:export-template:before', opts => {
      console.log('Before the command run');
      if (0 /* some condition */) {
        opts.abort = 1;
      }
    });

    editor.on('component:selected', (block, obj) =>{
      // console.log(block._previousAttributes.type)
      setBlockClickType(block._previousAttributes.type)
      // console.log(editor.Canvas.getElementPos(editor.getSelected().getEl()))
      // console.log(editor.Canvas.getElementPos(editor.getSelected().getEl()).top)
      // console.log(editor.Canvas.getElementPos(editor.getSelected().getEl()).left)
      // if(obj.event) {
      //   if(obj.event.clientX!=null || obj.event.clientY!=null ) {
      //     // console.log(obj.event.clientX)
      //
      //     // console.log(obj.event.clientY)
      //     testCoord(
      //      editor.Canvas.getElementPos(editor.getSelected().getEl()).left,
      //      editor.Canvas.getElementPos(editor.getSelected().getEl()).top,
      //      obj.event.srcElement.clientWidth, obj.event.srcElement.clientHeight
      //     )
      //   }
      // }

      //HERE IS A WAY TO SET THE JAVASCRIPT ON CLICK FUNCTION
      // GONNA PUT THIS IN A FUNCTION CALL LATER
      // const target = editor.getSelected()
      // const targetId = target.getId()
      //
      // target.set("script", `
      //   function script(props) {
      //     var element = document.getElementById("${targetId}");
      //     element.addEventListener("click", function () {
      //       console.log('this works')
      //     });
      //   }
      //
      // `)


    })

    editor.on("storage:store", function(e){
      console.log('store',e)


    })
    editor.on("storage:load", function(e){
      console.log('load',e)
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
      )
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

  const showPreview = () => {
    console.log('open preview')
    editorMain.runCommand('open-live-preview');

  }

  const clearCanvas = () => {
    editorMain.runCommand('core:canvas-clear')
  }

  const storeEditor = () => {

    // editorMain.store()
    // get css doing the save file --> styles in there should include everything


    const formData =  new FormData()
    formData.append("publicKey", 1)
    const allPages = editorMain.Pages.getAll();
    formData.append("numPages", allPages.length)
    formData.append("name", 'some test name') //Change this later
    const htmlAll = allPages.map((p, index) => {
      console.log(p.getName())
      var pageName = p.getName()
      var pageComp = p.getMainComponent()
      var html = editorMain.CodeManager.getCode(pageComp, "html")
      var css = editorMain.CodeManager.getCode(pageComp, 'css')
      var js = editorMain.CodeManager.getCode(pageComp, "js")

      var pageDict = {
        "name": pageName,
        'html': html,
        'css': css,
        'js': js
      }
      formData.append(index, JSON.stringify(pageDict))
      // temp variable


    })


    axios.post(`${global.API_ENDPOINT}/builder/saveWebPreview`, formData)



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

          <div className = "rightHeader">

            <div class="rightHeaderProfile">
              <Tooltip label="Preview" aria-label='A tooltip'>
                <IconButton
                  onClick={showPreview}
                  size="sm" aria-label='Search database'  icon={<FontAwesomeIcon style={{color:'#1890ff'}} icon={faPlay} />}  />
              </Tooltip>

              <Divider style={{height:30, marginRight:25}} type="vertical"/>
              <div>
                <ProfileDropDown/>

              </div>
              <Divider style={{height:30}} type="vertical"/>
                <Button style={{marginLeft:10, marginRight:10}} size="sm" colorScheme='blue' variant='solid'>
                  Publish
                </Button>
          </div>

          </div>
      </div>
      <div class="editorRow">
        <div class = "firstColumn">
          <div className = "mainButtons">
            <div className = "mainButtonHolder">
             <AntButton
               onClick = {() => changeDrawerVisibility("basic")}
               type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">

              <AntButton
                onClick = {() => changeDrawerVisibility("shapes")}
                type="primary" shape="circle" icon={<FontAwesomeIcon style={{marginRight:5}} icon={faShapes} />} size="large" />
            </div>

            <div className = "buttonHolder">
              <AntButton
                onClick = {() => changeDrawerVisibility("pens")}
                type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">
              <AntButton
                onClick = {() => changeDrawerVisibility("colors")}
                type="primary" shape="circle" icon={<PlusOutlined />} size="large" />
            </div>

            <div className = "buttonHolder">
              <AntButton
                onClick = {() => changeDrawerVisibility("input")}
                type="primary" shape="circle" icon={<FontAwesomeIcon icon={faKeyboard} />} size="large" />
            </div>


            <div className = "buttonHolder">
              <AntButton
                // onClick = {() => changeDrawerVisibility("colors")}
                shape="circle" icon={<FontAwesomeIcon icon={faFont} />} size="large" />
            </div>


            <div className = "buttonHolder">
              <AntButton
                // onClick = {() => changeDrawerVisibility("colors")}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faCircle} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() => showPreview()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faCircle} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() => clearCanvas()}
                shape="circle"
                 icon={<FontAwesomeIcon icon={faCircle} />} size="large" />
            </div>
            <div className = "buttonHolder">
              <AntButton
                onClick = {() => storeEditor()}
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

          <div id = "gjs"></div>
        </div>


        <BlockAttribute type={BlockClickType}/>


        {/*
          <div id = "panelRight" class= {`panel__right`}>
            <div class= "panel__top">
              <div class="panel__switcher"></div>
            </div>

            <LayersContainer editor = {editorMain}/>
            <StylesContainer editor = {editorMain} />
            <TraitsContainer editor = {editorMain} />
          </div>


          */}


      </div>



    </div>


  )
}
