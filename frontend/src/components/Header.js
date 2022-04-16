import React, { useState, useEffect } from 'react';
import { Input, Form, List, Avatar } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined, SearchOutlined  } from '@ant-design/icons';
import { NavLink, Redirect, } from "react-router-dom";

// import './Account.css';
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import './Home/Home.css';

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
} from '@chakra-ui/react';
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt,  } from '@fortawesome/free-solid-svg-icons'


export const Header = (props) => {
  const {activateBrowserWallet, account, deactivate } = useEthers();
  const etherBalance = useEtherBalance(account);



  const navHome = () => {
      props.history.push("/home")
  }

  function handleDeactivateAccount() {
    deactivate();
  }

  return(
    <div>

    <div className="menu">
      <div class="headerBar">
          <div class="menuHeader1">
            <div class="logoFont">web.abc</div>
          </div>
          {/*}
          <div
            onClick = {() => handleDeactivateAccount()}

            >Hi this is used to disconnect</div>
          */}
          <div class="menuHeader2">

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


                    <MenuItem onClick={navHome} icon={<UserOutlined size={30} />}> Home</MenuItem>
                    <MenuItem onClick={deactivate} > <FontAwesomeIcon style={{marginRight:5}} icon={faSignOutAlt} />Log Out</MenuItem>
                    <MenuItem isDisabled>Docs (Coming soon) </MenuItem>





                    {/*
                    <MenuDivider />
                    <MenuGroup title='Help'>
                    <MenuItem isDisabled>Docs (Coming soon)</MenuItem>
                    <MenuItem isDisabled>FAQ (Coming soon)</MenuItem>

                    </MenuGroup>
                    <MenuDivider />
                     <MenuItem > <FontAwesomeIcon style={{marginRight:5}} icon={faSignOutAlt} />Log Out</MenuItem>
             */} </MenuList>
            </Menu>
          </div>
      </div>
    </div>



    </div>
  )
}
