import { abs, MathNode, parse, pi, simplify } from "mathjs";
import { Result } from "./interface";

const TOL = 0.0002;
const fixedPointMethod = (func: MathNode, n: number) => {
  // g = f + x
  const g = simplify(parse(`(${func.toString()}) + x`));

  const result: Result = {
    valueOfRoot: 0,
    process: [],
  };
  let i = 1;
  let p0 = pi / 4;
  let p = p0;
  while (i <= n) {
    result.process.push({ n: i, value: p });

    p = g.evaluate({ x: p0 });
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

export default fixedPointMethod;
