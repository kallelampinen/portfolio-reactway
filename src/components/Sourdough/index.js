import { React, useState } from "react";
import { Wrapper, MainContent, Header, Required } from "./Sourdough.styles";
import { Link } from "react-router-dom";
import Button from "./Button";
import ChooseSize from "./ChooseSize";
import Ingridient from "./Ingridient";
import Input from "./Input";
import IngridientsContainer from "./IngridientsContainer";

export const Sourdough = () => {
  //Hooks
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hydration, setHydration] = useState("");
  const [ingridients, setIngridients] = useState(["", "", "", ""]);
  const [styles, setStyles] = useState(0.5);
  const [required, setRequired] = useState("");
  console.log(required);

  ///////////////Functions/////////////////

  const breadSize = (weight) => {
    setSize(weight);
  };

  const howManyBread = (howMuch) => {
    setQuantity(howMuch);
  };

  const howMuchWater = (howMuch) => {
    setHydration(howMuch);
  };

  const howMuchIngridient = (howMuch) => {
    setIngridients(howMuch);
  };
  const requiredText = (textColor) => {
    setRequired(textColor);
  };
  console.log(size);

  //Reset all fields function
  const resetIngridients = () => {
    setSize(0);
    setQuantity(0);
    setHydration(0);
    setIngridients(["", "", "", ""]);
    setStyles(0.5);
  };

  //Calculate ingridients function
  const calculation = () => {
    if (size == "" || size == 0) {
      setRequired("red");
      return;
    } else if (quantity == "" || quantity == 0) {
      alert("choose how many bread");
      return;
    } else if (hydration == "" || hydration == 0) {
      alert("choose hydration");
      return;
    } else {
      const flour = size * quantity;
      const water = (hydration * flour) / 100;
      const starter = flour * 0.25;
      const salt = flour * 0.025;
      const finishedBread = [
        flour + "g",
        water + "g",
        starter + "g",
        salt + "g",
      ];

      setStyles(1);
      setIngridients(finishedBread);
    }
    setRequired("black");
  };

  console.log(ingridients);

  return (
    <Wrapper>
      <Link to="/projects">
        <p>Back</p>
      </Link>
      <MainContent>
        <Header>
          <h2>Bread Calculator</h2>
        </Header>
        <Required required={required}>
          <ChooseSize
            requiredText={requiredText}
            breadSize={breadSize}
            size={size}
          />
        </Required>
        <div className="input-field">
          <Input
            textLabel="How many bread?"
            amount={howManyBread}
            amountState={quantity}
          />
          <Input
            textLabel="Hydration?"
            amount={howMuchWater}
            amountState={hydration}
          />
        </div>

        <div className="btns">
          <Button btnText="Bake!" btnClick={calculation} />
          <Button btnText="Reset" btnClick={resetIngridients} />
        </div>
        <IngridientsContainer
          ingridients={ingridients}
          howMuchIngridient={howMuchIngridient}
          styles={styles}
        />

        <p>
          *Starter and salt are static values (25% and 2.5% of flour weight ).
        </p>
      </MainContent>
    </Wrapper>
  );
};
