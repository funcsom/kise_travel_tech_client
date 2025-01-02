import styles from "./Button.module.css";

const Button = ({ handleClick, text = "", image = "", type = "" }) => {
  return (
    <button
      className={`${styles.Button} ${styles[type]}`}
      onClick={handleClick}
    >
      {text && text}
      {image && <img src={image} alt="icon" />}
    </button>
  );
};

export default Button;
