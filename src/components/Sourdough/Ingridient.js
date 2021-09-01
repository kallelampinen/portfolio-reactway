import React from "react";

function Ingridient({ text, flour }) {
  return (
    <div>
      <p>{text}:</p>
      <input type={text} id="flour" value={flour} />
    </div>
  );
}

export default Ingridient;
