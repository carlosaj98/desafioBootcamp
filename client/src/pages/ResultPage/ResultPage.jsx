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


import { Chart } from "chart.js/auto";
import { useEffect } from "react";

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

    const radarConfig = {
      type: "radar",
      data: radarData,
      options: {
        plugins: {
          legend: {
            labels: {
              fontFamily: "var(--primary-font)",
            },
          },
        },
        scales: {
          r: {
            pointLabels: {
              fontFamily: "var(--primary-font)",
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

  const accordionStyle = {
    boxShadow: "none",
    border: "1px  grey",
  };

  const tableStyle = {
    maxWidth: "70%",
    border: "1px black",
    boxShadow: "none",
  };

  const tableCellStyle = {
    fontFamily: "--primary-font",
    fontSize: "16px",
  };

  const typographyStyle = {
    fontFamily: "--secondary-font",
    color: "--secondary-color",
    fontWeight: "bold",
  };

  const CustomAccordionDetails = styled(AccordionDetails)`
 
  maxHeight: 350px;
  overflow: auto;

 
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "lightgray",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
`;
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
      <Box
        display={"flex"}
        border={"3px #34495e solid"}
        flexDirection={"row"}
        justifyContent={"center"}
        marginBottom={"10px"}
        backgroundColor={"#34495e"}
      ></Box>
      <Box>
        <img src={logoIcon} alt="culturalFit" style={logoStyle} />
      </Box>
      <Box
        display={"flex"}
        border={"3px #34495e solid"}
        flexDirection={"row"}
        justifyContent={"center"}
        marginBottom={"10px"}
        backgroundColor={"#34495e"}
      >
        <Typography
          variant="h2"
          fontFamily={"var(--primary-font)"}
          fontSize={"30px"}
          color={"var(--primary-color)"}
        >
          Tu perfil cultural
        </Typography>
      </Box>
      <Stack
        margin={"70px"}
        flexDirection={"row"}
        justifyContent={"center"}
        gap={"150px"}
      >
        <Box>
          <canvas id="radarChart" width="400" height="400"></canvas>
        </Box>
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <Typography style={typographyStyle}>Match con empresas</Typography>
          <TableContainer component={Paper} style={tableStyle}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>KPI</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {matchData.map((match, index) => (
                  <TableRow key={index}>
                    <TableCell>{match.name}</TableCell>
                    <TableCell>{match.kpi}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
       
        <Box
          marginTop={"50px"}
          style={{
            maxWidth: "500px",
            height: "400px",
            overflow: "auto",

            borderRadius: "8px",
          }}
        >
          {SortedARQind.map((valor, index) => (
            <Accordion key={index} style={accordionStyle}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {iconsByTitle[arqTITULO[ARQind.indexOf(valor)]]}
                  <Typography
                    style={{ marginLeft: "10px", ...typographyStyle }}
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
        <TableContainer component={Paper} style={tableStyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Valores predominantes</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data[0].valoresTITULO.map((title, index) => (
                <TableRow key={index}>
                  <TableCell style={tableCellStyle}></TableCell>
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
      <Box display={"flex"} justifyContent={"center"} marginTop={"10px"}>
        <Button
          variant="contained"
          style={{
            borderRadius: "8px",
            boxShadow: "none",
            backgroundColor: "var(--primary-color)",
            fontFamily: "--primary-font",
          }}
        >
          Enviar por email
        </Button>
      </Box>
    </Stack>
  );
}

export default ResultPage;
