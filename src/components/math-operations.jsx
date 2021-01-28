import React from "react";
import PropTypes from "prop-types";
// components
import Button from "./button/button";

const MathOperations = ({
  onClickOperation,
  onClickEqual,
}) => (
  <section className="math-operations">
    <Button
      text="+"
      clickHandler={onClickOperation}
    />
    <Button
      text="-"
      clickHandler={onClickOperation}
    />
    <Button
      text="*"
      clickHandler={onClickOperation}
    />
    <Button
      text="/"
      clickHandler={onClickOperation}
    />
    <Button
      text="="
      clickHandler={onClickEqual}
    />
  </section>
);

MathOperations.propsTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClickEqual: PropTypes.func.isRequired,
};

export default MathOperations;
