import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { parse, simplify } from "mathjs";
import equationMethods from "../utils/methods/equation";
import { Table } from "react-bootstrap";
import { EquationProcess, Method } from "../utils/methods/interface";

interface FormInput {
  func: string;
  n0: number;
  tolerance: number;
  a: number;
  b: number;
}
const initialState = {
  func: "",
  n0: 0,
  tolerance: 0.0001,
  a: 0,
  b: 0,
};
const Equation = () => {
  const [formInput, setFormInput] = useState<FormInput>(initialState);
  const [rootValue, setRootValue] = useState<Number>(0);
  const [process, setProcess] = useState<EquationProcess[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<Method>({
    id: 0,
    name: "",
    calculationMethod: () => {},
  });

  const onChangeFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (selectedMethod.id !== 0 && formInput.func.trim()) {
      const f = simplify(parse(formInput.func));

      const result = selectedMethod.calculationMethod({
        ...formInput,
        func: f,
      });
      if (result) {
        setRootValue(result.valueOfRoot);
        setProcess(result.process);
      }
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      <h1 className="text-uppercase text-center">Equation</h1>
      <Form className="d-flex flex-column gap-4" onSubmit={handleOnSubmit}>
        <div className="d-flex gap-3">
          <Form.Control
            type="text"
            placeholder="Enter a function you want to calculate"
            name="func"
            value={formInput.func}
            onChange={onChangeFormInput}
            required
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
        <div className="d-flex gap-4 flex-wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label>Tolerance: </label>
            <Form.Control
              type="number"
              placeholder="tolerance"
              name="tolerance"
              value={formInput.tolerance}
              onChange={onChangeFormInput}
              style={{ width: "140px" }}
              required
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label>n0: </label>
            <Form.Control
              type="number"
              placeholder="n0"
              name="n0"
              value={formInput.n0}
              onChange={onChangeFormInput}
              style={{ width: "100px" }}
              required
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label>a: </label>
            <Form.Control
              type="number"
              placeholder="a"
              name="a"
              value={formInput.a}
              onChange={onChangeFormInput}
              style={{ width: "100px" }}
              required
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <label>b: </label>
            <Form.Control
              type="number"
              placeholder="b"
              name="b"
              value={formInput.b}
              onChange={onChangeFormInput}
              style={{ width: "100px" }}
              required
            />
          </div>
        </div>
      </Form>
      <h3>{`The value of root is : ${rootValue}`}</h3>
      <div className="d-flex gap-3 align-items-center flex-wrap">
        <h4>Methods: </h4>
        {equationMethods.map((method) => (
          <Button
            key={method.id}
            variant={selectedMethod.id === method.id ? `info` : `outline-info`}
            type="button"
            onClick={() =>
              setSelectedMethod({
                ...selectedMethod,
                id: method.id,
                calculationMethod: method.calculationMethod,
              })
            }
          >
            {method.name}
          </Button>
        ))}
      </div>
      <Table striped variant="light">
        <thead>
          <tr>
            <th>n</th>
            <th>The value of root</th>
          </tr>
        </thead>
        <tbody>
          {process.map((item) => (
            <tr key={item.n}>
              <td>{item.n}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Equation;
