import { React, useState, useEffect } from "react";
import Ingridient from "./Ingridient";

function IngridientsContainer({ ingridients }) {
  return (
    <div>
      <Ingridient text="Flour" ingridient={ingridients[0]} />
      <Ingridient text="Water" ingridient={ingridients[1]} />
      <Ingridient text="Starter" ingridient={ingridients[2]} />
      <Ingridient text="Salt" ingridient={ingridients[3]} />
    </div>
  );
}

export default IngridientsContainer;
