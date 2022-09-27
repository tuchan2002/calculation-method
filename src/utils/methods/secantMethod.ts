import { abs, MathNode, pi } from "mathjs";
import { Result } from "./interface";

const TOL = 0.0001;
const secantMethod = (func: MathNode, n: number) => {
  const result: Result = {
    valueOfRoot: 0,
    process: [],
  };
  let i = 2;
  let p0 = 0.5;
  let p1 = pi / 4;
  let p = p1;
  let q0 = func.evaluate({ x: p0 });
  let q1 = func.evaluate({ x: p1 });
  result.process.push({ n: 1, value: p0 });
  while (i <= n) {
    result.process.push({ n: i, value: p });

    p = p1 - (q1 * (p1 - p0)) / (q1 - q0);
    if (abs(p - p0) < TOL) {
      result.valueOfRoot = p;
      return result;
    }

    i++;
    p0 = p1;
    q0 = q1;
    p1 = p;
    q1 = func.evaluate({ x: p });
  }

  alert("The procedure was unsuccessful");
  return;
};

export default secantMethod;
