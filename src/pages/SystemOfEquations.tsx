import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import convertToArrayNumber from "../utils/methods/convertToArrayNumber";
import { SystemOfEquationsProcess, Method } from "../utils/methods/interface";
import systemOfEquationsMethods from "../utils/methods/systemOfEquations";
import { Table } from "react-bootstrap";

interface FormInput {
  matrixA: string;
  matrixB: string;
  n0: number;
}

const initialState = { matrixA: "", matrixB: "", n0: 0 };
const SystemOfEquations: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>(initialState);
  const [rootValue, setRootValue] = useState<Number[]>([]);
  const [process, setProcess] = useState<SystemOfEquationsProcess[]>([]);
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
    if (selectedMethod.id !== 0) {
      const matrixA = convertToArrayNumber(formInput.matrixA);
      const matrixB = convertToArrayNumber(formInput.matrixB)[0];
      const result = selectedMethod.calculationMethod({
        ...formInput,
        matrixA,
        matrixB,
      });
      if (result) {
        setRootValue(result.valueOfRoot);
        setProcess(result.process);
      }
    }
  };

  return (
    <div className="d-flex flex-column gap-4">
      <h1 className="text-uppercase text-center">System Of Equations</h1>
      <Form className="d-flex flex-column gap-4" onSubmit={handleOnSubmit}>
        <Form.Control
          as="textarea"
          placeholder="Enter matrix A"
          name="matrixA"
          value={formInput.matrixA}
          onChange={onChangeFormInput}
          required
          rows={4}
        />
        <div className="d-flex gap-4">
          <Form.Control
            type="text"
            placeholder="Enter matrix B"
            name="matrixB"
            value={formInput.matrixB}
            onChange={onChangeFormInput}
            required
          />
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
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h3>{`The value of root is : ${rootValue}`}</h3>
      <div className="d-flex gap-3 align-items-center flex-wrap">
        <h4>Methods: </h4>
        {systemOfEquationsMethods.map((method) => (
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

export default SystemOfEquations;
