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
  SvgIcon,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import logoIcon from "../../../assets/logoCF_text.png";
import goalIcon from "../../../assets/goalssvg.png";
import innoIcon from "../../../assets/inno.png";
import peopleIcon from "../../../assets/people.png";
import sostIcon from "../../../assets/sost.png";
import digitalIcon from "../../../assets/digital.png";
import normsIcon from "../../../assets/norms.png";

function ResultPage() {
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
      match1_name: "ENAGAS",
      match1_kpi: "85%",
      match2_name: "FERROVIAL",
      match2_kpi: "68%",
    },
  ];
  const matchData = [
    {
      name: data[0].match1_name,
      kpi: data[0].match1_kpi,
    },
    {
      name: data[0].match2_name,
      kpi: data[0].match2_kpi,
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
    Chart.defaults.font.family = "Montserrat";
    const radarConfig = {
      type: "radar",
      data: radarData,
      options: {
        plugins: {
          legend: {
            display: false,
          },
          responsive: true,
        },
        scales: {
          r: {
            ticks: {
              display: false,
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
  const SortedARQind = ARQind.slice().sort((a, b) => b - a);

  const accordionStyle = {
    boxShadow: "none",
  };

  const tableStyle = {
    maxWidth: "70%",

    boxShadow: "none",
  };

  const tableCellStyle = {
    fontFamily: "var(--primary-font)",
    fontSize: "16px",
    color: "var(--secondary-color)",
  };

  const typographyStyle = {
    fontFamily: "var(--secondary-font)",
    color: "var--(secondary-color)",
    fontWeight: "bold",
  };

  const CustomAccordionDetails = styled(AccordionDetails)`
    max-height: 350px;
    overflow: hidden;
  `;
  const typographyStyleAccordion = {
    fontFamily: "var(--secondary-font)",
    color: "#34495E",
  };

  const iconStyles = {
    width: "40px",
    height: "40px",
  };
  const iconsByTitle = {
    People: <img src={peopleIcon} alt="People" style={iconStyles} />,
    Innovation: <img src={innoIcon} alt="Innovation" style={iconStyles} />,
    Goals: <img src={goalIcon} alt="Goals" style={iconStyles} />,
    Norms: <img src={normsIcon} alt="ESG" style={iconStyles} />,
    Digital: <img src={digitalIcon} alt="Digital" style={iconStyles} />,
    ESG: <img src={sostIcon} alt="Norms" style={iconStyles} />,
  };
  const logoStyle = {
    height: "auto",
    maxWidth: "100%",
  };
  return (
    <Stack height={"100%"} width={"100%"} padding={"20px"}>
      <Box>
        <img src={logoIcon} alt="culturalFit" style={logoStyle} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={{ sm: "row", xs: "column" }}
        justifyContent={{ sm: "center" }}
        marginBottom={"10px"}
        borderBottom={"2px solid var(--secondary-color)"}
        padding={"1.5rem"}
      >
        <Typography
          variant="h2"
          fontFamily={"var(--secondary-font)"}
          fontSize={"30px"}
          color={"var(--secondary-color)"}
        >
          Tu perfil cultural
        </Typography>
      </Box>
      <Stack
        marginBottom={"24px"}
        alignItems={"center"}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        gap={{ xs: "40px", sm: "64px" }}
      >
        <Box
          height={{ xs: "250px", sm: "400px" }}
          width={{ xs: "200px", sm: "400px" }}
        >
          <canvas id="radarChart" width="100%" height="100%"></canvas>
        </Box>
        <Box
          style={{
            textAlign: "center",
          }}
        >
          <Typography style={typographyStyle}>
            IBEX35: Tus 2 mejores empresas
          </Typography>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "none", typographyStyle }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={tableCellStyle}>Nombre</TableCell>
                  <TableCell style={tableCellStyle}>KPI</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matchData.map((match, index) => (
                  <TableRow key={index}>
                    <TableCell style={tableCellStyle}>{match.name}</TableCell>
                    <TableCell style={tableCellStyle}>{match.kpi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          style={{
            maxWidth: "500px",
            height: "400px",
            overflow: "auto",
          }}
        >
          {SortedARQind.map((valor, index) => (
            <Accordion key={index} style={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {iconsByTitle[arqTITULO[ARQind.indexOf(valor)]]}
                  <Typography
                    style={{ marginLeft: "10px", ...typographyStyleAccordion }}
                  >
                    {arqTITULO[ARQind.indexOf(valor)]}
                  </Typography>
                </div>
              </AccordionSummary>
              <CustomAccordionDetails>
                <Typography fontFamily={"--primary-font"}>
                  {arqTEXTO[ARQind.indexOf(valor)]}
                </Typography>
              </CustomAccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Stack>
      <Box display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
          style={{
            borderRadius: "8px",
            boxShadow: "none",
            backgroundColor: "var(--secondary-color)",
            fontFamily: "var--(primary-font)",
          }}
        >
          <SvgIcon
            style={{ marginRight: "3px" }}
            component={EmailIcon}
            inheritViewBox
          />
          Enviar informe
        </Button>
      </Box>
      <Box
        borderBottom={"2px solid var(--secondary-color)"}
        padding={"1.5rem"}
      ></Box>
      <Box
        style={{
          alignText: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography style={typographyStyle} textAlign="center">
          Tus valores predominantes
        </Typography>
        <TableContainer component={Paper} style={tableStyle}>
          <Table>
            <TableBody>
              {data[0].valoresTITULO.map((title, index) => (
                <TableRow
                  key={index}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <TableCell
                    style={{
                      fontFamily: "var(--primary-font)",
                      color: "Black",
                      fontWeight: "bold",
                    }}
                  >
                    {title}
                  </TableCell>

                  <TableCell style={tableCellStyle}>
                    {data[0].valoresTEXTO[index]}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
  );
}

export default ResultPage;
