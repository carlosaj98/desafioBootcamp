import React from "react"
import ReactDOM from "react-dom/client"
import router from "./router"
import { RouterProvider } from "react-router-dom"
import { GlobalStyles } from "@mui/material"
// import { StyledEngineProvider } from "@mui/material/styles"

const cssNormalize = {
  ":root": {
    "--bg-color": "white",
    "--primary-color": "#00C3C0",
    "--secondary-color": "#34495E",
    "--primary-font": "Montserrat",
    "--secondary-font": "Rubik",
  },
  
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  },
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles styles={cssNormalize} />
    <RouterProvider router={router} />
  </>
)
