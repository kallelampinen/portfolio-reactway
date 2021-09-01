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
          onChange={howMany}
          value={quantity}
        ></input>
      </div>
      <div className="input-field">
        <label>Hydration? </label>
        <input
          type="number"
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
