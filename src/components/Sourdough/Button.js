import { React, useState } from "react";

function Button({ resetIngridients, calculation }) {
  const resetAll = () => {
    const reset = 0;
    const resetArray = ["", "", "", ""];

    resetIngridients(reset, resetArray);
  };
  return (
    <div className="btns">
      <button className="btn" type="submit" onClick={calculation}>
        Bake!
      </button>
      <button className="btn" type="submit" onClick={resetAll}>
        Reset
      </button>
    </div>
  );
}

export default Button;
