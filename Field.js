import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import {
  Form,
  Field,
  FormGroup,
  Input,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio
} from "@availity/form";

import * as yup from "yup";
import { Button, Label } from "reactstrap";
const Field = ({}) => {
  return (
    <Form
      initialValues={{
        hello: ""
      }}
      onSubmit={values => alert(JSON.stringify(values))}
      validationSchema={yup.object({
        
      })}
    >
      <Field name="hello" label="Greeting" />
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};
export default Field;
