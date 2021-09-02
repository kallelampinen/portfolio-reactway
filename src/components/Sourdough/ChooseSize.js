import { React } from "react";

function ChooseSize({ breadSize, size }) {
  const setWeight = (e) => {
    const weight = e.target.value;

    breadSize(weight);
  };

  return (
    <div>
      <select className="requiredRed" onChange={setWeight} value={size}>
        <option value="0">Choose size:</option>
        <option value="400">400g</option>
        <option value="600">600g</option>
      </select>
    </div>
  );
}

export default ChooseSize;
