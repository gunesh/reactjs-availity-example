import React, { Component } from "react";
import { render } from "react-dom";
import Field from "./Field";
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

import { Button, Label } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div style={{ padding: 100 }}>
       <Field />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
