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
import SimpleContractAbi from "../../abi/SimpleContract.json";
import { simpleContractAddress } from "../../contracts"
import './Account.css';
import web from '../Home/web.png';
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


{/*
const contract = new Contract(0x53a19F44548182602b3B665AB9B9717735Ed53be, simpleContractInterface);
const count = useCount();
  const { state, send: incrementCount } = useIncrement();

  function handleIncrement() {
    incrementCount();
  }


  export function useIncrement() {
  const { state, send } = useContractFunction(contract, "incrementCount", {});
  return { state, send };
}

const simpleContractInterface = new ethers.utils.Interface(SimpleContractAbi);
  function useCount() {
  const [count]: any = useContractCall({
    abi: simpleContractInterface,
    address: simpleContractAddress,
    method: "count",
    args: [],
  })
  return count;
}

*/}
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


class Account extends React.Component{
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

  onChangeHandler = event => {
   console.log(event.target.files[0])
   console.log(URL.createObjectURL(event.target.files[0]))
   this.setState({
       selectedFile: event.target.files[0],
       submitFile:URL.createObjectURL(event.target.files[0]),
       loaded: 0,
   })
 }

 submitVid=(values)=>{
    console.log('start of submitted vid')
    console.log(values)
    const formData = new FormData();
    formData.append('email',  values.email)
    formData.append('vid', this.state.selectedFile)
    console.log(formData)
    authAxios.post(`${global.API_ENDPOINT}/portal/UploadBusinessVid`,
      formData,
      {headers: {"content-type": "multipart/form-data"}}
    ).then(res => {
      console.log(res.data)
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

  navLogin = (eventId) => {
      console.log(eventId)
      this.props.history.push("/login")
    }
  render(){
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
          <div class="title2">
            hello how are you
          </div>
          <div>
            <Flex direction="column" align="center" mt="4">
              <Text color="black" fontSize="8xl">
                {this.state.count ? this.state.count: 0}
              </Text>
              <Button colorScheme="teal" size="lg" >
                Increment
              </Button>
            </Flex>
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




            <div class="row">


              <div class="col">
                <input onChange={this.onChangeHandler} type="file" name="file" ></input>

                  <div>
                    {
                      (this.state.selectedFile) ?

                // uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"

                      // <img class="imageUploaded" src={imageUrl} alt="avatar" />
                      <video width="300" height="300" controls>
                          <source src={this.state.submitFile}/>
                      </video>

                      :
                      ''
                  }
                  </div>

              </div>
            </div>
            <div style={{paddingTop:'25px'}}>
                <Button
                  // onClick={this.submitVid}
                htmlType="submit"
                type = "primary"
                // disabled = {this.handleSubmitButton()}
                // disabled = {pristine || invalid}
                > Submit </Button>
            </div>






        </div>

      </div>
    )
  }
}

export default withMyHook(Account);
