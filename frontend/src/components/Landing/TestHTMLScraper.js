import React from 'react';
import { Button, Input } from '@chakra-ui/react';


class TestHTMLScraper extends React.Component{

  state = {
    url: ''
  }


  onChange = e =>{
    this.setState({
      url:e.target.value
    })
  }

  onSubmit = e => {
    console.log(this.state.url)
    
  }

  render(){

    return (
      <div>
        Here is my new file
        <Input
          onChange = {this.onChange}
          placeholder ="Place website url here"/>
        <Button
          onClick = {this.onSubmit}
          >Submit</Button>
      </div>

    )
  }
}

export default TestHTMLScraper
