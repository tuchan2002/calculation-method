import { abs, MathNode, pi } from "mathjs";

const TOL = 0.0001;
const falsePositonMethod = (func: MathNode, n: number) => {
  let i = 2;
  let p0 = 0.5;
  let p1 = pi / 4;
  let p = p0;
  let q0 = func.evaluate({ x: p0 });
  let q1 = func.evaluate({ x: p1 });
  let q = 0;
  while (i <= n) {
    console.log(`${i}: ${p}`);
    p = p1 - (q1 * (p1 - p0)) / (q1 - q0);

    if (abs(p - p1) < TOL) return p;

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
