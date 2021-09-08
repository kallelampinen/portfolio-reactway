import React from "react";

function RandomImage({fetchRandom}) {
  return (
    <div className="random">
      <p onClick={fetchRandom}>Get random image</p>
    </div>
  );
}

export default RandomImage;
