import { Container } from "@mui/material";
import { Adder } from "./components";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Adder />
    </Container>
  );
}

export default App;
