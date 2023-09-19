import { Container, Stack, Box, Button } from "@mui/material";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
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
      <Stack
        height="6vh"
        border={"5px solid black"}
        direction={"row"}
        alignItems={"center"}
      >
        LOGO
      </Stack>
      <Stack
        // border="5px solid blue"
        display="flex"
        height="5vh"
        flexDirection="row"
        alignItems="center"
        justifyContent={"center"}
      >
        <Button style={{ borderRadius: '12px' }} variant="contained">Contained</Button>
        <Button style={{ borderRadius: '12px' }}variant="outlined">Outlined</Button>
      </Stack>
      <Stack
        border="5px solid red"
        alignContent={"center"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        height="40vh"
      >
        <Box border={"5px solid blue"} flex={1}></Box>
        <Box border={"5px solid blue"} flex={1}>
          Grafico1
        </Box>
        <Box border={"5px solid blue"} flex={1}>
          Grafico1
        </Box>
      </Stack>
      <Stack
        border="5px solid red"
        alignContent={"center"}
        height="40vh"
        flexDirection="column"
        alignItems="center"
      >
        <Box border="5px solid red">cuadricula resultados</Box>
      </Stack>
      <Stack
        // border="5px solid blue"
        display="flex"
        height="5vh"
       
        alignItems="center"
        justifyContent={"center"}
      >
        <Button style={{ borderRadius: '12px' }} variant="contained"  startIcon={< DownloadRoundedIcon />}>Download</Button>
      
      </Stack>
    </Container>
  );
}

export default ResultPage;
