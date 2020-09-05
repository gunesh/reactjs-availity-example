import React, { Component } from "react";
import { render } from "react-dom";
import Example from "./Example";
import "./style.css";
import { Form, Field } from "@availity/form";
import * as yup from "yup";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div style={{ padding: 100 }}>
        <Form
          initialValues={{
            email: ""
          }}
          onSubmit={values => alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            hello: yup.string().required()
          })}
        >
          <Field name="email" labelClass="required" type="text" label="Email" />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
