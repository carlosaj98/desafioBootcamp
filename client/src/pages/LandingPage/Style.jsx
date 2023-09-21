import { styled } from "@mui/material"

const MainContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
  backgroundImage: "url(/wave.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",


  "#content-container": {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"space-between",
  },

  main: {
    marginTop:"20vh",
    gap: "64px",
  },

  "#logo":{
    width: "400px",
    height: "400px"
  },

  "#logo img":{
    width: "100%",
    height: "auto"
  },

  h1: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "var(--primary-color)",
    fontFamily:"var(--secondary-font)",
  },

  "h1 span":{
    color: "var(--secondary-color)",
  },

  "#first-description": {
    fontFamily:"var(--secondary-font)",
    color:"var(--secondary-color)",
    textAlign: "left",
    fontSize: "1.5rem",
    marginBottom: "24px",
  },

  "#second-description":{
    fontFamily:"var(--primary-font)",
    color:"var(--secondary-color)",
    textAlign: "left",
    fontSize: "1.2rem",
    maxWidth: "800px",
    marginBottom: "24px",
  },

  "#content-container button": {
    backgroundColor: "var(--primary-color)",
    borderRadius: "30px",
    padding: "18px 100px",
    fontFamily:"var(--secondary-font)",
    fontSize: "1.15rem",

  },

  footer: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    padding: "6px",
  },

  "footer p": {
    color: "white",
    fontWeight: "bold",
  },

  "footer a": {
    color: "white",
    fontFamily: "var(--primary-font)",
  },


})

export default { MainContainer }
