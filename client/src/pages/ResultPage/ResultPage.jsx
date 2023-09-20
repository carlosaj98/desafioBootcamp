import {
  Container,
  Stack,
  Box,
  Button,
  Typography,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Chart } from "chart.js/auto";
import staticData from "./data.json";

import { useEffect } from "react";

// import Style from "./Style";

const data = [
  { id: 1, name: "Ejemplo 1", score: 90 },
  { id: 2, name: "Ejemplo 2", score: 85 },
  { id: 3, name: "Ejemplo 3", score: 92 },
];

function ResultPage() {
  const { culturalFitData, desiredCulturalFitData } = staticData;

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

  const calculatePercentage = (data) => {
    const total = data.values.reduce((acc, value) => acc + value, 0);
    return data.values.map((value) => ((value / total) * 100).toFixed(2));
  };

  useEffect(() => {
    createChart("culturalFitChart", culturalFitData, "radar");
    createChart("desiredCulturalFitChart", desiredCulturalFitData, "radar");

    const culturalFitPercentage = calculatePercentage(culturalFitData);
    const desiredCulturalFitPercentage = calculatePercentage(
      desiredCulturalFitData
    );

    createDonutChart(
      "culturalFitDonutChart",
      culturalFitPercentage,
    );
    createDonutChart(
      "desiredCulturalFitDonutChart",
      desiredCulturalFitPercentage,
    );
  }, [culturalFitData, desiredCulturalFitData]);

  const createDonutChart = (containerId, data) => {
    const average = data.reduce((sum, value) => sum + parseFloat(value), 0) / data.length;
    const averagePercentage = (average / data.reduce((sum, value) => sum + parseFloat(value), 0)) * 100;

    const ctx = document.getElementById(containerId).getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Average"],
        datasets: [
          {
            data: [averagePercentage.toFixed(2)],
            backgroundColor: ["lightgreen"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const value = context.parsed;
                return `${value.toFixed(2)}%`;
              },
            },
          },
          datalabels: {
            formatter: (value, context) => {
              return `${value}%`;
            },
            color: "white",
            anchor: "center",
            align: "center",
            font: {
              size: 14,
            },
          },
        },
      },
    });
  };

  return (
    // <Style.MainContainer id="main-container">
    <Stack
      backgroundColor={"#white"}
      // border={"10px solid red"}
      display={"flex"}
      width={"100vw"}
      height={"100vh"}
      flexDirection={{ sm: "column" }}
      justifyContent={"flex-start"}
    >
      <Stack
        padding={"10px"}
        id="logoStack"
        height="7%"
        border={"5px solid green"}
        direction={"row"}
        alignItems={"center"}
      >
        LOGO
      </Stack>
      <Stack
        marginTop={"10px"}
        id="buttonStack"
        // border="5px solid blue"
        display="flex"
        height="5vh"
        flexDirection="row"
        alignItems="center"
        justifyContent={"center"}
      >
        <Button
          style={{ borderRadius: "8px", backgroundColor: "#00C3C0" }}
          variant="contained"
          size="small"
        >
          Perfil cultural
        </Button>
        <Button style={{ borderRadius: "8px" }} variant="outlined" size="small">
          KPIS de engagement
        </Button>
      </Stack>
      <Stack
        marginTop={"20px"}
        gap={"10px"}
        // border="5px solid pink"
        alignContent={"center"}
        justifyContent={"space-between"}
        flexDirection={{ sm: "row", xs: "column" }}
        height="40vh"
      >
        <Box
          borderRadius={"8px"}
          backgroundColor={"rgba(238, 238, 238, 0.5)"}
          // class="chart-container"
          // style={{ position: "relative" }}
          border={"1px  grey"}
          flex={1}
          marginLeft={{ sm: "10px", xs: "0px" }}
        >
          <canvas id="culturalFitChart" width="200" height="100"></canvas>
        </Box>
        <Box border={"5px solid blue"} flex={1}>
          <canvas id="culturalFitDonutChart" width="200" height="100"></canvas>
        </Box>
        <Box border={"5px solid blue"} flex={1}>
          <canvas
            id="desiredCulturalFitDonutChart"
            width="200"
            height="100"
          ></canvas>
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
        // border="5px solid red"
        alignContent={"center"}
        height="40%"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          display={"flex"}
          // border="5px solid black"
          width="40%"
          flexDirection={{xs:"row"}}
          justifyContent={{sm:"center", xs:"end"}}
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
        marginBottom={"2%"}
        // border="5px solid blue"
        display="flex"
        height="5vh"
        alignItems="center"
        justifyContent={"center"}
      >
        <Button
          style={{ borderRadius: "12px", backgroundColor: "#00C3C0" }}
          variant="contained"
          startIcon={<DownloadRoundedIcon />}
          size="small"
        >
          Descargar
        </Button>
      </Stack>
    </Stack>
    // </Style.MainContainer>
  );
}

export default ResultPage;
