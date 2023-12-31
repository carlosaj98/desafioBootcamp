import { Container, Button, Typography, Link, Stack, Box } from "@mui/material"
import { useMediaQuery } from "@mui/material"
import { Link as LinkReact } from "react-router-dom"
import "animate.css"
import Styled from "./Style"
function LandingPage() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  return (
    <Styled.MainContainer id="principal-container">
      <Container
        id="content-container"
        className="animate__animated animate__zoomIn"
        maxWidth="100vw"
      >
        <Stack
          component="main"
          alignItems="center"
          marginTop="20vh"
          sx={{
            flexDirection: { lg: "row", xs: "column" },
            marginTop: { lg: "20vh", xs: "5vh" },
            textAlign: { lg: "left", xs: "center" },
          }}
        >
          <Stack
            component="section"
            sx={{
              maxWidth: { lg: "800px", xs: "90%" },
              alignItems: { lg: "flex-start", xs: "center" },
            }}
          >
            {!isMobileScreen && (
              <Typography
                component="h1"
                sx={{ fontSize: { lg: "5rem", xs: "3.5rem" } }}
              >
                Cultural<span>Fit</span>
              </Typography>
            )}

            <Typography
              component="p"
              id="first-description"
              sx={{ fontSize: { lg: "1.5rem", xs: "1.2rem" } }}
            >
              ¿Te interesaría descubrir tus valores en el entorno laboral?
              <br />
              Nosotros te ayudamos evaluando estos valores permitiéndote tomar
              decisiones más informadas y precisas destinadas a conocer tu
              empresa ideal.
            </Typography>
            <Typography
              component="p"
              id="second-description"
              sx={{ fontSize: { lg: "1.2rem", xs: "1rem" } }}
            >
              Esta herramienta te brinda unos datos con los que comprender y
              definir de manera nítida los valores que te caracterizan en todo
              momento. 
              <br />
              ¡Realiza nuestro test y descúbrelos!
            </Typography>
            <LinkReact to="/form">
              <Button
                variant="contained"
                className="heartbeat"
                sx={{
                  width: "fit-content",
                  fontSize: { lg: "1.15rem", xs: "1rem" },
                  padding: { lg: "18px 100px", xs: "18px 75px" },
                }}
              >
                Iniciar el test
              </Button>
            </LinkReact>
          </Stack>
          <Box
            id="logo"
            sx={{
              order: { lg: "1", xs: "-1" },
              width: { lg: "400px", sm: "150px", xs: "300px" },
              height: { lg: "400px", sm: "150px", xs: "150px" },
            }}
          >
            {!isMobileScreen ? (
              <img src="/logoCF.png" alt="" />
            ) : (
              <img src="/logoCF_text.png" alt="" />
            )}
          </Box>
        </Stack>
        <Box component="footer">
          <Typography sx={{ fontSize: { lg: "1rem", xs: "0.75rem" } }}>
            © All Rights Reserved Cultural Fit Solutions.
          </Typography>
          <Link
            href="https://culturalfitsolutions.com/"
            color="inherit"
            sx={{ fontSize: { lg: "1rem", xs: "0.75rem" } }}
          >
            Política de Cookies
          </Link>
          <Link
            href="https://culturalfitsolutions.com/politica-de-privacidad/"
            color="inherit"
            sx={{ fontSize: { lg: "1rem", xs: "0.75rem" } }}
          >
            Política de Privacidad
          </Link>
          <Link
            href="https://culturalfitsolutions.com/terminos-y-condiciones-de-uso/"
            color="inherit"
            sx={{ fontSize: { lg: "1rem", xs: "0.75rem" } }}
          >
            Términos y Condiciones de Uso
          </Link>
        </Box>
      </Container>
    </Styled.MainContainer>
  )
}
export default LandingPage
