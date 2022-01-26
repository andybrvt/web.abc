import React from 'react';
// import { Form } from '@ant-design/compatible';
import { Input, Form, List, Avatar } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { NavLink, Redirect, } from "react-router-dom";
// import './Account.css';
import { useWeb3React } from "@web3-react/core"
import { injected } from "../wallet/Connectors"
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
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
} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { authAxios } from '../../components/util';
import { UploadImageNFT } from './UploadImageNFT';
import { CollectionList } from './CollectionList/CollectionList';
import { WebsiteInput } from './WebsiteInput';
import { ExampleTemplate } from '../BuildFolder/ExampleTemplate';
// https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
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
    };
  }
  state = {
    username: "",
    password: "",
    login: false,

  };

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

  navLogin = (eventId) => {
      console.log(eventId)
      this.props.history.push("/login")
    }
  render(){

    console.log(this.props)
    const account = this.props.account;
    const etherBalance = this.props.etherBalance;

    return(
      <div>
        <Header/>

        <Divider/>

        <div class="collectionList">
          <div class="collectionTitle">
            My Collection
          </div>
          <div style={{marginTop:'10%',width:900}}>
            <div style={{display:'flex',}}>
              <ExampleTemplate unsplashImage='https://images.unsplash.com/photo-1643120500723-dc36f2d92718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
              <ExampleTemplate unsplashImage='https://images.unsplash.com/photo-1642629026109-3109c5c9f969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'/>
              <ExampleTemplate unsplashImage='https://images.unsplash.com/photo-1643051861827-4c04aba8c6b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>
            </div>
          </div>
        </div>





        <div class="loginFormInnerContent">

          <div>

              <text color="white" fontSize="md" fontWeight="medium" mr="2">
                {account &&
                  `${account.slice(0, 6)}...${account.slice(
                    account.length - 4,
                    account.length
                  )}`}
              </text>
              <br/>
              <text color="white" fontSize="md">
                {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} ETH
              </text>
          </div>


        <CollectionList  {...this.props}/>

        <WebsiteInput {...this.props}/>




        </div>

      </div>
    )
  }
}

export default withMyHook(Home);
