import { MathNode } from "mathjs";

const TOL = 0.0001;
const bisectionMethod = (func: MathNode, n: number, a: number, b: number) => {
  if (func.evaluate({ x: a }) * func.evaluate({ x: b }) >= 0) {
    alert("You have not assumed" + " right a and b");
    return;
  }

  let i = 1;
  let mid = a;
  while (i <= n) {
    mid = (a + b) / 2;
    console.log(`${i}: ${mid}`);

    if (func.evaluate({ x: mid }) === 0.0 || (b - a) / 2 < TOL) return mid;
    else if (func.evaluate({ x: mid }) * func.evaluate({ x: a }) < 0) b = mid;
    else a = mid;

    i++;
  }

  alert("The procedure was unsuccessful");
  return;
};

export default bisectionMethod;
