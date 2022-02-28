import React, {useState, useEffect} from 'react';
import { Modal } from 'antd';
import { Button, Input, Stack } from '@chakra-ui/react';
import axios from 'axios';


export const CreateWebsiteModal = (props) => {


  var visible = props.visible

  const [name, setName] = useState("");

  const onInputChange = (e) => {
    setName(e.target.value)
  }

  const onCancel = () => {
    setName("")
    props.onCancel()
  }

  const createWebSite = () => {

    console.log('create website here')
    const address = props.account
    // Now you can create your website
    const formData = new FormData()
    formData.append("owner", address)
    formData.append("name", name)

    axios.post(`${global.API_ENDPOINT}/builder/createWebsite`, formData)
    .then(res => {
      console.log(res.data)
    })

  }

  console.log(props)
  return(
    <Modal
      onOk = {createWebSite}
      onCancel = {onCancel} visible = {visible}>

      <Input
        onChange = {onInputChange}
        htmlSize={4} width='auto' placeholder = "Website Name" />


    </Modal>
  )
}
