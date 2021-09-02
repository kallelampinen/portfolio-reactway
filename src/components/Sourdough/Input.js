import React from "react";

function Input({ amount, amountState, textLabel }) {
  const setInput = (e) => {
    const howMuch = e.target.value;

    amount(howMuch);
  };

  return (
    <div>
      <label>{textLabel}</label>
      <input
        placeholder="Quantity"
        type="number"
        min="0"
        step="1"
        onChange={setInput}
        value={amountState}
      ></input>
    </div>
  );
}

export default Input;
