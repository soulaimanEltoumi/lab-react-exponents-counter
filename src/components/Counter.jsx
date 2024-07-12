import { useState } from "react";

const Counter = ({ count, onDecrement, onIncrement }) => {
  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={onDecrement}>
        -
      </button>
      <button className="counter-button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter;
