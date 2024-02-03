import { AdderAction } from "./actions";
import { AdderState, Field } from "../types";

export const intialAdderState: AdderState = {
  fields: [
    {
      id: 0,
      value: 5,
      operator: "+",
      disabled: false,
    },
  ],
  total: 5,
};

export const adderReducer = (
  state: AdderState,
  action: AdderAction
): AdderState => {
  switch (action.type) {
    case "ADD_FIELD":
      return updateState(state, [...state.fields, action.payload as Field]);

    case "REMOVE_FIELD":
      return updateState(
        state,
        state.fields.filter((field) => field.id !== action.payload.id)
      );

    case "TOGGLE_FIELD":
      return updateState(
        state,
        state.fields.map((field) =>
          field.id === action.payload.id
            ? { ...field, disabled: !field.disabled }
            : field
        )
      );

    case "CHANGE_VALUE":
    case "CHANGE_OPERATOR":
      return updateState(
        state,
        state.fields.map((field) =>
          field.id === action.payload.id
            ? { ...field, ...action.payload }
            : field
        )
      );

    default:
      return state;
  }
};

const updateState = (
  prevState: AdderState,
  updatedFields: AdderState["fields"]
): AdderState => {
  return {
    ...prevState,
    fields: updatedFields,
    total: calculateTotal(updatedFields),
  };
};

const calculateTotal = (fields: AdderState["fields"]): number => {
  return fields.reduce((total, field) => {
    if (!isNaN(field.value) && !field.disabled) {
      return field.operator === "+" ? total + field.value : total - field.value;
    }
    return total;
  }, 0);
};
