import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './Grapes.css'
import ReactHtmlParser from 'react-html-parser';


import React, {useState, useEffect} from 'react';

export const GrapesjsTest = (props) => {

  const html1 =props.history.location.state.htmlInfo
  const css1 = props.history.location.state.cssInfo
  console.log(css1)

  const [editor, setEditor] = useState(null);

  const testFunction = (e) => {
    console.log('test is here')
  }

  var stringToHTML = function (str) {
  	var parser = new DOMParser();
  	var doc = parser.parseFromString(str, 'text/html');
  	return doc.body;
  };

  const myPlugin = (editor) =>{

    editor.BlockManager.add("my-first-block", {
      label: "Simple block",
      content: '<div class="my-block">This is a simple block</div>',
    })
  }


  const unEditHighLightChildren = (model) => {

    const component = model.components()

    component.forEach(comp => {
      comp.set({"highlightable": false, "editable":false, 'badgable': false})
      unEditHighLightChildren(comp)
    })

  }

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: [myPlugin],
      fromElement: true,
      canvas: {
        styles: css1,
      },
      height: '300px',
      width: 'auto',
      storageManager: false,
      panels: {defaults: []},
      blockManager: {
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
     },

     layerManager: {
       appendTo: '.layers-container'
     },
     // We define a default panel as a sidebar to contain layers
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
          id: 'panel-switcher',
          el: '.panel__switcher',
          buttons: [{
              id: 'show-layers',
              active: true,
              label: 'Layers',
              command: 'show-layers',
              // Once activated disable the possibility to turn it off
              togglable: false,
            }, {
              id: 'show-style',
              active: true,
              label: 'Styles',
              command: 'show-styles',
              togglable: false,
          }],
        }

     ]
     },

     selectorManager: {
          appendTo: '.styles-container'
        },
        styleManager: {
          appendTo: '.styles-container',
          sectors: [{
              name: 'Dimension',
              open: false,
              // Use built-in properties
              buildProps: ['width', 'min-height', 'padding'],
              // Use `properties` to define/override single property
              properties: [
                {
                  // Type of the input,
                  // options: integer | radio | select | color | slider | file | composite | stack
                  type: 'integer',
                  name: 'The width', // Label for the property
                  property: 'width', // CSS property (if buildProps contains it will be extended)
                  units: ['px', '%'], // Units, available only for 'integer' types
                  defaults: 'auto', // Default value
                  min: 0, // Min value, available only for 'integer' types
                }
              ]
            },{
              name: 'Extra',
              open: false,
              buildProps: ['background-color', 'box-shadow', 'custom-prop'],
              properties: [
                {
                  id: 'custom-prop',
                  name: 'Custom Label',
                  property: 'font-size',
                  type: 'select',
                  defaults: '32px',
                  // List of options, available only for 'select' and 'radio'  types
                  options: [
                    { value: '12px', name: 'Tiny' },
                    { value: '18px', name: 'Medium' },
                    { value: '32px', name: 'Big' },
                  ],
               }
              ]
            }]
        },
      });

      editor.on('component:selected', (model) => {
          console.log('New content selected');
          // do your stuff...
          const component = model.components()

          // component.forEach(comp => {
          //   comp.set({"highlightable": false, "editable":false, })
          //
          // })





      });

    
      editor.getComponents().forEach(comp => {
        unEditHighLightChildren(comp)
      })






      // Define commands
      editor.Commands.add('show-layers', {
        getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
        getLayersEl(row) { return row.querySelector('.layers-container') },

        run(editor, sender) {
          const lmEl = this.getLayersEl(this.getRowEl(editor));
          lmEl.style.display = '';
        },
        stop(editor, sender) {
          const lmEl = this.getLayersEl(this.getRowEl(editor));
          lmEl.style.display = 'none';
        },
      });
      editor.Commands.add('show-styles', {
        getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
        getStyleEl(row) { return row.querySelector('.styles-container') },

        run(editor, sender) {
          const smEl = this.getStyleEl(this.getRowEl(editor));
          smEl.style.display = '';
        },
        stop(editor, sender) {
          const smEl = this.getStyleEl(this.getRowEl(editor));
          smEl.style.display = 'none';
        },


  });

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
    setEditor(editor);
  }, [])

  console.log(ReactHtmlParser (`<div className = "test">this is a test</div>`), 'react stuff')
  return(
      <div>

        <div id = 'blocks'></div>

        <div class="panel__top">
          <div class="panel__basic-actions"></div>
          <div class="panel__switcher"></div>


        </div>
        <div class = "editor-row">
          <div class = "editor-canvas">
            <div id='gjs'>

                <h1 data-gjs-selectable="false">Hello world</h1>
                  { ReactHtmlParser (html1) }

            </div>
          </div>

          <div class="panel__right">
           <div class="layers-container"></div>
           <div class="styles-container"></div>


        </div>
        </div>

      </div>
  )

}
