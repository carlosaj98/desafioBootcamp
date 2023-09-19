import { Container, Button, Typography, Link } from "@mui/material"
import Styled from "./Style"
function LandingPage() {
    return (
        <Styled.MainContainer id="main-container">
            <Container id="content-container" maxWidth="100vw" disableGutters>
                <main>
                    <Typography component="h1">CulturalFit</Typography>
                    <Typography component="p" id="title-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis tincidunt nec nibh sit amet euismod. In hac
                        habitasse platea dictumst. Duis nec suscipit erat, vitae
                        placerat purus. Etiam eu neque at orci aliquam
                        consequat. Duis mattis erat augue, volutpat efficitur
                        lorem commodo eu.
                    </Typography>
                    <Button variant="contained" sx={{ width: "fit-content" }}>
                        Iniciar el test
                    </Button>
                </main>
                <footer>
                    <Typography>Copyright</Typography>
                    <Typography>About us</Typography>
                    <Typography>Contact</Typography>
                </footer>
            </Container>
        </Styled.MainContainer>
    )
}
export default LandingPage
