import React from "react";
import { Form, RadioGroup, Radio } from "@availity/form";
import * as yup from "yup";
import { Button } from "reactstrap";

const Field = ({}) => {
  return (
    <Form
      initialValues={{
        hello: ""
      }}
      onSubmit={() => {}}
      validationSchema={yup.object().shape({
        hello: yup.string().required("This field is required")
      })}
    >
      <RadioGroup name="hello" label="Radio Group">
        <Radio label="Radio One" value="uno" />
        <Radio label="Radio Two" value="dos" />
        <Radio label="Radio Three" value="tres" />
      </RadioGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default Field;
