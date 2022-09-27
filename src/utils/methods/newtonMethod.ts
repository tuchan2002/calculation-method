import { abs, MathNode, derivative, pi } from "mathjs";

const TOL = 0.0001;
const newtonMethod = (func: MathNode, n: number) => {
  let i = 1;
  let p0 = pi / 4;
  let p = p0;
  while (i <= n) {
    console.log(i, ": ", p);
    p =
      p0 -
      func.evaluate({ x: p0 }) /
        derivative(func.toString(), "x").evaluate({ x: p0 });

    if (abs(p - p0) < TOL) return p;

    i++;
    p0 = p;
  }

  alert("The procedure was unsuccessful");
  return;
};

export default newtonMethod;
