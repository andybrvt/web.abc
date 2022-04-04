
import React, { Component } from 'react';
import { withRouter, Routes, Route, Router, BrowserRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import Landing from './components/Landing/Landing';
import TestHTMLScraper from './components/Landing/TestHTMLScraper';
import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import SideMenu from './SideMenu';
import { MainBuildContainer } from './components/BuildFolder/MainBuildContainer';
import {GrapesjsTest} from './components/TestingFolder/GrapesjsTest';
import {CompilerTest} from './components/Home/CompilerTest';
import {WebsiteInput} from './components/Home/WebsiteInput';
import { UploadImageNFT } from './components/Home/UploadImageNFT';
import { createBrowserHistory } from "history";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import {Canvas} from './components/TestingFolder/ReactDesignerTest';
import {MoralisTest} from './components/TestingFolder/MoralisTest';
import {PreviewPage} from './components/BuildFolder/Editor/PreviewPage';
import {OfficialPage} from './components/BuildFolder/Editor/OfficialWebsite/OfficialPage';
import {SmartContractCustomize} from './components/SmartContractCustomize';
import {Docs} from './Docs.js';
import {CollectionList} from './components/Home/CollectionList/CollectionList';
import { MoralisProvider } from "react-moralis";
import {PageNotFound} from './PageNotFound';
import { useEthers } from "@usedapp/core";
import grapesjs from 'grapesjs';


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


// class App extends Component{


  // render(){
export const App = ()=> {
  const history = createBrowserHistory();
  console.log(grapesjs.version)
  const { activateBrowserWallet, account } = useEthers();

  return(
    <CustomRouter history={history}>
      {
        account ?

        <Routes>
          <Route exact path="/"  element={<Landing history={history}/>} />

            <Route exact path="/login"  element={<Login history={history} />} />
            <Route exact path="/home"  element={<Home history={history} />} />
            <Route exact path="/collectionList" element={<CollectionList history={history}/>} />
            <Route exact path="/collection/:contract" element={<UploadImageNFT history={history}/>} />
            <Route exact path="/test" element={<MoralisTest history={history}/>} />
            <Route exact path="/compilerTest" element={<CompilerTest history={history}/>} />
            <Route exact path="/grapesTest" element={<GrapesjsTest history={history}/>} />
            <Route exact path="/build/:websiteId" element={<MainBuildContainer history={history}/>} />
            <Route exact path="/designerTest" element={<Canvas history={history}/>} />
            <Route exact path="/previewPage/:websiteId/:pageId" element={<PreviewPage history={history}/>} />
            <Route exact path="/webabc/:websiteId/:pageId" element={<OfficialPage history={history}/>} />
            <Route exact path="/smartContract" element={<SmartContractCustomize history={history}/>} />
            <Route exact path="/docs" element={<Docs history={history}/>} />



        </Routes>

        :

        <Routes>
          <Route exact path="/"  element={<Landing history={history}/>} />
          <Route exact path="/webabc/:websiteId/:pageId" element={<OfficialPage history={history}/>} />

        {/*

            <Route exact path="*" element={<PageNotFound />} />

            */}

        </Routes>

      }

      </CustomRouter>

  )
}



  // }
// }

// export default App;
