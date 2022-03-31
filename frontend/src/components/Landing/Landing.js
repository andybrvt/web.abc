import React from 'react';
import './Landing.css'
import { Layout, Menu, Divider, Breadcrumb, Avatar} from 'antd';
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
import { Button, ButtonGroup, Box, Image, Badge } from '@chakra-ui/react'
import Lottie from 'react-lottie';
import animationData from './drag-and-drop.json';
import image24 from '../../images/image24.png';

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

const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
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
                 Build Dapps with UI with just a drag-n-drop.
               </div>



               <form onSubmit = {this.handleEmailSubmit}>
                   <label style = {{
                       marginTop: '15px',
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


         <div class = "descriptionContainer">
           <div class = 'descriptionText'>
             Making start contract is hard enough, let's not let coding stop
             you from participating in the blockchain.
           </div>

         </div>


         <div class = "featureContainer">

           <div class = "featureCardHolder">

             <div class = "cardContainer">
                <div class ="featureCard">
                  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w= {400} h={500}>
                    <Image src={image24} alt={property.imageAlt} />

                    <Box p='6'>
                      <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                          New
                        </Badge>

                      </Box>

                      <Box
                        mt='1'
                      >
                        <div class = "featureInfoText">
                          <div class = "featureInfoTitle">
                            Personal Website
                          </div>

                          <div>
                            Build you own customizable website to congergate, in real time,
                            all your blockchain antics. Showcase:
                            <br />
                            -All your nfts
                            <br />
                            -All your recent transactions
                            <br />
                            -All your "stats" on the blockchain

                          </div>
                        </div>

                      </Box>


                    </Box>
                  </Box>

                </div>
             </div>

             <div class = "cardContainer">
               <div class ="featureCard">
                 <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w= {400} h={500}>
                 <Image src={'https://cdn.vox-cdn.com/thumbor/qi6L2dYC2T_879sjDmdfrfvhAiQ=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/68948366/2021_NYR_20447_0001_001_beeple_everydays_the_first_5000_days034733_.0.jpg'} alt={'Rear view of modern home with pool'} />
                   <Box p='6'>
                     <Box display='flex' alignItems='baseline'>
                       <Badge borderRadius='full' px='2' colorScheme='red'>
                         Coming soon
                       </Badge>

                     </Box>

                     <Box
                       mt='1'
                       fontWeight='semibold'
                       as='h4'
                       lineHeight='tight'
                       isTruncated
                     >+
                     
                       NFT Collections
                     </Box>

                     <Box>
                       Say something about nft here
                     </Box>


                   </Box>
                 </Box>
               </div>
             </div>

             <div class = "cardContainer">
               <div class ="featureCard">
                 <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' w= {400} h={500}>
                 <Image src={'https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} alt={'Rear view of modern home with pool'} />
                   <Box p='6'>
                     <Box display='flex' alignItems='baseline'>
                       <Badge borderRadius='full' px='2' colorScheme='red'>
                         Coming soon
                       </Badge>

                     </Box>

                     <Box
                       mt='1'
                       fontWeight='semibold'
                       as='h4'
                       lineHeight='tight'
                       isTruncated
                     >
                       DAOs
                     </Box>

                     <Box>
                       Say something about daos here

                     </Box>


                   </Box>
                 </Box>
               </div>
             </div>

           </div>

         </div>

         <div class = "socialMediaContainer">

           <div class = "socialMediaMiddleC">
             {/** 
              * <div class = "socialMediaIcon ">
                 <i class="fab fa-facebook"></i>
               </div>
               <div class = "socialMediaIcon ">
                 <i class="fab fa-instagram"></i>
               </div>
              * <div class = 'socialMediaIcon '>
                 <i class="fab fa-linkedin"></i>
               </div>
              */}
               
               <div href="https://twitter.com/webdotabc" target="_blank" class = "socialMediaIcon ">
                 <i class="fab fa-twitter"></i>
               </div>
               <div class = 'socialMediaIcon '>
                 <i class="fab fa-discord"></i>
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
