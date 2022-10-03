import gaussSeidelMethod from "./gaussSeidelMethod";
import jacobiMethod from "./jacobiMethod";

const systemOfEquationsMethods = [
  { id: 1, name: "Gauss Seidel", calculationMethod: gaussSeidelMethod },
  { id: 2, name: "Jacobi", calculationMethod: jacobiMethod },
];
export default systemOfEquationsMethods;
