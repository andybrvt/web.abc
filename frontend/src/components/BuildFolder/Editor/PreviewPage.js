import React, {useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';
import { useEthers, useEtherBalance } from "@usedapp/core";


export const PreviewPage = props => {


  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined



  useEffect(() => {

    console.log(props.history.location.state.websiteId)
    console.log(props.history.location.state.pageId)


    const test = document.getElementsByClassName("myclass")
    if(test !== null){
      for(let i =0; i<test.length; i++){

        test[i].addEventListener("click", function(){
          activateBrowserWallet()
        })
      }
    }


    const js = props.history.location.state.js
   eval(js)


  },[props.history.location.state.html])

  return(
    <div>
      {parse(props.history.location.state.html)}


    </div>
  )
}
// class PreviewPage extends React.Component {
//
//
//
//   render() {
//     console.log(this.props.history.location.state.css)
//     return(
//       <div>
//         <ScriptTag type="text/javascript" src="./PreviewPageJs" />
//
//
//       </div>
//     )
//
//
//   }
// }
//
// export default PreviewPage;
