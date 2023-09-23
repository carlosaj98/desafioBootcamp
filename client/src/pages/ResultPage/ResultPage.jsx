import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Box,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Chart } from "chart.js/auto";
import { useEffect } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faPerson,
  faBolt,
  faMedal,
  faCalendarCheck,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./ModalComponent";


function ResultPage() {
  const listIcons = [
    <FontAwesomeIcon icon={faTrophy} size="xs" />,
    <FontAwesomeIcon icon={faPerson} size="xs" />,
    <FontAwesomeIcon icon={faBolt} size="xs" />,
    <FontAwesomeIcon icon={faMedal} size="xs" />,
    <FontAwesomeIcon icon={faCalendarCheck} size="xs" />,
    <FontAwesomeIcon icon={faHandHoldingHeart} size="xs" />,
  ];

  const data = [
    {
      ARQind: [17.46, 14.29, 22.22, 18.25, 12.7, 15.08],
      arqTITULO: ["People", "Innovation", "Goals", "Norms", "Digital", "ESG"],
      arqTEXTO: [
        "Mentalidad enfocada en el bienestar y el desarrollo de las personas, el mantenimiento de un clima laboral positivo y unas buenas relaciones de trabajo. Ello la lleva a que la cohesión y la satisfacción propia y de los demás primen sobre otros objetivos. Áreas de alto encaje: Recursos Humanos (RRHH), Servicio al Cliente, Comunicaciones Corporativas, Relaciones Públicas.",
        "Mentalidad dinámica, creativa, autónoma, orientada a la innovación, y que presente tolerancia al riesgo y atrevimiento a la hora de actuar. Promueve la generación de ideas innovadoras, el cambio positivo y la disposición para tomar riesgos. Áreas de alto encaje: Desarrollo de Productos , Investigación y Desarrollo (I+D), Tecnología de la Información (TI), Consultoría.",
        "Mentalidad caracterizada por una orientación clara hacia los resultados, la excelencia y competitidad. Resuelve problemas de manera pragmática con ambición y habilidades de liderazgo. Enfoque en el logro de metas y objetivos, impulsando el éxito y la eficacia en el trabajo. Áreas de alto encaje: Ventas, Marketing, Desarrollo Empresarial, Gestión de Proyectos.",
        "Mentalidad orientada hacia el cumplimiento de las normas y la burocracia, enfatizando la seguridad, la predictibilidad, el orden y el control. Especial apego a la existencia de normas estrictas, procedimientos, manuales, y por mantener una noción muy estricta de la jerarquía. Áreas de alto encaje: Finanzas y Contabilidad, Jurídico y Cumplimiento, Control de Calidad, Compras.",
        "Mentalidad de gran apertura al cambio,  analítica y que enfatiza la adaptación al cliente mediante el aprendizaje continuo y la tolerancia al fallo. Ello la lleva a fomentar y valorar especialmente la cooperación y disposición tantio propia como de sus colaboradores para compartir conocimientos. Áreas de alto encaje: Transformación Digital, Sistemas, Experiencia del Usuario (UX), Diseño de Interfaz de Usuario (UI).",
        "Mentalidad caracterizada por un alto compromiso para con la responsabilidad social y la sostenibilidad. Ello la conduce a esforzarse para lograr unos objetivos sociales y a generar un impacto positivo en el medio ambiente y la sociedad. Áreas de alto encaje: Desarrollo Sostenible, Responsabilidad Social Corporativa (RSC), Asuntos Públicos, Gobierno Corporativo.",
      ],
      valoresTITULO: [
        "Ambición",
        "Autonomía",
        "Eficiencia",
        "Excelencia",
        "Orientación a resultados",
        "Respeto",
      ],
      valoresTEXTO: [
        "Perseguirá el alcance de metas valiosas y relevantes. Estará motivada por el crecimiento personal y profesional, y buscará desafiarse y conseguir nuevos logros.",
        "Expresará sus opiniones libremente, participará en decisiones y actuará según su criterio. Mostrará autonomía y confianza para contribuir con su perspectiva.",
        "Buscará lograr las metas establecidas con el menor consumo de recursos posible. Será consciente de optimizar los recursos disponibles en la organización.",
        "Cumplirá con los requisitos y especificaciones establecidas con un alto compromiso y esfuerzo, buscando alcanzar los más altos estándares de calidad.",
        "Actuará con velocidad y enfoque para cumplir los objetivos establecidos, tomando las acciones correctivas precisas de la forma más rápida y eficiente.",
        "Valorará y reconocerá a las personas y las cosas. Tratará a los demás con cortesía, consideración y respeto. Promoverá un entorno inclusivo y respetuoso.",
      ],
    },
  ];

  useEffect(() => {
    const radarData = {
      labels: data[0].arqTITULO,
      datasets: [
        {
          label: "You",
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
      opciones: {
        plugins: {
          legend: {
            labels: {
              fontFamily: "--primary-font",
            },
          },
        },
        scales: {
          r: {
            pointLabels: {
              fontFamily: "--primary-font",
            },
          },
        },
      },
    };

    const radarCanvas = document.getElementById("radarChart");
    new Chart(radarCanvas, radarConfig);
  }, []);

  const ARQind = data[0].ARQind;
  const arqTITULO = data[0].arqTITULO;
  const arqTEXTO = data[0].arqTEXTO;
  console.log(ARQind);
  const SortedARQind = ARQind.slice().sort((a, b) => b - a);
  console.log(SortedARQind);

  const tableStyle = {
    maxWidth: "70%",
    fontFamily: "var(--primary-font)",
  };


  
  return (
    <Stack
      border={"3px solid red"}
      height={"100%"}
      width={"100%"}
      padding={"20px"}
    >
      <Box>Logo</Box>
      <Box
        display={"flex"}
        border={"3px solid"}
        flexDirection={"row"}
        justifyContent={"center"}
        marginBottom={"10px"}
      >
        <Typography fontFamily={"var(--primary-font)"}>
          {" "}
          Tu perfil cultural
        </Typography>
      </Box>
      <Stack
        margin={"10px"}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={"200px"}
      >
        <Box>
          <canvas id="radarChart" width="400" height="400"></canvas>
        </Box>
        <Box>
     
      {/* <ul>
        {SortedARQind.map((valor, index) => (
          <li key={index}>
            <ModalComponent
              title={arqTITULO[ARQind.indexOf(valor)]}
              content={arqTEXTO[ARQind.indexOf(valor)]}
            />
          </li>
        ))}
      </ul> */}
      
    </Box>

        <Box
          marginTop={"50px"}
          style={{ maxWidth: "500px", maxHeight: "300px", overflow: "auto" }}
        >
          {SortedARQind.map((valor, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontFamily={"--primary-font"}>
                  {arqTITULO[ARQind.indexOf(valor)]}
                </Typography>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontFamily={"--primary-font"}>
                  {arqTEXTO[ARQind.indexOf(valor)]}
                </Typography>{" "}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box> 
      </Stack>
      <Box display={"flex"} justifyContent={"center"}>
        <TableContainer component={Paper} style={tableStyle}>
          <Table>
            <TableHead>
              <TableRow> Valores predominantes</TableRow>
            </TableHead>

            <TableBody>
              {data[0].valoresTITULO.map((title, index) => (
                <TableRow key={index}>
                  <TableCell>{listIcons[index]}</TableCell>
                  <TableCell>{title}</TableCell>

                  <TableCell>{data[0].valoresTEXTO[index]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "var(--primary-color)",
            fontFamily: "--secondary-font",
          }}
        >
          Descargar
        </Button>
      </Box>
    </Stack>
  );
}

export default ResultPage;
