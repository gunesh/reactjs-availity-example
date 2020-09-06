import React from "react";
import { Form, CheckboxGroup, Checkbox } from "@availity/form";
import * as yup from "yup";
import { Button } from "reactstrap";

const Field = ({}) => {
  return (
    <Form
      initialValues={{
        hello: ""
      }}
      onSubmit={values => alert(JSON.stringify(values))}
      validationSchema={yup.object({})}
    >
      <Field name="hello" label="Greeting" />
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
};
export default Field;
