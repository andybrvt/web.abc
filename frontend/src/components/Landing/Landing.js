import React from 'react';
import './Landing.css'
import { Layout, Menu, Divider, Breadcrumb, Avatar, Image} from 'antd';
import { Input } from '@chakra-ui/react'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import first from './first.png'
import second from './second.png'
import third from './third.png'
import fourth from './fourth.png'
import web from './web.png'
import { useNavigate, } from 'react-router-dom';
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import builderSVG from './builder.svg'
import axios from "axios";
import { Button, ButtonGroup } from '@chakra-ui/react'
import Lottie from 'react-lottie';
import animationData from './drag-and-drop.json';


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




class Landing extends React.Component{
  constructor(props) {
    super(props);

  }
  state = {
    trigger: false,
    email: '',
    errors: {},
    showPosition: false,
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

  handleEmailValidation(){
    let {email} = this.state;
    let errors = {};
    let emailIsTrue = true;

    if(email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      emailIsTrue = false;
      errors['email'] = "Enter a valid email"
    }

    this.setState({
      errors: errors
    })

    return emailIsTrue;

  }


  handleEmailValidation(){
    let {email} = this.state;
    let errors = {};
    let emailIsTrue = true;
    if(email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      emailIsTrue = false;
      errors['email'] = "Enter a valid email"
    }
    this.setState({
      errors: errors
    })
    return emailIsTrue;
  }

  handleEmailChange = e => {
    console.log(e.target.value)
    this.setState({
      email: e.target.value
    })
  }


  handleEmailSubmit = e => {
    e.preventDefault()
    console.log('hits here')
    const { email } = this.state;

    if(this.handleEmailValidation()){
      axios.post(`${global.API_ENDPOINT}/web3Back/onWaitListAdd`,{
        email: email
      })
      .then(res=> {
        console.log(res.data)
        this.setState({
          email: '',
          showPosition: true,
          position: res.data[1]
        })
      })
    } else {
      alert("email is not valid")
    }
    // Now just do an axios call here
  }


  render(){
    const account = this.props.account;
    const etherBalance = this.props.etherBalance;
    return(
     <div>

       <Menu theme="light" mode="horizontal" defaultSelectedKeys={['3']}>
         <div class = "logoContainer">
           <div class="logoFont">web.abc</div>
         </div>

         <div class = "middleHeaderContainer">
         </div>

        <div class = "connectWalletContainer">
          <Button
            onClick={this.triggerWallet}
            colorScheme='blue'>Connect Wallet</Button>
        </div>
       </Menu>

       <div class = "bigContainer">
         <div class = "splitScreenContainer">
           <div class="splitLeft">
             <div class="splitLeft1">
               <div className="title">

                 The start of your blockchain journey
               </div>
               <div class="title2">
                 Easy as a drag-n-drop.
               </div>



               <form onSubmit = {this.handleEmailSubmit}>
                   <label style = {{
                       width: '100%',
                     }}>
                     <div class = "inputField">

                       <Input style={{width:450}} variant='outline'   onChange = {this.handleEmailChange}
                         value = {this.state.email} placeholder='Enter email' />
                       <button type="submit" class="getStartedBtn">
                         <span class="containerText">
                           Join the waitlist
                           </span>
                       </button>

                     </div>

                   </label>
               </form>
             </div>
           </div>



           <div class="splitRight">
              <div class = "lottieContainer">
               <Lottie
                  options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                      rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                      }
                    }}

               />
             </div>

           </div>



         </div>


       </div>

         {/*




        <div class="small1">
          <div class="splitScreenContainer">




          </div>
          <div style={{paddingLeft:'50px',paddingRight:'50px', paddingTop:'0px'}}>
          <Divider style={{color:'red'}}></Divider>
          </div>
        </div>



         */}

     </div>

    )
  }
}

export default withMyHook(Landing);
