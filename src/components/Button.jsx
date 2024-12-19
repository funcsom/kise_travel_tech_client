import { useState } from "react";
import styles from "./Button.module.css";

const Button = ({ handleclick, text = "", image = "", type = "" }) => {
  const [img, setImg] = useState(false);
  image && setImg(true);
  return (
    <button
      className={`${styles.Button} ${styles[type]}`}
      onClick={handleclick}
    >
      {text && text}
      {img && <img src={image} alt="icon" />}
    </button>
  );
};

export default Button;
