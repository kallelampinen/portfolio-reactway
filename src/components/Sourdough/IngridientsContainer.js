import { React, useState, useEffect } from "react";

function IngridientsContainer({ ingridients, resetIngridients }) {
  console.log(ingridients);
  const [flour, setFlour] = useState("");
  const [water, setWater] = useState("");
  const [starter, setStarter] = useState("");
  const [salt, setSalt] = useState("");

  const displayIngridients = () => {
    setFlour(ingridients[0][0]);
    setWater(ingridients[0][1]);
    setStarter(ingridients[0][2]);
    setSalt(ingridients[0][3]);
  };

  useEffect(() => {
    displayIngridients();
  }, [ingridients]);

  return (
    <div className="ingridients-container">
      <div className="ingridients">
        <div>Flour:</div>
        <input
          type="text"
          id="flour"
          defaulvalue={flour}
          onChange={resetIngridients}
        />
      </div>
      <div className="ingridients">
        <div>Water:</div>
        <input type="text" defaulvalue={water} />
      </div>
      <div className="ingridients">
        <div>Starter:</div>
        <input type="text" defaulvalue={starter} placeholder="*" />
      </div>
      <div className="ingridients">
        <div>Salt:</div>
        <input type="text" defaulvalue={salt} placeholder="*" />
      </div>
    </div>
  );
}

export default IngridientsContainer;
