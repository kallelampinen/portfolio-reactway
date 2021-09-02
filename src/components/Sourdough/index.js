import { React, useState } from "react";
import {
  Wrapper,
  Content,
  MainContent,
  Ingridients,
  Header,
  Required,
} from "./Sourdough.styles";
import { Link } from "react-router-dom";
import Button from "./Button";
import ChooseSize from "./ChooseSize";
import IngridientsContainer from "./IngridientsContainer";
import Input from "./Input";

export const Sourdough = () => {
  //Hooks
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [hydration, setHydration] = useState("");
  const [ingridients, setIngridients] = useState([]);
  const [styles, setStyles] = useState(0.5);
  const [required, setRequired] = useState([]);

  ///////////////Functions/////////////////

  const breadSize = (weight) => {
    setSize(weight);
  };

  const howManyBread = (e) => {
    const numberOfBread = e.target.value;

    setQuantity(numberOfBread);
  };

  const howMuchWater = (e) => {
    const water = e.target.value;

    setHydration(water);
  };

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
    if (size === 0) {
      alert("choose size");
      return;
    }
    if (quantity === 0) {
      alert("choose how many bread");
      return;
    }
    if (hydration === 0) {
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
  };
  console.log(ingridients);

  return (
    <Wrapper>
      <Content>
        <Link to="/projects">
          <p>Back</p>
        </Link>
        <MainContent>
          <Header>
            <h2>Bread Calculator</h2>
          </Header>
          <Required required={required}>
            <ChooseSize breadSize={breadSize} size={size} />
          </Required>
          <div className="input-field">
            <Input
              textLabel="How many bread?"
              bakeValue={howManyBread}
              myState={quantity}
            />
            <Input
              textLabel="Hydration?"
              bakeValue={howMuchWater}
              myState={hydration}
            />
          </div>

          <div className="btns">
            <Button btnText="Bake!" btnClick={calculation} />
            <Button btnText="Reset" btnClick={resetIngridients} />
          </div>

          <Ingridients opacity={styles}>
            <IngridientsContainer
              setIngridients={setIngridients}
              ingridients={ingridients}
              calculation={calculation}
            />
          </Ingridients>
          <p>
            *Starter and salt are static values (25% and 2.5% of flour weight ).
          </p>
        </MainContent>
      </Content>
    </Wrapper>
  );
};
