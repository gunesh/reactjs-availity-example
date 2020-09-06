import React from "react";
import { render } from "react-dom";
import Field from "./Field";
import "./style.css";


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
