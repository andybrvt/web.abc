import React, {useState, useEffect} from 'react';
import { Input, Form, List, Avatar,Typography } from 'antd';
import * as dateFns from 'date-fns';


export const WebsiteList = (props) => {

  var data = props.data

  return(
    <List
     class = "testList"
     header={<div>Header</div>}
     footer={<div>Footer</div>}
     bordered
     dataSource={data}
     renderItem={item => (
       <List.Item
         onClick = {() =>props.onBuildDirect()}
         className = "testListItem">
         <Typography.Text mark>{item.name} {dateFns.format(new Date(item.lastChanged), 'MM-dd-yyyy')}</Typography.Text>
       </List.Item>
     )}
   />
  )
}
