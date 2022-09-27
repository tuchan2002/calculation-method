import bisectionMethod from "./bisectionMethod";
import newtonMethod from "./newtonMethod";
import fixedPointMethod from "./fixedPointMethod";

const methods = [
  { id: 1, name: "Bisection Method", calculationMethod: bisectionMethod },
  { id: 2, name: "Fixed-Point Method", calculationMethod: fixedPointMethod },
  { id: 3, name: "Newton Method", calculationMethod: newtonMethod },
];
export default methods;
