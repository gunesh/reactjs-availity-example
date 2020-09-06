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

import * as yup from "yup";
import { Button, Label } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div style={{ padding: 100 }}>
        <Form
          initialValues={{
            email: "",
            phone: '',
            test_radio: '',
            test_checkbox: '',
            dateOfService: '',
          }}
          onSubmit={values => alert(JSON.stringify(values))}
          validationSchema={yup.object({
            email: yup.string().required("Email required"),
            pswrd: yup.string().required("Password required"),
            hello: yup.string().required("hello required")
          })}
        >
          <Field name="email" labelClass="required" type="text" label="Email" />

          <Phone
            name="phone"
            label="Phone"
            country="US"
            showExtension={true}
            phoneColProps={{ xs: { size: 9 } }}
            extProps={{
              name: "ext",
              label: "Ext.",
              extColProps: {
                xs: { size: 3 }
              }
            }}
          />

          <CheckboxGroup name="test_checkbox" label="Checkbox Group">
            <Checkbox label="Check One" value="uno" />
            <Checkbox label="Check Two" value="dos" />
            <Checkbox label="Check Three" value="tres" />
          </CheckboxGroup>

          <RadioGroup name="heltest_radio" label="Radio Group">
            <Radio label="Radio One" value="uno" />
            <Radio label="Radio Two" value="dos" />
            <Radio label="Radio Three" value="tres" />
          </RadioGroup>

          <DateField
            label="Date of Service"
            id="dateOfService"
            name="dateOfService"
            min={{ value: 7, units: "day" }}
            max={{ value: 7, units: "day" }}
          />

          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
