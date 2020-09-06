import React, { Component } from "react";
import { render } from "react-dom";
import Example from "./Example";
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
import { Phone, validatePhone } from "@availity/phone";
import DateField from "@availity/date";
import { avDate } from "@availity/yup";
import { SelectField } from "@availity/select";
import * as yup from "yup";
import { Button, Label } from "reactstrap";
const Field= ({}) => {
  return (
      <Form
  initialValues={{
    hello: '',
  }}
  onSubmit={values => alert(JSON.stringify(values))}
  validationSchema={yup.object({
    hello: yup.string().isRequired(true)
  })}
>
  <Field name="hello" label="Greeting" />
  <Button type="submit" color="primary">Submit</Button>
</Form>
    );
}
export default Field;


