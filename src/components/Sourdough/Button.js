import { React } from "react";

function Button({ btnClick, btnText }) {
  return (
    <div>
      <button className="btn" type="submit" onClick={btnClick}>
        {btnText}
      </button>
    </div>
  );
}

export default Button;
