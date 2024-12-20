import styles from "./Button.module.css";

const Button = ({ handleclick, text = "", image = "", type = "" }) => {
  return (
    <button
      className={`${styles.Button} ${styles[type]}`}
      onClick={handleclick}
    >
      {text && text}
      {image && <img src={image} alt="icon" />}
    </button>
  );
};

export default Button;
