
import React, { Component } from 'react';
import { withRouter, Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Landing from './components/Landing/Landing';
import TestHTMLScraper from './components/Landing/TestHTMLScraper';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SideMenu from './SideMenu';
import {CompilerTest} from './components/Home/CompilerTest';
import {WebsiteInput} from './components/Home/WebsiteInput';
import { UploadImageNFT } from './components/Home/UploadImageNFT';
import { createBrowserHistory } from "history";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

// created custom router for react router v6
// https://stackoverflow.com/questions/63471931/using-history-with-react-router-dom-v6
const CustomRouter = ({
  basename,
  children,
  history,
}) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};


class App extends Component{

  render(){
    const history = createBrowserHistory();

    return(
      <CustomRouter history={history}>

        <Routes>
          <Route exact path="/"  element={<Landing history={history}/>} />
          <Route exact path="/login"  element={<Login history={history} />} />
          <Route exact path="/account"  element={<Home history={history} />} />
          <Route exact path="/collection/:contract" element={<UploadImageNFT history={history}/>} />
          <Route exact path="/test" element={<TestHTMLScraper history={history}/>} />
          <Route exact path="/compilerTest" element={<CompilerTest history={history}/>} />
          // <Route exact path="/WebsiteInput" element={<WebsiteInput history={history}/>} />

        </Routes>
        </CustomRouter>

    )
  }
}

export default App;
