import bisectionMethod from "./bisectionMethod";
import newtonMethod from "./newtonMethod";
import fixedPointMethod from "./fixedPointMethod";
import secantMethod from "./secantMethod";
import falsePositonMethod from "./falsePositionMethod";

const equationMethods = [
  { id: 1, name: "Bisection", calculationMethod: bisectionMethod },
  { id: 2, name: "Fixed Point", calculationMethod: fixedPointMethod },
  { id: 3, name: "Newton", calculationMethod: newtonMethod },
  { id: 4, name: "Secant", calculationMethod: secantMethod },
  { id: 5, name: "False Position", calculationMethod: falsePositonMethod },
];
export default equationMethods;
