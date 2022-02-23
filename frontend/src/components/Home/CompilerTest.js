import React, { useState, useEffect } from 'react';
import './Compiler.css'
export const CompilerTest = (props) => {

  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {

    const timeout = setTimeout(() => {
      setSrcDoc(
        `
          <html>

            <body>
              <div>
                <a onClick="window.parent.test();" href="#" >Call Me </a>
              </div>
            ${html1}</body>
            <style>${css1}</style>
            <script>${js}</script>
          <html>
        `
      )
    }, 100)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  console.log(props.history.location.state.htmlInfo[0])

  const html1 =props.history.location.state.htmlInfo
  const css1 = props.history.location.state.cssInfo

  const test = () => {
    console.log('stuff here')
  }
  return(
    <div>

      {/*

        */}
      <div className = "pane top-pane">
              </div>

      <div className = "pane">

          <iframe
            srcDoc = {srcDoc}
            // sandbox= "allow-scripts" // just so that you cant access other codes out side
            title = "output"
            frameBorder = "0"
            width = "100%"
            height = "100%"
             />

      </div>



    </div>
  )
}
