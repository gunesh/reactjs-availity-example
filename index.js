import React, { Component } from "react";
import { render } from "react-dom";
import Example from "./Example";
import "./style.css";
import { Form, Field, FormGroup, Input } from "@availity/form";
import * as yup from "yup";
import { Button, Label } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div style={{ padding: 100 }}>
        <Form
          initialValues={{
            email: ""
          }}
          onSubmit={values => alert(JSON.stringify(values))}
          validationSchema={yup.object({
            email: yup.string().required("Email required"),
            pswrd: yup.string().required("Password required"),
            hello: yup.string().required("hello required"),
          })}
        >
          <Field name="email" labelClass="required" type="text" label="Email" />
          <Field
            name="pswrd"
            labelClass="required"
            type="password"
            label="Password"
          />
          <Field
            name="mobile"
            labelClass="required"
            type="number"
            label="Mobile"
          />

          <Label for="hello">Hello Field</Label>
          <Input name="hello" />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
