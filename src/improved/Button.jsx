import styles from "./Button.module.css";

const Button = ({
  type,
  state,
  size,
  shape,
  rate,
  children,
  onClickButton,
  id = "",
}) => {
  const nothing = () => {};
  return (
    <button
      id={`${id}`}
      className={`${styles.Button} ${styles[rate]} ${styles[type]} ${styles[state]} ${styles[size]} ${styles[shape]}`}
      onClick={state === "default" ? onClickButton : nothing}
    >
      {children}
    </button>
  );
};

export default Button;
