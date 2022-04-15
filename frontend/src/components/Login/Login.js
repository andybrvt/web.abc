import React from 'react';
// import { Form } from '@ant-design/compatible';
import { Input, Form, Button } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined,  } from '@ant-design/icons';
import { NavLink, Redirect, } from "react-router-dom";
import './Login.css';
// const { active, account, library, connector, activate, deactivate } = useWeb3React()


// async function connect() {
//     try {
//       await activate(injected)
//     } catch (ex) {
//       console.log(ex)
//     }
//   }
//
//   async function disconnect() {
//     try {
//       deactivate()
//     } catch (ex) {
//       console.log(ex)
//     }
//   }

class Login extends React.Component{
  constructor(props) {
    super(props);
  }
  state = {
    username: "",
    password: "",
    login: false,

  };
  navLogin = (eventId) => {
      console.log(eventId)
      this.props.history.push("/login")
    }
  render(){
    const { error, loading, token } = this.props;
    const { username, password } = this.state;

    return(
      <div>
        <div className="title">
          This is the home page
        </div>
        <div class="title2">
          hello how are you
        </div>
        <div class="loginFormInnerContent">

          <Form
            name="basic">
              <Form.Item
                onChange={this.handleUserName}
                test="username">
                <Input
                  size="middle"
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Enter Username"/>
              </Form.Item>

              <Form.Item
                onChange={this.handlePasword}
                value={password}
                test="password">
                <Input.Password
                   size="middle"
                   prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                   placeholder="Enter Password"/>
               </Form.Item>


              <Form.Item>
                <Button
                 htmlType = 'submit'
                 type="primary"
                 shape="round"
                 size="large"
                 onClick={this.handleSubmit}
                 loading={loading}
                 >
                  Log In

                </Button>
                <div>  New? <NavLink to="/signup">Sign Up</NavLink></div>
              </Form.Item>

              </Form>
        </div>
      </div>
    )
  }
}

export default Login;
