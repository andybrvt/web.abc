import React, { useState, useEffect, useRef } from 'react';
// import { Form } from '@ant-design/compatible';
import { Form, List, Avatar, Typography } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined } from '@ant-design/icons';
import { NavLink, Redirect, } from "react-router-dom";
// import './Account.css';
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { SignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import web from '../Landing/web.png';
import QueueAnim from 'rc-queue-anim';
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import { Header } from '../Header'
import { CreateSite } from '../CreateSite/CreateSite';
import {
  Menu, Select,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
  Slider,
  Box,
  Button,
  Link,
  FormControl,
  Center,
  FormLabel,
  Code,
  Modal, ModalBody, ModalFooter, ModalHeader,
  ModalOverlay, ModalCloseButton, ModalContent,
  useDisclosure,
  FormErrorMessage,
  IconButton,
  Input, Divider,
  Text,
  Image,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { UploadImageNFT } from './UploadImageNFT';
import { CollectionList } from './CollectionList/CollectionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import * as dateFns from 'date-fns';
import { SendMoney } from './SendMoney/SendMoney';
import { WebsiteList } from './WebsiteList/WebsiteList';
import { nft1 } from './nft.jpg';
import { Spinner } from '@chakra-ui/react'
import { useScreenshot } from "use-screenshot-hook";
import { WebsiteCreation } from './WebsiteCreation';
// https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
import { ReactComponent as TestBuilder } from './contract.svg';
import { ReactComponent as CreateContract } from './CreateContract.svg';

export const Home = (props) => {
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onChange = (val) => {

  };




  const handleChange = (value) => setValue(value)
  const [value, setValue] = React.useState(20)
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState("");
  const [websites, setWebsites] = React.useState([])
  const [createVisible, setCreateVisible] = React.useState(false)
  const [triggerChoice, setTriggerChoice] = React.useState(false)

  // opensea input
  const [openSeaContract, setOpenSeaContract] = React.useState(false)
  const [openSeaLink, setOpenSeaLink] = React.useState("")

  //existing contract input
  const [existingContract, setExistingContract] = React.useState(false)
  const [existingContractLink, setExistingContractLink] = React.useState("")
  //

  const [selectModalOption, setSelectModalOption] = React.useState("")

  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);


  const chooseOpenSeaContract = () => {
    setOpenSeaContract(true)
    setExistingContract(false)
  }

  const chooseExistingContract = () => {
    setOpenSeaContract(false)
    setExistingContract(true)
  }

  const navDocs = (eventId) => {
    props.history.push("/docs")
  }


  const onInputChange = (e) => {
    setName(e.target.value)
  }

  const onInputOpenSea = (e) => {
    setOpenSeaLink(e.target.value)
  }


  const onInputExistingContract = (e) => {
    setExistingContractLink(e.target.value)
  }

  const closeCreateVisible = () => {
    setCreateVisible(false)
  }

  const openCreateVisible = () => {
    setCreateVisible(true)
  }

  useEffect(() => {
    // axios.get(`${global.API_ENDPOINT}/builder/getAllWebsite`)
    // .then(res => {
    //   setWebsites(res.data)
    // })
    if (account) {
      axios.get(`${global.API_ENDPOINT}/builder/getUserWebsites/` + account)
        .then(res => {

          setWebsites(res.data)
          setIsLoading(false)
        })
    }


  }, [])



  const resetAllHooks = () => {
    setTriggerChoice("")
    setOpenSeaContract(false)
    setExistingContract(false)
    setSelectModalOption('')
    setName('')
  }

  const onBuildDirect = (websiteId, websiteType, websiteDeployedCondition) => {
    console.log(websiteId, websiteType)
    if (websiteDeployedCondition == false) {
      props.history.push(`/build/${websiteId}/${websiteType}`, {
        websiteId: websiteId
      })
    }
    else {
      props.history.push(`websiteDashboard/${websiteId}`, {
        websiteId: websiteId
      })
    }

  }

  const nextStep = () => {
    console.log('step here')
    if (selectModalOption === "websiteOption") {

      setTriggerChoice("website")

    }
    if (selectModalOption === "nftOption") {


      const formData = new FormData()
      formData.append("owner", account)
      formData.append('name', name)
      formData.append("type", 'nft')


      // Make the webs'ite here first and then link it up later when you
      // are done with the contract


      axios.post(`${global.API_ENDPOINT}/builder/createWebsite`, formData,
        { headers: { "content-type": "multipart/form-data" } }
      ).then(res => {
        // props.history.push('/startColl ection/'+res.data)
        props.history.push('/build/' + res.data + '/nft')

      })


    }



  }

  const navManageContract = () => {
    props.history.push("/contractDashboard")
  }


  const ref1 = useRef(null);

  const { image, takeScreenshot } = useScreenshot({ ref: ref1 });

  return (
    <div>
      testtt
      {/* <CreateSite/> */}

    </div>
  )

}
