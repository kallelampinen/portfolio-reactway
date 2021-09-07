import React from "react";

function Input({ amount, amountState, textLabel, inputName }) {
  const setInput = (e) => {
    const howMuch = e.target.value;

    amount(howMuch);
  };

  return (
    <div>
      <label>{textLabel}</label>
      <input
        className={inputName}
        placeholder={textLabel}
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
