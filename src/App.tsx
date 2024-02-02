import { useReducer } from "react";
import { AdderState, Field } from "./types";
import { adderReducer } from "./store";
import { Box, Container, Divider, Typography } from "@mui/material";
import { AdderForm } from "./components";

function App() {
  const initialAdderState: AdderState = {
    fields: [
      {
        id: 0,
        disabled: false,
        operator: "+",
        value: 5,
      },
    ],
  };
  const [state, dispatch] = useReducer(adderReducer, initialAdderState);

  const total: number = state.fields.reduce((acc: number, field: Field) => {
    if (!isNaN(field.value) && !field.disabled) {
      return field.operator === "+" ? acc + field.value : acc - field.value;
    }
    return acc;
  }, 0);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 10,
          gap: 1,
        }}
      >
        <AdderForm state={state} dispatch={dispatch} />
        <Divider sx={{ width: "100%" }} />
        <Typography variant="h6">Total: {total}</Typography>
      </Box>
    </Container>
  );
}

export default App;
