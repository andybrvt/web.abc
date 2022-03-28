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

        attributes: {class: 'social-media-footer-block'},
        styles: `
          .social-media-footer-block{
            position: relative;
          }
          .social-media-footer-container{
            display: flex;
            flex-direction: row;
            position: relative;
            left: 50%;
            width: 60%;
            transform: translateX(-50%);
            padding: 25px 0px;
          }
          .socialMediaIcon{
            flex: 1;
            margin: 2px;
            padding: 10px;
            font-size: 25px;
            text-align:center;
          }
          .facebookIcon{
            color:#1778f2;
          }

          .instagramIcon{
            color: purple
          }
          .twitterIcon{
            color: #00acee;
          }
          .discordIcon{
            color: #5865F2
          }
          .linkedInIcon{
            color: #0072b1;
          }

        `,
        components: model => {

          return(
            <div class = "social-media-footer-container">
              <div class = "socialMediaIcon facebookIcon">
                <i class="fab fa-facebook"></i>
              </div>
              <div class = "socialMediaIcon instagramIcon">
                <i class="fab fa-instagram"></i>
              </div>
              <div class = "socialMediaIcon twitterIcon">
                <i class="fab fa-twitter"></i>
              </div>
              <div class = 'socialMediaIcon discordIcon'>
                <i class="fab fa-discord"></i>
              </div>
              <div class = 'socialMediaIcon linkedInIcon'>
                <i class="fab fa-linkedin"></i>
              </div>

            </div>
          )
        },
        'script-props': ["id",],

      },



    },

    view: {
      events: {
        dblclick: 'onActive'
      },
    }


  })
}
