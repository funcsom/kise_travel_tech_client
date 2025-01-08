import styles from "./Button.module.css";

const Button = ({
  type,
  state,
  size,
  shape,
  rate,
  children,
  onClickButton,
}) => {
  return (
    <button
      className={`${styles.Button} ${styles[rate]} ${styles[type]} ${styles[state]} ${styles[size]} ${styles[shape]}`}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};

export default Button;
