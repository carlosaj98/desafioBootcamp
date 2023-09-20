import { Container, Stack, Box, Button, Typography , CircularProgress,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Chart } from "chart.js/auto";
import staticData from "./data.json";

import { useEffect } from "react";

// import Style from "./Style";


const data = [
  { id: 1, name: 'Ejemplo 1', score: 90 },
  { id: 2, name: 'Ejemplo 2', score: 85 },
  { id: 3, name: 'Ejemplo 3', score: 92 },]


function ResultPage() {
  const { culturalFitData, kpisData, desiredCulturalFitData } = staticData;

  const createChart = (containerId, data, chartType) => {
    const ctx = document.getElementById(containerId).getContext("2d");
    new Chart(ctx, {
      type: chartType,
      data: {
        labels: data.labels,
        datasets: [
          {
            label: chartType === "radar" ? "Ajuste Cultural" : "KPIS",
            data: data.values,
            backgroundColor: data.colors,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };

  useEffect(() => {
    createChart("culturalFitChart", culturalFitData, "radar");
    createChart("kpisChart", kpisData, "doughnut");
    createChart("desiredCulturalFitChart", desiredCulturalFitData, "radar");
  }, [culturalFitData, kpisData, desiredCulturalFitData]);

  return (
    // <Style.MainContainer id="main-container">
    <Stack
      border={"10px solid red"}
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      flexDirection={{ sm: "column" }}
      justifyContent={"flex-start"}
    >
      <Stack
        id="logoStack"
        height="6vh"
        border={"5px solid green"}
        direction={"row"}
        alignItems={"center"}
      >
        LOGO
      </Stack>
      <Stack
        id="buttonStack"
        // border="5px solid blue"
        display="flex"
        height="5vh"
        flexDirection="row"
        alignItems="center"
        justifyContent={"center"}
      >
        <Button style={{ borderRadius: "8px" }} variant="contained">
          Perfil cultural
        </Button>
        <Button style={{ borderRadius: "8px" }} variant="outlined">
          KPIS de engagement
        </Button>
      </Stack>
      <Stack
        marginTop={"20px"}
        gap={"10px"}
        border="5px solid pink"
        alignContent={"center"}
        justifyContent={"space-between"}
        flexDirection={{ sm: "row", xs: "column" }}
        height="40vh"
      >
        <Box
          // class="chart-container"
          // style={{ position: "relative" }}
          border={"5px solid blue"}
          flex={1}
          marginLeft={{ sm: "10px", xs: "0px" }}
        >
          <canvas id="culturalFitChart" width="200" height="100"></canvas>
        </Box>
        <Box border={"5px solid blue"} flex={1}>
          <canvas id="kpisChart" width="200" height="100"></canvas>
        </Box>
        <Box
          marginRight={{ sm: "10px", xs: "0px" }}
          border={"5px solid blue"}
          flex={1}
        >
          <canvas
            id="desiredCulturalFitChart"
            width="200"
            height="100"
          ></canvas>
        </Box>
      </Stack>
      <Stack
        border="5px solid red"
        alignContent={"center"}
        height="40%"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display={"flex"}
          // border="5px solid black"
          width="50%"
          justifyContent={"center"}
          alignItems={"center"}
          height={"40vh"}
        >
     <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Puntuación</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Stack>
      <Stack
        // border="5px solid blue"
        display="flex"
        height="5vh"
        alignItems="center"
        justifyContent={"center"}
      >
        <Button
          style={{ borderRadius: "12px" }}
          variant="contained"
          startIcon={<DownloadRoundedIcon />}
        >
          Descarga tus resultados
        </Button>
      </Stack>
    </Stack>
    // </Style.MainContainer>
  );
}

export default ResultPage;
