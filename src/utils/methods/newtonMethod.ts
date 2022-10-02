import { abs, MathNode, derivative, pi } from "mathjs";
import { Result } from "./interface";

interface Props {
  func: MathNode;
  n0: number;
  tolerance: number;
}
const newtonMethod = ({ func, tolerance, n0 }: Props) => {
  const result: Result = {
    valueOfRoot: 0,
    process: [],
  };
  let i = 1;
  let p0 = pi / 4;
  let p = p0;
  while (i <= n0) {
    result.process.push({ n: i, value: p });

    p =
      p0 -
      func.evaluate({ x: p0 }) /
        derivative(func.toString(), "x").evaluate({ x: p0 });

    if (abs(p - p0) < tolerance) {
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
