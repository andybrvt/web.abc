import React, {useState, useEffect} from 'react';
import { Modal, Button } from 'antd';


export const CreateWebsiteModal = (props) => {


  var visible = props.visible

  return(
    <Modal onCancel = {props.onCancel} visible = {visible}>
      Hi this is the creation modal
    </Modal>
  )
}
