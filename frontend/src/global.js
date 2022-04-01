import { Global } from "@emotion/react"

// global.API_ENDPOINT = "http://127.0.0.1:8000"
global.API_ENDPOINT = "https://api.webdotabc.xyz"



// global.FRONTEND_ENDPOINT='https://localhost:3000'
global.FRONTEND_ENDPOINT = "https://webdotabc.xyz"

global.CAPITALIZE = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
