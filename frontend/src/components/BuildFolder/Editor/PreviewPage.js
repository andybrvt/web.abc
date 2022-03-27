import React, {useState, useEffect} from 'react';
import parse from "html-react-parser";
import './PreviewPage.css';
import { useEthers, useEtherBalance } from "@usedapp/core";
import axios from 'axios';
import { useParams } from 'react-router-dom';


export const PreviewPage = props => {


  const {account, activateBrowserWallet, deactivate} = useEthers()

  const isConnected = account !== undefined

  const [html, setHtml] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

  const {websiteId, pageId} = useParams()

  useEffect(() => {

      const test = document.getElementsByClassName("myclass")
      if(test !== null){
        for(let i =0; i<test.length; i++){

          test[i].addEventListener("click", function(){
            activateBrowserWallet()
          })
        }
      }

      axios.get(`${global.API_ENDPOINT}/builder/getPageInfo/${websiteId}/${pageId}`)
      .then(res => {
        console.log(res.data, 'what is this here')
        setHtml(res.data.html)
        eval(res.data.js)

        setSrcDoc(
          `
          <html>
            <head>
              <script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
              <script src="https://unpkg.com/moralis/dist/moralis.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

            </head>
            <body>

            ${res.data.html}
            </body>
            <style>${res.data.css}</style>
            <script>${res.data.js}</script>
            <script>
              $(function () {
                $('[data-toggle="tooltip"]').tooltip()
              })
            </script>
            <script>
              function copyAddress() {
                /* Get the text field */
                var copyText = document.getElementsByClassName("copy-to-clipboard-address-button")[0];

                console.log(copyText.getAttribute('value'))

                /* Copy the text inside the text field */
                navigator.clipboard.writeText(copyText.getAttribute('value'));

              }
            </script>
          <html>

          `
        )

      })


  }, [])



  // useEffect(() => {
  //
  //   console.log(props.history.location.state.websiteId)
  //   console.log(props.history.location.state.pageId)
  //
  //
  //   const test = document.getElementsByClassName("myclass")
  //   if(test !== null){
  //     for(let i =0; i<test.length; i++){
  //
  //       test[i].addEventListener("click", function(){
  //         activateBrowserWallet()
  //       })
  //     }
  //   }
  //
  //
  //   const js = props.history.location.state.js
  //  eval(js)
  //
  //
  // },[props.history.location.state.html])


  return(
    <div style = {{
        height: '100vh',
        width: '100vw'
      }}>
      {/*parse(html)*/}

      <iframe
        srcDoc = {srcDoc}
        // sandbox= "allow-scripts" // just so that you cant access other codes out side
        title = "output"
        frameBorder = "0"
        width = "100%"
        height = "100%"
         />

    </div>
  )
}
