import React, { useState, useEffect } from 'react';


export const CustomCopyToClipboard = editor => {

  editor.DomComponents.addType("CopyToClipboard", {

    isComponent: el => {
      return el.id === "CopyToClipboard"
    },

    model: {
      name: 'CopyToClipboard',
      tagName: 'Copy To Clipboard',
      resizable: 'true',
      defaults: {
        attributes: {
          class: 'copy-to-clipboard-button'
        },
        styles: `
          .copy-to-clipboard-button{
            width: 200px;
            height: 40px;
            background: white;
            border-radius: 25px;
            box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
            text-align: center;
            vertical-align: middle;
            line-height: 40px;
            color: gray;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }
          .copy-to-clipboard-button:hover{
            color: black;
          }
        `,
        'script-props': ['id']

      }

    },

    init(){

    },

  })

}
