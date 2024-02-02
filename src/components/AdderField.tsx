import { Field, Operator } from "../types";
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";

interface AdderFieldProps {
  field: Field;
  onRemove: () => void;
  onToggleDisable: () => void;
  onValueChange: (value: number) => void;
  onOperatorChange: (value: Operator) => void;
}

export const AdderField = ({
  field,
  onRemove,
  onValueChange,
  onOperatorChange,
  onToggleDisable,
}: AdderFieldProps) => {
  return (
    <Grid container spacing={2} sx={{ alignItems: "center" }}>
      <Grid item>
        <Select
          onChange={(e) => onOperatorChange(e.target.value as Operator)}
          value={field.operator}
          disabled={field.disabled}
        >
          <MenuItem value="+">+</MenuItem>
          <MenuItem value="-">-</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <TextField
          onChange={(e) => onValueChange(Number(e.target.value))}
          type="number"
          value={field.value}
          disabled={field.disabled}
        />
      </Grid>
      <Grid item>
        <Button onClick={onRemove}>Delete</Button>
        <Button onClick={onToggleDisable}>
          {field.disabled ? "Enable" : "Disable"}
        </Button>
      </Grid>
    </Grid>
  );
};
