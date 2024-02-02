import { Dispatch } from "react";
import { AdderState, Field } from "../types";
import { Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { AdderField } from "./AdderField";
import {
  AdderAction,
  addField,
  changeOperator,
  changeValue,
  removeField,
  toggleField,
} from "../store";

type adderProps = {
  state: AdderState;
  dispatch: Dispatch<AdderAction>;
};

export const AdderForm = ({ state, dispatch }: adderProps) => (
  <>
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
    ))}
  </>
);
