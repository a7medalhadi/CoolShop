import { AdderAction } from "./actions";
import { AdderState } from "../types";

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

export const adderReducer = (state: AdderState, action: AdderAction): AdderState => {
  switch (action.type) {
    case "ADD_FIELD":
      return updateState(state, [...state.fields, action.payload]);

    case "REMOVE_FIELD":
      return updateState(state, state.fields.filter((field) => field.id !== action.payload));

    case "TOGGLE_FIELD":
      return updateState(
        state,
        state.fields.map((field) => (field.id === action.payload ? { ...field, disabled: !field.disabled } : field))
      );

    case "CHANGE_VALUE":
    case "CHANGE_OPERATOR":
      return updateState(
        state,
        state.fields.map((field) => (field.id === action.payload.id ? { ...field, ...action.payload } : field))
      );

    default:
      return state;
  }
};

const updateState = (prevState: AdderState, updatedFields: AdderState["fields"]): AdderState => {
  return { ...prevState, fields: updatedFields, total: calculateTotal(updatedFields) };
};

const calculateTotal = (fields: AdderState["fields"]): number => {
  return fields.reduce((total, field) => (!isNaN(field.value) && !field.disabled
    ? field.operator === "+" ? total + field.value : total - field.value
    : total), 0);
};
