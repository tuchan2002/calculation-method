import { abs, MathNode, pi } from "mathjs";
import { Result } from "./interface";

const TOL = 0.0001;
const falsePositonMethod = (func: MathNode, n: number) => {
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
  let q = 0;
  result.process.push({ n: 1, value: p0 });
  while (i <= n) {
    result.process.push({ n: i, value: p });

    p = p1 - (q1 * (p1 - p0)) / (q1 - q0);
    if (abs(p - p1) < TOL) {
      result.valueOfRoot = p;
      return result;
    }

    i++;
    q = func.evaluate({ x: p });

    if (q * q1 < 0) {
      p0 = p1;
      q0 = q1;
    }

    p1 = p;
    q1 = q;
  }

  alert("The procedure was unsuccessful");
  return;
};

export default falsePositonMethod;
