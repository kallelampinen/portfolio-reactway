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
  }, [ingridients, resetIngridients]);

  return (
    <div>
      <div className="ingridients-container">
        <div className="ingridients">
          <div>Flour:</div>
          <input
            type="text"
            id="flour"
            value={flour}
            onChange={resetIngridients}
          />
        </div>
        <div className="ingridients">
          <div>Water:</div>
          <input type="text" value={water} />
        </div>
        <div className="ingridients">
          <div>Starter:</div>
          <input type="text" value={starter} placeholder="*" />
        </div>
        <div className="ingridients">
          <div>Salt:</div>
          <input type="text" value={salt} placeholder="*" />
        </div>
      </div>
    </div>
  );
}

export default IngridientsContainer;
