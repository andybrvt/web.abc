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

          <div className="menu">
            <div class="test">
                <div class="menuHeader1">
                  <div class="logoFont">web.abc</div>
                </div>
                <div class="menuHeader2">
                  <div className = "searchBarContainer">
                  <div className = "autoCompleteHeader">
                    <div>
                      <Form onChange = {this.onChangeNewSearch}>
                        <Input value = {this.state.searchValue}
                          prefix={<SearchOutlined/>}
                          placeholder = {'Search'} />
                      </Form>
                      <List className ={`searchDropDown ${this.state.showSearch ? "showSearch": ""}`} >
                        {
                          this.state.searched.length === 0 ?
                          <li className ="searchListObj">
                              <span className = "noResultText">No results</span>
                          </li>
                          :
                          <div>
                            {this.renderSearchList(this.state.searched)}
                          </div>
                        }
                      </List>
                    </div>
                   </div>
                  </div>
                </div>
                <div class="menuHeader3">
                  <Menu colorScheme='teal' size='md'>

                    <MenuButton as={Button} rightIcon={<Avatar icon={<UserOutlined />} />}>
                    <text color="white" fontSize="md" fontWeight="medium" mr="2">
                      {account &&
                        `${account.slice(0, 6)}...${account.slice(
                          account.length - 4,
                          account.length
                        )}`}
                    </text>
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title='Profile'>
                        <MenuItem icon={<UserOutlined size={30} />}>My Account</MenuItem>
                        <MenuItem>My Collection </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title='Help'>
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                      </MenuGroup>
                      <MenuDivider />

                        <MenuItem icon={<AddIcon />} >Log Out</MenuItem>


                    </MenuList>
                  </Menu>
                </div>
            </div>
          </div>
          <Divider/>


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






        </div>

      </div>
    )
  }
}

export default withMyHook(Home);
