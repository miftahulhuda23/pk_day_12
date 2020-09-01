import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form/Form.js";
import Form1 from "./Pages/Form1.js";
import Number from "./Pages/Number/Number.js";

function App() {
  return (
    <div>
      <Form />
      <hr />
      <Form1 />
      <hr />
      <Number />
    </div>
  );
}

export default App;
