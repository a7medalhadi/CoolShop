import { Field, Operator } from "../types";
import { ActionTypes } from "./ACTION_TYPES";

export interface AdderAction {
  type: ActionTypes;
  payload: Partial<Field>;
}

export const addField = (): AdderAction => ({
  type: "ADD_FIELD",
  payload: { id: Date.now(), disabled: false, operator: "+", value: 5 },
});

export const removeField = (id: number): AdderAction => ({
  type: "REMOVE_FIELD",
  payload: { id },
});
export const toggleField = (id: number): AdderAction => ({
  type: "TOGGLE_FIELD",
  payload: { id },
});
export const changeValue = (id: number, value: number): AdderAction => ({
  type: "CHANGE_VALUE",
  payload: { id, value },
});
export const changeOperator = (
  id: number,
  operator: Operator
): AdderAction => ({
  type: "CHANGE_OPERATOR",
  payload: { id, operator },
});
