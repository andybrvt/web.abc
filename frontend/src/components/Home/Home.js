import React from 'react';
// import { Form } from '@ant-design/compatible';
import { Input, Form, List, Avatar,Typography } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { NavLink, Redirect, } from "react-router-dom";
// import './Account.css';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/Connectors"
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import { SignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import web from '../Landing/web.png';
import { Button, ButtonGroup, Divider, Flex, Text } from '@chakra-ui/react';
import { Contract } from "@ethersproject/contracts";
import { ethers } from "ethers";
import { Header } from '../Header'
import {
  Menu,
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
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { UploadImageNFT } from './UploadImageNFT';
import { CollectionList } from './CollectionList/CollectionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faPlus, faUserFriends  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import * as dateFns from 'date-fns';
import { CreateWebsiteModal } from '../CreateWebsiteFolder/CreateWebsiteModal';
import { WebsiteList } from './WebsiteList/WebsiteList';
// https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    {/*
    const contract = new Contract(simpleContractAddress, simpleContractInterface);
    */}

    return <Component {...props} etherBalance={etherBalance} activateBrowserWallet={activateBrowserWallet} account={account} />;
  }
}


class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      searched: [],
      showSearch: false,
      searchValue: "",
      selectedFile: "",
      sliderValue:0,
      username: "",
      password: "",
      login: false,
      websites: [],
      createVisible: false,
    };
  }

  navSmartContract = (eventId) => {
      console.log(eventId)
      this.props.history.push("/smartContract")
  }

  navDocs = (eventId) => {
      console.log(eventId)
      this.props.history.push("/docs")
  }


  closeCreateVisible = () => {
    this.setState({
      createVisible: false
    })
  }

  openCreateVisible = () => {
    this.setState({
      createVisible: true
    })
  }

  componentDidMount(){
    axios.get(`${global.API_ENDPOINT}/builder/getAllWebsite`)
    .then(res => {
      this.setState({
        websites: res.data
      })
    })
  }

  renderSearchList = (searches) =>{
    // this function will display the list of users that are found by the search
    let searchList = []
    for(let i = 0; i< searches.length; i++){
      const user = searches[i]
      searchList.push(
          <div
            onClick = {() => this.onProfileSelect(user.username)}
            className = "searchObj"
            style={{padding:'15px'}}>
            <div class="searchObjLeft">
            <Avatar
              style={{marginRight:'10px'}}
              size="medium"
              src={`${global.IMAGE_ENDPOINT}`+user.profile_picture}/>
            </div>
            <br/>
            <div class="searchObjRight">
              <span style={{marginLeft:'25px'}}>
                {this.capitalize(user.first_name)} {this.capitalize(user.last_name)}
                <br/>
                <div
                  class="headerPostText"
                  style={{marginLeft:'25px'}}
                >
                  {"@"+user.username}
                </div>
              </span>
            </div>
          </div>
      )
    }
    return searchList;
  }

  onBuildDirect = (websiteId) => {
    this.props.history.push(`/build/${websiteId}`,{
      websiteId: websiteId
    })
  }
  render(){

    const account = this.props.account;
    const etherBalance = this.props.etherBalance;
    return(
      <div>
        <Header history={this.props.history}/>

        <Divider/>

        <div class="collectionList">
          <div class = "collectionTopContainer">
            <div class="collectionTitle">
              My Collection
            </div>
            <Stack style={{marginLeft:'25px'}} direction='row' spacing={4}>
              <Button onClick={this.openCreateVisible}  leftIcon={<FontAwesomeIcon style={{marginRight:5}} icon={faPlus} />} colorScheme='teal' variant='solid'>
                Create Site
              </Button>
              <Button style={{marginLeft:25}} onClick={this.navSmartContract  }  leftIcon={<FontAwesomeIcon style={{marginRight:5}} icon={faPlus} />} colorScheme='teal' variant='solid'>
                Customize Smart Contract
              </Button>
            </Stack>
          </div>

          <WebsiteList data = {this.state.websites} onBuildDirect = {this.onBuildDirect} />

        </div>




        <CreateWebsiteModal
          history = {this.props.history}
          account = {this.props.account}
          onCancel={this.closeCreateVisible}
          visible = {this.state.createVisible}

          />

      </div>
    )
  }
}

export default withMyHook(Home);
