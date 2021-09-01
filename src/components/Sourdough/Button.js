import { React, useState } from "react";

function Button({ resetIngridients, calculation }) {
  const resetAll = () => {
    const reset = 0;
    const resetArray = ["", "", "", ""];

    resetIngridients(reset, resetArray);
  };
  return (
    <div>
      <button type="submit" onClick={calculation}>
        Bake!
      </button>
      <button type="submit" onClick={resetAll}>
        Reset
      </button>
    </div>
  );
}

export default Button;
