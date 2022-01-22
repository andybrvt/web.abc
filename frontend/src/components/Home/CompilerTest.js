import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import './Compiler.css'
export const CompilerTest = () => {

  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJs] = useState("")
  const [srcDoc, setSrcDoc] = useState("")

  useEffect(() => {

    const timeout = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          <html>
        `
      )
    }, 100)

    return () => clearTimeout(timeout)
  }, [html, css, js])


  return(
    <div>

      <div className = "pane top-pane">
        <Editor
          language = "xml"
          displayName="HTML"
          value = {html}
          onChange = {setHtml} />
        <Editor
          language = "css"
          displayName="CSS"
          value = {css}
          onChange = {setCss}
           />
        <Editor
          language = "javascript"
          displayName="JS"
          value = {js}
          onChange = {setJs}
           />
      </div>

      <div className = "pane">

          <iframe
            srcDoc = {srcDoc}
            sandbox= "allow-scripts" // just so that you cant access other codes out side
            title = "output"
            frameBorder = "0"
            width = "100%"
            height = "100%"
             />
      </div>



    </div>
  )
}
