export interface Method {
  id: Number;
  name: String;
  calculationMethod: Function;
}
export interface EquationProcess {
  n: number;
  value: number;
}

export interface EquationResult {
  valueOfRoot: number;
  process: EquationProcess[];
}

export interface SystemOfEquationsProcess {
  n: number;
  value: number[];
}

export interface SystemOfEquationsResult {
  valueOfRoot: number[];
  process: EquationProcess[];
}
