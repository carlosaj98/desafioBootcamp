import React, { useEffect, useState, useRef } from "react"
import axios from "axios"
import { styled } from "@mui/material/styles"
import { Chart } from "chart.js/auto"
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
} from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import logoIcon from "../../../assets/logoCF_text.png"
import goalIcon from "../../../assets/goalssvg.png"
import innoIcon from "../../../assets/inno.png"
import peopleIcon from "../../../assets/people.png"
import sostIcon from "../../../assets/sost.png"
import digitalIcon from "../../../assets/digital.png"
import normsIcon from "../../../assets/norms.png"
import {
    PDFViewer,
    PDFDownloadLink,
    Document,
    Page,
    Text,
    Image,
    View,
} from "@react-pdf/renderer"

function ResultPage() {
    const [data, setData] = useState(null)
    const [urlChart, setUrlChart] = useState("")
    const canvasRef = useRef(null)

    const PDF = () => (
        <Document>
            <Page style={{ padding: "32px" }}>
                <View
                    id="header"
                    style={{
                        width: "100%",
                        borderBottom: "2px solid #34495E",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Image
                        src="/logoCF_text.png"
                        style={{ width: "150px", marginBottom: "24px" }}
                    ></Image>
                    <Text style={{ fontSize: "16px", marginBottom: "8px" }}>
                        TU PERFIL CULTURAL
                    </Text>
                </View>
                <View
                    id="main"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        paddingTop: "24px",
                        gap: "16px",
                    }}
                >
                    <Image src={urlChart} style={{ width: "200px" }}></Image>
                    <View id="ibex" style={{ fontSize: "10px" }}>
                        <Text style={{ marginBottom: "8px", fontSize: "12px" }}>
                            IBEX35: Tus 2 mejores empresas
                        </Text>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                borderBottom: "1px solid black",
                                paddingBottom: "3px",
                            }}
                        >
                            <Text>Nombre</Text>
                            <Text>KPI</Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                borderBottom: "1px solid black",
                                padding: "3px",
                            }}
                        >
                            <Text>{data?.match1_name}</Text>
                            <Text>{data?.match1_kpi}</Text>
                        </View>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                borderBottom: "1px solid black",
                                padding: "3px",
                            }}
                        >
                            <Text>{data?.match2_name}</Text>
                            <Text>{data?.match2_kpi}</Text>
                        </View>
                    </View>
                </View>
                <View
                    id="description"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: "10px",
                                borderBottom: "1px solid black",
                            }}
                        >
                            {data?.arqTITULO[5].toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: "9px" }}>
                            {data?.arqTEXTO[5]}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: "10px",
                                borderBottom: "1px solid black",
                            }}
                        >
                            {data?.arqTITULO[4].toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: "9px" }}>
                            {data?.arqTEXTO[4]}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: "10px",
                                borderBottom: "1px solid black",
                            }}
                        >
                            {data?.arqTITULO[3].toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: "9px" }}>
                            {data?.arqTEXTO[3]}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: "10px",
                                borderBottom: "1px solid black",
                            }}
                        >
                            {data?.arqTITULO[2].toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: "9px" }}>
                            {data?.arqTEXTO[2]}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: "10px",
                                borderBottom: "1px solid black",
                            }}
                        >
                            {data?.arqTITULO[1].toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: "9px" }}>
                            {data?.arqTEXTO[1]}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: "10px",
                                borderBottom: "1px solid black",
                            }}
                        >
                            {data?.arqTITULO[0].toUpperCase()}
                        </Text>
                        <Text style={{ fontSize: "9px" }}>
                            {data?.arqTEXTO[0]}
                        </Text>
                    </View>
                </View>
            </Page>
            <Page style={{ padding: "32px" }}>
                <View
                    id="topvalues"
                    style={{
                        width: "100%",
                        borderBottom: "2px solid #34495E",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Image
                        src="/logoCF_text.png"
                        style={{ width: "150px", marginBottom: "24px" }}
                    ></Image>
                    <Text style={{ fontSize: "16px", marginBottom: "8px" }}>
                        TUS VALORES PREDOMINANTES
                    </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    <View style={{ fontSize: "10px", marginTop: "8px" }}>
                        <Text
                            style={{
                                fontSize: "12px",
                                borderBottom: "1px solid #34495E",
                            }}
                        >
                            {data?.valoresTITULO[0].toUpperCase()}
                        </Text>
                        <Text>{data?.valoresTEXTO[0]}</Text>
                    </View>
                    <View style={{ fontSize: "10px", marginTop: "8px" }}>
                        <Text
                            style={{
                                fontSize: "12px",
                                borderBottom: "1px solid #34495E",
                            }}
                        >
                            {data?.valoresTITULO[1].toUpperCase()}
                        </Text>
                        <Text>{data?.valoresTEXTO[1]}</Text>
                    </View>
                    <View style={{ fontSize: "10px", marginTop: "8px" }}>
                        <Text
                            style={{
                                fontSize: "12px",
                                borderBottom: "1px solid #34495E",
                            }}
                        >
                            {data?.valoresTITULO[2].toUpperCase()}
                        </Text>
                        <Text>{data?.valoresTEXTO[2]}</Text>
                    </View>
                    <View style={{ fontSize: "10px", marginTop: "8px" }}>
                        <Text
                            style={{
                                fontSize: "12px",
                                borderBottom: "1px solid #34495E",
                            }}
                        >
                            {data?.valoresTITULO[3].toUpperCase()}
                        </Text>
                        <Text>{data?.valoresTEXTO[3]}</Text>
                    </View>
                    <View style={{ fontSize: "10px", marginTop: "8px" }}>
                        <Text
                            style={{
                                fontSize: "12px",
                                borderBottom: "1px solid #34495E",
                            }}
                        >
                            {data?.valoresTITULO[4].toUpperCase()}
                        </Text>
                        <Text>{data?.valoresTEXTO[4]}</Text>
                    </View>
                    <View style={{ fontSize: "10px", marginTop: "8px" }}>
                        <Text
                            style={{
                                fontSize: "12px",
                                borderBottom: "1px solid #34495E",
                            }}
                        >
                            {data?.valoresTITULO[5].toUpperCase()}
                        </Text>
                        <Text>{data?.valoresTEXTO[5]}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    )

    useEffect(() => {
        const fetchData = async () => {
            const localStorageData = localStorage.getItem("token")
            try {
                const response = await axios.get(
                    `https://culturalfit.es/api/tb_perfil/${localStorageData}`
                    // "https://culturalfit.es/api/tb_perfil/CF-16956394065365629363604067083"
                )
                const responseData = response.data
                setData(responseData)
            } catch (error) {
                console.error("Error al cargar la data desde la API:", error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (data) {
            // Configurar el gráfico de radar con Chart.js
            const radarData = {
                labels: data.arqTITULO || [],
                datasets: [
                    {
                        data: data.ARQind || [],
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            }
            Chart.defaults.font.family = "Montserrat"
            const radarConfig = {
                type: "radar",
                data: radarData,
                options: {
                    animation: {
                        onComplete: function () {
                            const canvas = canvasRef.current
                            const dataUrlChart = canvas.toDataURL("image/png")
                            setUrlChart(dataUrlChart)
                        },
                    },
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
            }
            const radarCanvas = document.getElementById("radarChart")
            new Chart(radarCanvas, radarConfig)
        }
    }, [data])

    const matchData = data
        ? [
              {
                  name: data.match1_name || "",
                  kpi: data.match1_kpi || "",
              },
              {
                  name: data.match2_name || "",
                  kpi: data.match2_kpi || "",
              },
          ]
        : []

    const ARQind = data ? data.ARQind || [] : []
    const SortedARQind = ARQind.slice().sort((a, b) => b - a)

    const accordionStyle = {
        boxShadow: "none",
    }

    const tableStyle = {
        maxWidth: "70%",
        boxShadow: "none",
    }

    const tableCellStyle = {
        fontFamily: "var(--primary-font)",
        fontSize: "16px",
        color: "var(--secondary-color)",
    }

    const typographyStyle = {
        fontFamily: "var(--secondary-font)",
        color: "var(--secondary-color)",
        fontWeight: "bold",
    }

    const CustomAccordionDetails = styled(AccordionDetails)`
        max-height: 350px;
        overflow: hidden;
    `
    const typographyStyleAccordion = {
        fontFamily: "var(--secondary-font)",
        color: "#34495E",
    }

    const iconStyles = {
        width: "40px",
        height: "40px",
    }
    const iconsByTitle = {
        People: <img src={peopleIcon} alt="People" style={iconStyles} />,
        Innovation: <img src={innoIcon} alt="Innovation" style={iconStyles} />,
        Goals: <img src={goalIcon} alt="Goals" style={iconStyles} />,
        Norms: <img src={normsIcon} alt="ESG" style={iconStyles} />,
        Digital: <img src={digitalIcon} alt="Digital" style={iconStyles} />,
        ESG: <img src={sostIcon} alt="Norms" style={iconStyles} />,
    }
    const logoStyle = {
        height: "auto",
        maxWidth: "100%",
    }
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
                    height={{ xs: "300px", sm: "400px" }}
                    width={{ xs: "300px", sm: "400px" }}
                >
                    <canvas
                        id="radarChart"
                        ref={canvasRef}
                        width="100%"
                        height="100%"
                    ></canvas>
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
                                    <TableCell style={tableCellStyle}>
                                        Nombre
                                    </TableCell>
                                    <TableCell style={tableCellStyle}>
                                        KPI
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {matchData.map((match, index) => (
                                    <TableRow key={index}>
                                        <TableCell style={tableCellStyle}>
                                            {match.name}
                                        </TableCell>
                                        <TableCell style={tableCellStyle}>
                                            {match.kpi}
                                        </TableCell>
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
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    {
                                        iconsByTitle[
                                            data?.arqTITULO?.[
                                                ARQind.indexOf(valor)
                                            ]
                                        ]
                                    }
                                    <Typography
                                        style={{
                                            marginLeft: "10px",
                                            ...typographyStyleAccordion,
                                        }}
                                    >
                                        {
                                            data?.arqTITULO?.[
                                                ARQind.indexOf(valor)
                                            ]
                                        }
                                    </Typography>
                                </div>
                            </AccordionSummary>
                            <CustomAccordionDetails>
                                <Typography fontFamily={"var(--primary-font)"}>
                                    {data?.arqTEXTO?.[ARQind.indexOf(valor)]}
                                </Typography>
                            </CustomAccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Stack>
            <Box display={"flex"} justifyContent={"center"}>
                <PDFDownloadLink document={<PDF/>}>
                    <Button
                        variant="contained"
                        style={{
                            borderRadius: "8px",
                            boxShadow: "none",
                            backgroundColor: "var(--secondary-color)",
                            fontFamily: "var(--primary-font)",
                        }}
                    >
                        <SvgIcon
                            style={{ marginRight: "3px" }}
                            component={EmailIcon}
                            inheritViewBox
                        />
                        Descargar Informe
                    </Button>
                </PDFDownloadLink>
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
                            {data?.valoresTITULO?.map((title, index) => (
                                <TableRow
                                    key={index}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
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
                                        {data?.valoresTEXTO?.[index]}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Stack>
    )
}

export default ResultPage
