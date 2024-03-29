import React from "react";
import { useState } from "reinspect";
import { Form, InputGroup, FormControl, Modal, Button } from "react-bootstrap";

export default function PersonForm(props) {
  const { buttons, formControls, handleSubmit, initialState, tag } = props;
  const [state, setState] = useState(initialState, tag);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <Form className="row" onSubmit={e => handleSubmit(e, state)}>
      {formControls.map(control => (
        <div className="col-sm-6">
          <Form.Group key={control.key} controlId={control.controlId}>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className={control.icon} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type={control.type}
                placeholder={control.placeholder}
                onChange={handleChange}
                name={control.name}
                value={state[control.name]}
                required={control.required}
              />
            </InputGroup>
          </Form.Group>
        </div>
      ))}
      <Modal.Footer>
        {buttons.map(({ variant, key, text, type, onClick, style }) => (
          <Button
            className={style}
            type={type}
            key={key}
            variant={variant}
            onClick={onClick}
          >
            {text}
          </Button>
        ))}
      </Modal.Footer>
    </Form>
  );
}