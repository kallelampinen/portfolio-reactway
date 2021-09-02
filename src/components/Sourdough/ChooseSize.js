import { React } from "react";

function ChooseSize({ breadSize, size, requiredText }) {
  const setWeight = (e) => {
    const weight = e.target.value;
    console.log(weight);
    breadSize(weight);
  };

  const changeText = () => {
    const textColor = "black";

    requiredText(textColor);
  };

  return (
    <div>
      <select
        className="requiredRed"
        onChange={setWeight}
        value={size}
        onClick={changeText}
      >
        <option value="0">Choose size:</option>
        <option value="400">400g</option>
        <option value="600">600g</option>
      </select>
    </div>
  );
}

export default ChooseSize;
