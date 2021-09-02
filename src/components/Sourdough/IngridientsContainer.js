import React from "react";
import { Ingridients } from "./Sourdough.styles";
import Ingridient from "./Ingridient";

function IngridientsContainer({ ingridients, howMuchIngridient, styles }) {
  return (
    <div>
      <Ingridients opacity={styles}>
        <Ingridient
          text="Flour"
          ingridient={ingridients[0]}
          howMuchIngridient={howMuchIngridient}
        />
        <Ingridient
          text="Water"
          ingridient={ingridients[1]}
          howMuchIngridient={howMuchIngridient}
        />
        <Ingridient
          text="Starter"
          ingridient={ingridients[2]}
          howMuchIngridient={howMuchIngridient}
        />
        <Ingridient
          text="Salt"
          ingridient={ingridients[3]}
          howMuchIngridient={howMuchIngridient}
        />
      </Ingridients>
    </div>
  );
}

export default IngridientsContainer;
