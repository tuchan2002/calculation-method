import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { derivative, map, parse, simplify } from "mathjs";
import methods from "./utils/methods";
import { Table } from "react-bootstrap";
import { Process } from "./utils/methods/interface";

interface FormInput {
  func: string;
  n0: number;
}
interface Method {
  id: Number;
  name: String;
  calculationMethod: Function;
}
const App: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({ func: "", n0: 0 });
  const [rootValue, setRootValue] = useState<Number>(0);
  const [process, setProcess] = useState<Process[]>([]);
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

      const result = selectedMethod.calculationMethod(f, formInput.n0, 1, 2);
      if (result) {
        setRootValue(result.valueOfRoot);
        setProcess(result.process);
      }
    }
  };

  return (
    <div className="container p-5 d-flex flex-column gap-4">
      <h1 className="text-uppercase text-center">calculation - method</h1>
      <Form className="d-flex" onSubmit={handleOnSubmit}>
        <Form.Control
          type="text"
          placeholder="Enter a function you want to calculate"
          name="func"
          value={formInput.func}
          onChange={onChangeFormInput}
          required
        />
        <Form.Control
          type="number"
          placeholder="n0"
          name="n0"
          value={formInput.n0}
          onChange={onChangeFormInput}
          style={{ width: "100px" }}
          required
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h3>{`The value of root is : ${rootValue}`}</h3>
      <div className="d-flex gap-3 align-items-center flex-wrap">
        <h4>Methods: </h4>
        {methods.map((method) => (
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

export default App;
