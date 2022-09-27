import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { derivative, map, parse, simplify } from "mathjs";
import methods from "./utils/methods";

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
      const f = simplify(parse(formInput.func));

      const valueOfRoot = selectedMethod.calculationMethod(f, formInput.n0);
      if (valueOfRoot) {
        setRootValue(valueOfRoot);
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
      <div className="d-flex gap-3">
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
    </div>
  );
};

export default App;
