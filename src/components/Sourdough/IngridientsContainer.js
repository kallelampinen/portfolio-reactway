import { React, useState, useEffect } from "react";
import Ingridient from "./Ingridient";

function IngridientsContainer({ ingridients, resetIngridients }) {
  console.log(ingridients);
  const [flour, setFlour] = useState(0);
  const [water, setWater] = useState(0);
  const [starter, setStarter] = useState(0);
  const [salt, setSalt] = useState(0);

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
    <div>
      <Ingridient text="Flour" flour={flour} />
      <Ingridient text="Water" flour={water} />
      <Ingridient text="Starter" flour={starter} />
      <Ingridient text="Salt" flour={salt} />
    </div>
  );
}

export default IngridientsContainer;
