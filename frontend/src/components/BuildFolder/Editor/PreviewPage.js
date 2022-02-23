import React from 'react';
import parse from "html-react-parser";
// import './PreviewPage.css';
class PreviewPage extends React.Component {


  render() {
    console.log(this.props.history.location.state.css)
    return(
      <div>
        {parse(this.props.history.location.state.html)}

      </div>
    )


  }
}

export default PreviewPage;
