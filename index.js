import React, { Component } from "react";
import { render } from "react-dom";
import Example from "./Example";
import "./style.css";
import { Form, Field } from '@availity/form';
import * as yup from 'yup';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div style={{ padding: 100 }}>
        <Form
          initialValues={{
            hello: ""
          }}
          onSubmit={values => alert(JSON.stringify(values))}
          validationSchema={yup.object().shape({
            hello: yup.string().required()
          })}
        >
          <Field name="hello" type="text" label="Hello" />
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
