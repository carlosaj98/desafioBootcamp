import { Container, Button, Typography, Link, Stack, Box } from "@mui/material"
import { useMediaQuery } from "@mui/material"
import { Link as LinkReact } from "react-router-dom"
import Styled from "./Style"
function LandingPage() {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")
  const isTabletScreen = useMediaQuery("(max-width: 900px)")

  return (
    <Styled.MainContainer id="principal-container">
      <Container id="content-container" maxWidth="100vw">
        <Stack
          component="main"
          alignItems="center"
          marginTop="20vh"
          sx={{
            flexDirection: { lg: "row", md: "column" },
            marginTop: { lg: "20vh", md: "5vh" },
          }}
        >
          <Stack
            component="section"
            sx={{
              maxWidth: { lg: "800px", md: "80%" },
              alignItems: { lg: "flex-start", md: "center" },
            }}
          >
            <Typography component="h1">
              Cultural<span>Fit</span>
            </Typography>
            <Typography component="p" id="first-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt nec nibh sit amet euismod. In hac habitasse platea
              dictumst. Duis nec suscipit erat, vitae placerat purus. Etiam eu
              neque at orci aliquam consequat. Duis mattis erat augue.
            </Typography>
            <Typography component="p" id="second-description">
              Duis nec suscipit erat, vitae placerat purus. Etiam eu neque at
              orci aliquam consequat. Duis mattis erat augue, volutpat efficitur
              lorem commodo eu.
            </Typography>
            <LinkReact to="/form">
              <Button variant="contained" sx={{ width: "fit-content" }}>
                Iniciar el test
              </Button>
            </LinkReact>
          </Stack>
          <Box
            id="logo"
            sx={{
              order: { lg: "1", md: "-1" },
              width: { lg: "400px", md: "200px" },
              height: { lg: "400px", md: "200px" },
            }}
          >
            <img src="../../../assets/logoCF.png" alt="" />
          </Box>
        </Stack>
        <Box component="footer">
          <Typography>© All Rights Reserved Cultural Fit Solutions.</Typography>
          <Link href="https://culturalfitsolutions.com/" color="inherit">
            Política de Cookies
          </Link>
          <Link
            href="https://culturalfitsolutions.com/politica-de-privacidad/"
            color="inherit"
          >
            Política de Privacidad
          </Link>
          <Link
            href="https://culturalfitsolutions.com/terminos-y-condiciones-de-uso/"
            color="inherit"
          >
            Términos y Condiciones de Uso
          </Link>
        </Box>
      </Container>
    </Styled.MainContainer>
  )
}
export default LandingPage
