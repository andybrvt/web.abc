import React, {useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';


export const PreviewPage = props => {

  useEffect(() => {

    // const script = document.createElement('script')
    // script.src = "./PreviewPageJs.js";
    // script.async = true;
    // document.body.appendChild(script);
    //
    // return () => {
    //   document.body.removeChild(script)
    // }

    const js = props.history.location.state.js
    eval(js)


  },[])

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
