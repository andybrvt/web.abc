import React, {useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';
import { useEthers, useEtherBalance } from "@usedapp/core";


export const PreviewPage = props => {


  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined



  useEffect(() => {

    // const script = document.createElement('script')
    // script.src = "./PreviewPageJs.js";
    // script.async = true;
    // document.body.appendChild(script);
    //
    // return () => {
    //   document.body.removeChild(script)
    // }

    const test = document.getElementsByClassName("myclass")
    if(test !== null){

      console.log(test)
      for(let i =0; i<test.length; i++){
        console.log(test[i])

        test[i].addEventListener("click", function(){
          console.log('you can connect it here')
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
