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
import { useEffect } from "react";
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AgGridReact } from 'ag-grid-react';
// import Style from "./Style";

const data = [{
  "ARQind": [
    17.46,
    14.29,
    22.22,
    18.25,
    12.7,
    15.08
  ],
  "arqTITULO": [
    "People",
    "Innovation",
    "Goals",
    "Norms",
    "Digital",
    "ESG"
  ],
  "arqTEXTO": [
    "Mentalidad enfocada en el bienestar y el desarrollo de las personas, el mantenimiento de un clima laboral positivo y unas buenas relaciones de trabajo. Ello la lleva a que la cohesión y la satisfacción propia y de los demás primen sobre otros objetivos. Áreas de alto encaje: Recursos Humanos (RRHH), Servicio al Cliente, Comunicaciones Corporativas, Relaciones Públicas.",
    "Mentalidad dinámica, creativa, autónoma, orientada a la innovación, y que presente tolerancia al riesgo y atrevimiento a la hora de actuar. Promueve la generación de ideas innovadoras, el cambio positivo y la disposición para tomar riesgos. Áreas de alto encaje: Desarrollo de Productos , Investigación y Desarrollo (I+D), Tecnología de la Información (TI), Consultoría.",
    "Mentalidad caracterizada por una orientación clara hacia los resultados, la excelencia y competitidad. Resuelve problemas de manera pragmática con ambición y habilidades de liderazgo. Enfoque en el logro de metas y objetivos, impulsando el éxito y la eficacia en el trabajo. Áreas de alto encaje: Ventas, Marketing, Desarrollo Empresarial, Gestión de Proyectos.",
    "Mentalidad orientada hacia el cumplimiento de las normas y la burocracia, enfatizando la seguridad, la predictibilidad, el orden y el control. Especial apego a la existencia de normas estrictas, procedimientos, manuales, y por mantener una noción muy estricta de la jerarquía. Áreas de alto encaje: Finanzas y Contabilidad, Jurídico y Cumplimiento, Control de Calidad, Compras.",
    "Mentalidad de gran apertura al cambio,  analítica y que enfatiza la adaptación al cliente mediante el aprendizaje continuo y la tolerancia al fallo. Ello la lleva a fomentar y valorar especialmente la cooperación y disposición tantio propia como de sus colaboradores para compartir conocimientos. Áreas de alto encaje: Transformación Digital, Sistemas, Experiencia del Usuario (UX), Diseño de Interfaz de Usuario (UI).",
    "Mentalidad caracterizada por un alto compromiso para con la responsabilidad social y la sostenibilidad. Ello la conduce a esforzarse para lograr unos objetivos sociales y a generar un impacto positivo en el medio ambiente y la sociedad. Áreas de alto encaje: Desarrollo Sostenible, Responsabilidad Social Corporativa (RSC), Asuntos Públicos, Gobierno Corporativo."
  ],
  "valoresTITULO": [
    "Ambición",
    "Autonomía",
    "Eficiencia",
    "Excelencia",
    "Orientación a resultados",
    "Respeto"
  ],
  "valoresTEXTO": [
    "Perseguirá el alcance de metas valiosas y relevantes. Estará motivada por el crecimiento personal y profesional, y buscará desafiarse y conseguir nuevos logros.",
    "Expresará sus opiniones libremente, participará en decisiones y actuará según su criterio. Mostrará autonomía y confianza para contribuir con su perspectiva.",
    "Buscará lograr las metas establecidas con el menor consumo de recursos posible. Será consciente de optimizar los recursos disponibles en la organización.",
    "Cumplirá con los requisitos y especificaciones establecidas con un alto compromiso y esfuerzo, buscando alcanzar los más altos estándares de calidad.",
    "Actuará con velocidad y enfoque para cumplir los objetivos establecidos, tomando las acciones correctivas precisas de la forma más rápida y eficiente.",
    "Valorará y reconocerá a las personas y las cosas. Tratará a los demás con cortesía, consideración y respeto. Promoverá un entorno inclusivo y respetuoso."
  ]
}


];

function ResultPage() {
  useEffect(() => {
    
    const radarData = {
      labels: data[0].arqTITULO,
      datasets: [
        {
          label: "ARQind",
          data: data[0].ARQind,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const radarConfig = {
      type: "radar",
      data: radarData,
    };

    
    const radarCanvas = document.getElementById("radarChart");
    new Chart(radarCanvas, radarConfig);
  }, []);

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
        alignItems={"center"}
          borderRadius={"8px"}
          backgroundColor={"rgba(238, 238, 238, 0.5)"}
          // class="chart-container"
          // style={{ position: "relative" }}
          border={"1px  grey"}
          flex={1}
          marginLeft={{ sm: "10px", xs: "0px" }}
        >
          <canvas id="radarChart" width="400" height="400"></canvas>
        </Box>
        <Box border={"5px solid blue"} flex={1}></Box>
        <Box border={"5px solid blue"} flex={1}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
        
              </TableRow>
            </TableHead>
            <TableBody>
              {data[0].arqTITULO.map((title, index) => (
                <TableRow key={index}>
                  <TableCell>{title}</TableCell>
                  <TableCell>{data[0].arqTEXTO[index]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Box>
        {/* <Box border={"5px solid blue"} flex={1}>
         
        </Box>
        <Box
          marginRight={{ sm: "10px", xs: "0px" }}
          border={"5px solid blue"}
          flex={1}
        >
          
        </Box> */}
      </Stack>
      <Stack
        border="5px solid red"
        alignContent={"flex start"}
        height="40%"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box
          display={"flex"}
          border="5px solid black"
          width="40%"
          flexDirection={{ xs: "row" }}
          justifyContent={{ sm: "center", xs: "end" }}
          alignItems={"center"}
          height={"40vh"}
        >
         tabla2
        </Box>
      </Stack>
      <Stack
        marginBottom={"2%"}
        border="5px solid blue"
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
