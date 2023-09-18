import { styled } from "@mui/material"

const MainContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#34495E",
  color: "white",

  "#content-container":{
    display: "flex",
    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "24px"
  },

  main:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px"
  },

  h1: {
    textAlign: "center",
    marginTop: "100px",
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#00C3C0"
  },

  "#title-description": {
      textAlign: "center",
      fontSize: "1.3rem",
  },

  button:{
    backgroundColor: " #00C3C0",
    borderRadius: "10px"
  },

  footer:{
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "space-between",
    padding: "16px"
  }

})

export default { MainContainer }
