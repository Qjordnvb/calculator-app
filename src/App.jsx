/*eslint no-eval:0*/

import React, { useState } from "react";
import words from "lodash.words";
//components
import Functions from "./components/functions";
import Numbers from "./components/numbers";
import MathOperations from "./components/math-operations";
import Result from "./components/result";

// style
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);
  const value =
    items.length > 0
      ? items[items.length - 1]
      : "0";
  console.log("renderizado items", value);

  const clickHandlerFunction = (text) => {
    console.log("click handler");
  };

  return (
    <main className="react-calculator">
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          setStack(`${stack}${number}`);
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          setStack(eval(stack).toString());
        }}
      />
      <Functions
        onContentClear={() => {
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            const deleteStack = stack.substring(
              0,
              stack.length - 1
            );
            setStack(deleteStack);
          }
        }}
      />
    </main>
  );
};

export default App;
