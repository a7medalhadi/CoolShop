import { useReducer } from "react";
import { Field } from "../types";
import { Box, Button, Divider, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { AdderField } from "./AdderField";
import {
  addField,
  adderReducer,
  changeOperator,
  changeValue,
  intialAdderState,
  removeField,
  toggleField,
} from "../store";

export const Adder = () => {
  const [state, dispatch] = useReducer(adderReducer, intialAdderState);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        gap: 1,
      }}
    >
      <Button
        endIcon={<AddCircleOutline />}
        onClick={() => dispatch(addField())}
        variant="contained"
        color="primary"
      >
        Add Field
      </Button>
      {state.fields.map((field: Field) => (
        <AdderField
          key={field.id}
          field={field}
          onRemove={() => dispatch(removeField(field.id))}
          onToggleDisable={() => dispatch(toggleField(field.id))}
          onValueChange={(value) => dispatch(changeValue(field.id, value))}
          onOperatorChange={(operator) =>
            dispatch(changeOperator(field.id, operator))
          }
        />
      ))}{" "}
      <Divider sx={{ width: "100%" }} />
      <Typography variant="h6">Total: {state.total}</Typography>
    </Box>
  );
};
