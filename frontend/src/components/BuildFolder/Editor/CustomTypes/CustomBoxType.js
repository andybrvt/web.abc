import React, { Component } from 'react';

export const CustomBoxType = editor => {

  editor.DomComponents.addType("box", {
    isComponent: function(el) {
      return el.tagName === "DIV"
    },
    model: {
      defaults:{
        resizable:'true',
        toolbar: [], 
      }
    }
  })
}
