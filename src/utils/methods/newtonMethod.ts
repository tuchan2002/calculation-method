import { abs, MathNode, derivative, pi } from "mathjs";
import { Result } from "./interface";

const TOL = 0.0001;
const newtonMethod = (func: MathNode, n: number) => {
  const result: Result = {
    valueOfRoot: 0,
    process: [],
  };
  let i = 1;
  let p0 = pi / 4;
  let p = p0;
  while (i <= n) {
    result.process.push({ n: i, value: p });

    p =
      p0 -
      func.evaluate({ x: p0 }) /
        derivative(func.toString(), "x").evaluate({ x: p0 });

    if (abs(p - p0) < TOL) {
      result.valueOfRoot = p;
      return result;
    }

    i++;
    p0 = p;
  }

  alert("The procedure was unsuccessful");
  return;
};

export default newtonMethod;
