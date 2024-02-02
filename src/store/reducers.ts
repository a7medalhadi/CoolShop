import { AdderState } from "../types";
import { AdderAction } from "./actions";

export const adderReducer = (
  state: AdderState,
  action: AdderAction
): AdderState => {
  switch (action.type) {
    case "ADD_FIELD":
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    case "REMOVE_FIELD":
      return {
        ...state,
        fields: state.fields.filter((field) => field.id !== action.payload),
      };
    case "TOGGLE_FIELD":
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.payload
            ? { ...field, disabled: !field.disabled }
            : field
        ),
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.payload.id
            ? { ...field, value: action.payload.value }
            : field
        ),
      };
    case "CHANGE_OPERATOR":
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.payload.id
            ? { ...field, operator: action.payload.operator }
            : field
        ),
      };
    default:
      return state;
  }
};
