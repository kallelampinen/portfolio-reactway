import React from "react";

function Ingridient({ text, ingridient, howMuchIngridient }) {
  const inputIngridient = (e) => {
    const howMuch = e.target.value;

    howMuchIngridient(howMuch);
  };

  return (
    <div>
      <p>{text}:</p>
      <input type="text" value={ingridient} onChange={inputIngridient} />
    </div>
  );
}

export default Ingridient;
