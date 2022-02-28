import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import * as dateFns from 'date-fns';
import { ExampleTemplate } from './ExampleTemplate';
import './WebsiteList.css';

const images = [
  "https://images.unsplash.com/photo-1643120500723-dc36f2d92718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1642629026109-3109c5c9f969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  "https://images.unsplash.com/photo-1643051861827-4c04aba8c6b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
]


// <List.Item
//   onClick = {() =>props.onBuildDirect(item.id)}
//   className = "testListItem">
//   <Typography.Text mark>{item.name} {dateFns.format(new Date(item.lastChanged), 'MM-dd-yyyy')}</Typography.Text>
// </List.Item>

export const WebsiteList = (props) => {

  var data = props.data

  return(
    <div className = "websiteListContainer">
      <div className = "websiteList">
        {
          data.map((item, index) => {
            return(
              <ExampleTemplate
                onBuildDirect = {props.onBuildDirect}
                item = {item}
                unsplashImage={images[index%3]}/>

            )
          })
        }
      </div>
    </div>

  )
}
