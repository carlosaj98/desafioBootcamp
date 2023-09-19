import { Container, Stack,Box } from "@mui/material";
import { Chart } from "chart.js";


function ResultPage() {

  
  return (
    <Container
      sx={{
        border: "5px solid red",
        display: "flex",
        width: "100vw",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Stack height="6vh"border={"5px solid black"} direction={"row"} alignItems={"center"}>
        LOGO
      </Stack>
      <Stack
        border="5px solid blue"
        display="flex"
        height="5vh"
        flexDirection="column"
        alignItems="center"
      >
        BOTON
      </Stack>
      <Stack border="5px solid red"
      alignContent={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      height="40vh">
        <Box border={"5px solid blue"} flex={1}
        >

        </Box>
        <Box border={"5px solid blue"} flex={1}
        >
         Grafico1 
        </Box>
        <Box border={"5px solid blue"} flex={1}
        >
         Grafico1 
        </Box>
      </Stack>
    </Container>
  );
}

export default ResultPage;
