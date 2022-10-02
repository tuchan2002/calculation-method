import { MathNode } from "mathjs";
import { Result, Process } from "./interface";

interface Props {
  func: MathNode;
  n0: number;
  tolerance: number;
  a: number;
  b: number;
}
const bisectionMethod = ({ func, tolerance, n0, a, b }: Props) => {
  if (func.evaluate({ x: a }) * func.evaluate({ x: b }) >= 0) {
    alert("You have not assumed" + " right a and b");
    return;
  }

  const result: Result = {
    valueOfRoot: 0,
    process: [],
  };
  let i = 1;
  let mid = a;
  while (i <= n0) {
    mid = (a + b) / 2;
    result.process.push({ n: i, value: mid });

    if (func.evaluate({ x: mid }) === 0.0 || (b - a) / 2 < tolerance) {
      result.valueOfRoot = mid;
      return result;
    } else if (func.evaluate({ x: mid }) * func.evaluate({ x: a }) < 0) b = mid;
    else a = mid;

    i++;
  }

  alert("The procedure was unsuccessful");
  return;
};

export default bisectionMethod;
