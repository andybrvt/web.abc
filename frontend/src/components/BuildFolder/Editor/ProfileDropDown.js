import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Form, List, Avatar } from 'antd';
import React from 'react';
import {
  Button,
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faPlus, faUserFriends  } from '@fortawesome/free-solid-svg-icons'
import { Contract } from "@ethersproject/contracts";
import { useEthers, useEtherBalance, useContractCall, useContractFunction} from "@usedapp/core";
import { ethers } from "ethers";
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


 class ProfileDropDown extends React.Component {


   constructor(props) {
    super(props);
  }


  render() {
    console.log(this.props)
    const account = this.props.account;
    const etherBalance = this.props.etherBalance;

    return (
      <div>

      <div className="">
        <div class="">

            <div class="">
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
                    <MenuItem icon={<UserOutlined size={30} />}>My Home</MenuItem>
                    <MenuItem>My Collection </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title='Help'>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                    <MenuItem > <FontAwesomeIcon style={{marginRight:5}} icon={faSignOutAlt} />Log Out</MenuItem>
                </MenuList>
              </Menu>
            </div>
        </div>
      </div>



      </div>
    )
  }
}

export default withMyHook(ProfileDropDown);
