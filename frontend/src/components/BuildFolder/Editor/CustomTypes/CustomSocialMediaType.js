import React, { useState, useEffect } from 'react';


export const CustomSocialMediaFooter = editor => {


  editor.DomComponents.addType("SocialMediaFooter", {


    isComponent: el=> {
      return el.id === "SocialMediaFooter"
    },

    model: {
      name: "SocialMediaFooter",
      tagName: 'SocialMediaFooter',
      resizable: 'true',
      defaults: {
        components: model => {

          return(
            <div>
              <i class="fab fa-facebook"></i>
            </div>
          )
        }
      },

      init(){

      },
      view: {
        onRender(){

        }
      }




    }

  })
}
