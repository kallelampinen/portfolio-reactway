import React from "react";

function InputFields({ howManyBread, howMuchWater, hydration, quantity }) {
  const howMany = (e) => {
    const numberOfBread = e.target.value;

    howManyBread(numberOfBread);
  };

  const howMuchHydration = (e) => {
    const water = e.target.value;

    howMuchWater(water);
  };

  return (
    <div>
      <div className="input-field">
        <label>How many breads? </label>
        <input
          placeholder="Quantity"
          type="number"
          min="0"
          step="1"
          onChange={howMany}
          value={quantity}
        ></input>
      </div>
      <div className="input-field">
        <label>Hydration? </label>
        <input
          type="number"
          min="0"
          step="5"
          placeholder="%"
          onChange={howMuchHydration}
          value={hydration}
        />
      </div>
    </div>
  );
}

export default InputFields;
