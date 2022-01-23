import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './Grapes.css'
import ReactHtmlParser from 'react-html-parser';


import React, {useState, useEffect} from 'react';

export const GrapesjsTest = () => {

  const [editor, setEditor] = useState(null);


  var stringToHTML = function (str) {
  	var parser = new DOMParser();
  	var doc = parser.parseFromString(str, 'text/html');
  	return doc.body;
  };

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      fromElement: true,
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
    });
    setEditor(editor);
  }, [])

  console.log(stringToHTML("<div>this is a test</div>"))
  return(
      <div>
        <div id='gjs'>
            <h1>Hello world</h1>
            { ReactHtmlParser ("<div>this is a test</div>") }
        </div>
        <div id = 'blocks'></div>
      </div>
  )

}
