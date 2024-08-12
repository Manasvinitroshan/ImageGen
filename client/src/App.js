import styled, {ThemeProvider} from "@emotion/styled";
import {darkTheme} from "./utils/Theme";
import { Container } from "@mui/material";


function App() {

  return <ThemeProvider>
    <Container>
      <Wrapper>

      </Wrapper>
    </Container>
  </ThemeProvider>
}

export default App;
