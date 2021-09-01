import { React, useState } from "react";
import { Wrapper, Content, MainContent } from "./Sourdough.styles";
import { Link } from "react-router-dom";
import Button from "./Button";
import ChooseSize from "./ChooseSize";
import IngridientsContainer from "./IngridientsContainer";

import InputFields from "./InputFields";

export const Sourdough = () => {
  //Hooks
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [hydration, setHydration] = useState(0);
  const [ingridients, setIngridients] = useState([]);
  console.log(ingridients);

  //Functions

  const breadSize = (weight) => {
    setSize(weight);
  };

  const howManyBread = (numberOfBread) => {
    setQuantity(numberOfBread);
  };

  const howMuchWater = (water) => {
    setHydration(water);
  };

  const resetIngridients = (reset, resetArray) => {
    setSize(reset);
    setQuantity(reset);
    setHydration(reset);
    setIngridients([resetArray]);
  };

  const calculation = () => {
    const flour = size * quantity;
    const water = (hydration * flour) / 100;
    const starter = flour * 0.25;
    const salt = flour * 0.025;
    const finishedBread = [flour + "g", water + "g", starter + "g", salt + "g"];

    setIngridients([finishedBread]);
  };

  // console.log(size);
  // console.log(quantity);
  // console.log(hydration);

  return (
    <Wrapper>
      <Content>
        <Link to="/projects">
          <p>Back</p>
        </Link>
        <MainContent>
          <h2>Bread Calculator!</h2>
          <ChooseSize breadSize={breadSize} size={size} />
          <InputFields
            howManyBread={howManyBread}
            quantity={quantity}
            howMuchWater={howMuchWater}
            hydration={hydration}
          />
          <Button
            resetIngridients={resetIngridients}
            calculation={calculation}
          />
          <IngridientsContainer
            ingridients={ingridients}
            resetIngridients={resetIngridients}
          />
          <p>
            *Starter and salt are static values (25% and 2.5% of flour weight ).
          </p>
        </MainContent>
      </Content>
    </Wrapper>
  );
};
