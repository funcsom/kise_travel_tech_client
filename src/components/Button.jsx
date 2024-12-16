import { useState } from "react";

const Button = ({ handleclick, image = "" }) => {
  const [img, setImg] = useState(false);
  image && setImg(true);
  return (
    <div>
      <button onClick={handleclick}>
        {img && <img src={image} alt="icon" />}
      </button>
    </div>
  );
};

export default Button;
