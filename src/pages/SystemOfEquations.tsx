import { matrix } from "mathjs";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

interface FormInput {
  matrix: string;
  n0: number;
}
const SystemOfEquations: React.FC = () => {
  const [formInput, setFormInput] = useState<FormInput>({ matrix: "", n0: 0 });

  const onChangeFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="d-flex flex-column gap-4">
      <h1 className="text-uppercase text-center">System Of Equations</h1>
      <Form className="d-flex gap-3" onSubmit={handleOnSubmit}>
        <Form.Control
          type="text"
          placeholder="Enter a matrix you want to calculate"
          name="matrix"
          value={formInput.matrix}
          onChange={onChangeFormInput}
          required
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1 className="text-uppercase text-center">coming soon!</h1>
    </div>
  );
};

export default SystemOfEquations;
