import React from 'react';
import './Home.css'
import { Layout, Menu, Divider, Breadcrumb, Avatar, Image} from 'antd';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import first from './first.png'
import second from './second.png'
import third from './third.png'
import fourth from './fourth.png'
import web from './web.png'
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// https://stackoverflow.com/questions/53371356/how-can-i-use-react-hooks-in-react-classic-class-component
function withMyHook(Home) {
  return function WrappedComponent(props) {
    const {activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    return <Home {...props} etherBalance={etherBalance} activateBrowserWallet={activateBrowserWallet} account={account} />;
  }
}




class Home extends React.Component{
  constructor(props) {
    super(props);

  }
  state = {
    trigger: false,

  };
  subComponent() {
    return (<div>Hello World</div>);
  }
  navLogin = () => {
    console.log("hi")
    // let navigate = useNavigate();
    this.props.history.push("/login")

    }

  triggerWallet=() =>{
    console.log("trigger true")
    this.setState({
      trigger:true,
    })
    this.props.activateBrowserWallet();
    // this.props.history.push("/login")
  }





  render(){
    const account = this.props.account;
    const etherBalance = this.props.etherBalance;
    return(
     <div>


       <Menu style={{left:'500px'}} theme="light" mode="horizontal" defaultSelectedKeys={['3']}>
         <Menu.Item style={{left:'0%'}} key="1"><div class="logoFont">web.abc</div></Menu.Item>
         <Menu.Item style={{left:'66%'}} key="1">
           <span className="menuItemFont">
             About
           </span>
         </Menu.Item>
         <Menu.Item style={{left:'67%'}} key="2">
           <span className="menuItemFont">
             Team
           </span>
         </Menu.Item>

         <div style={{position:'absolute', left:'90%', top:'1%'}}>
         <div class="loginKey">
           <div class="loginBtn">
             <div
              onClick={this.triggerWallet} className="loginFont">
              Connect wallet

             </div>
           </div>
         </div>
         </div>
       </Menu>


       {/*
         <div>
           <text color="white" fontSize="md">
             // etherBalance will be an object, so we stringify it
             {etherBalance && JSON.stringify(etherBalance)} ETH
           </text>
         </div>
         */}


  <div class="bigContainer">


    <div class="small1">
      <div class="splitScreenContainer">
        <div class="custom-shape-divider-top-1639728936">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>


        <div class="splitLeft">
          <div class="splitLeft1">
            <div className="title">
              {
                account ?
                this.props.history.push("/account")

                 :
                ''

              }
              Turn your website into NFTs
            </div>
            <div class="title2">
              Mint It. Own It.
            </div>
            <div style={{marginTop:20}}>
              <Avatar src={<Image src={first} style={{ width: 32, marginRight:'10px' }} />} />
              <Avatar src={<Image src={second} style={{ width: 32 }} />} />
              <Avatar src={<Image src={second} style={{ width: 32 }} />} />
              <Avatar src={<Image src={second} style={{ width: 32 }} />} />
            </div>
            <div class="getStartedBtn">
              <span class="containerText">
                Get started
                </span>
            </div>
          </div>
        </div>
        <div class="splitRight">
          <div class="splitRightCenter">
          <Avatar size={600}

             shape="square" src={<Image style={{borderRadius:20}} src={web}  />} />
          </div>
        </div>

      </div>
      <div style={{paddingLeft:'50px',paddingRight:'50px', paddingTop:'0px'}}>
      <Divider style={{color:'red'}}></Divider>
      </div>
    </div>
    <div class="small2">


    </div>
  </div>

  </div>

    )
  }
}

export default withMyHook(Home);
