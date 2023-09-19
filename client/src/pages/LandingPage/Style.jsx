import { styled } from "@mui/material"

const MainContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/bg_landingPage.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "black",

  "#content-container":{
    display: "flex",
    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "24px",
  },

  main:{
    padding: "64px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "24px"
  },

  h1: {
    marginTop: "100px",
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#00C3C0"
  },

  "#title-description": {
      textAlign: "left",
      fontSize: "1.3rem",
      maxWidth: "700px",
      marginBottom: "24px"
  },

  "#content-container button":{
    backgroundColor: "#00C3C0",
    borderRadius: "25px",
    padding: "18px 100px",
    fontSize: "1.15rem",
  },

  footer:{
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    padding: "6px",
    backgroundColor: "#00C3C0",
  },

  "footer p":{
    color: "white",
    fontWeight: "bold",
  },

})

export default { MainContainer }
