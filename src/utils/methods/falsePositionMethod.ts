import { abs, MathNode, pi } from "mathjs";
import { Result } from "./interface";

interface Props {
  func: MathNode;
  n0: number;
  tolerance: number;
}
const falsePositonMethod = ({ func, tolerance, n0 }: Props) => {
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
  while (i <= n0) {
    result.process.push({ n: i, value: p });

    p = p1 - (q1 * (p1 - p0)) / (q1 - q0);
    if (abs(p - p1) < tolerance) {
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
