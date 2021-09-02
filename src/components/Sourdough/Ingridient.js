import React from "react";

function Ingridient({ text, ingridient, setIngridients }) {
  const ingridientField = (e) => {
    const ingrInput = e.target.value;
    setIngridients(ingrInput);
  };
  return (
    <div>
      <p>{text}:</p>
      <input type="text" value={ingridient} onChange={ingridientField} />
    </div>
  );
}

export default Ingridient;
