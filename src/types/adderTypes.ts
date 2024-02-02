export type Operator = "+" | "-";

export interface Field {
  id: number;
  operator: Operator;
  value: number;
  disabled: boolean;
}

export interface AdderState {
  fields: Field[];
}
