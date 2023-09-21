import { Container, Button, Typography, Link, Stack, Box } from "@mui/material"
import { Link as LinkReact } from "react-router-dom"
import Styled from "./Style"
function LandingPage() {
  return (
    <Styled.MainContainer id="principal-container">
      <Container id="content-container" maxWidth="100vw" disableGutters>
        <Stack
          component="main"
          alignItems="center"
          sx={{ flexDirection: { xl: "row", md: "column" } }}
        >
          <Box component="section" maxWidth= "800px">
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
              Duis nec suscipit erat, vitae placerat purus. Etiam eu
              neque at orci aliquam consequat. Duis mattis erat augue, volutpat
              efficitur lorem commodo eu.
            </Typography>
            <LinkReact to="/form">
              <Button variant="contained" sx={{ width: "fit-content" }}>
                Iniciar el test
              </Button>
            </LinkReact>
          </Box>
          <Box id="logo">
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
