import { styled } from "@mui/material"

const MainContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
  backgroundImage: "url(/wave.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",


  "#content-container": {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "#logo img": {
    width: "100%",
    height: "auto",
  },

  h1: {
    fontWeight: "bold",
    color: "var(--secondary-color)",
    fontFamily: "var(--primary-font)",
  },

  "h1 span": {
    color: "var(--primary-color)",
  },

  "#first-description": {
    fontFamily: "var(--secondary-font)",
    color: "var(--secondary-color)",
    marginBottom: "24px",
  },

  "#second-description": {
    fontFamily: "var(--primary-font)",
    color: "var(--secondary-color)",
    maxWidth: "800px",
    marginBottom: "24px",
  },

  "#content-container button": {
    backgroundColor: "var(--primary-color)",
    borderRadius: "30px",
    fontFamily: "var(--secondary-font)",
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

  "@keyframes heartbeat": {
    from: {
      transform: "scale(1)",
      transformOrigin: "center center",
      animationTimingFunction: "ease-out",
    },
    "10%": { transform: "scale(.91)", animationTimingFunction: "ease-in" },
    "17%": { transform: "scale(.98)", animationTimingFunction: "ease-out" },
    "33%": { transform: "scale(.87)", animationTimingFunction: "ease-in" },
    "50%": { transform: "scale(1)", animationTimingFunction: "ease-out" },
  },

  ".heartbeat": { animation: "heartbeat 1.5s ease-in-out 2s infinite both" },
  ".heartbeat:hover": { animation: "heartbeat 0s" },
})

export default { MainContainer }
