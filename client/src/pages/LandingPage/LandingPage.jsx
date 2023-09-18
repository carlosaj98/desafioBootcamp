import { Container, Button, Typography, Link } from "@mui/material"
import Styled from "./Style"
function LandingPage() {
  return (
    <Styled.MainContainer id="main-container">
      <Container id="content-container">
        <main>
          <Typography component="h1">CulturalFit</Typography>
          <Typography component="p" id="title-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tincidunt nec nibh sit amet euismod. In hac habitasse platea
            dictumst. Duis nec suscipit erat, vitae placerat purus. Etiam eu
            neque at orci aliquam consequat. Duis mattis erat augue, volutpat
            efficitur lorem commodo eu. Duis tincidunt, odio id condimentum
            dignissim, turpis ipsum posuere massa, at vestibulum nisl enim
            vehicula risus. Vestibulum eleifend eu felis maximus aliquam.
            Aliquam erat volutpat. Aenean elit nisl, gravida ac faucibus sit
            amet, venenatis eu elit. Donec iaculis nec risus sit amet finibus.
            Ut imperdiet lacus a libero consectetur scelerisque. Morbi quis
            bibendum eros, quis ornare est. Sed in pellentesque arcu, ut posuere
            nibh.
          </Typography>
          <Button variant="contained" sx={{ width: "fit-content" }}>
            Iniciar el test
          </Button>
        </main>

        <footer>
          <Typography>Copyright</Typography>
          <Link>About us</Link>
          <Link>Contact</Link>
        </footer>
      </Container>
    </Styled.MainContainer>
  )
}
export default LandingPage
