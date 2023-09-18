import React from "react"
import ReactDOM from "react-dom/client"
import router from "./router"
import { RouterProvider } from "react-router-dom"
import { GlobalStyles } from "@mui/material"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles
      styles={{
        "*": {
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        },
      }}
    />
    <RouterProvider router={router} />
  </>
)
