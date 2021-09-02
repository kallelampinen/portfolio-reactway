import React from "react";

function Input({ bakeValue, myState, textLabel }) {
  return (
    <div>
      <label>{textLabel}</label>
      <input
        placeholder="Quantity"
        type="number"
        min="0"
        step="1"
        onChange={bakeValue}
        value={myState}
      ></input>
    </div>
  );
}

export default Input;
