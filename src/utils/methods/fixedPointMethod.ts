import { abs, MathNode, parse, pi, simplify } from "mathjs";

const TOL = 0.001;
const fixedPointMethod = (func: MathNode, n: number) => {
  // g = f + x
  const g = simplify(parse(`(${func.toString()}) + x`));

  let i = 1;
  let p0 = pi / 4;
  let p = p0;
  while (i <= n) {
    console.log(i, ": ", p);
    p = g.evaluate({ x: p0 });

    if (abs(p - p0) < TOL) return p;

    i++;
    p0 = p;
  }

  alert("The procedure was unsuccessful");
  return;
};

export default fixedPointMethod;
