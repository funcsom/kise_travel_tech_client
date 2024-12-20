import Button from "./Button";
import styles from "./Header.module.css";

const Header = ({ handleClickLeft, text, handleClickRight }) => {
  const onClickLeft = () => {
    handleClickLeft();
  };
  const onClickRight = () => {
    handleClickLeft();
  };
  return (
    <div className={styles.Header}>
      <Button handleClick={onClickLeft} type="headerLeft" />
      <span>{text}</span>
      <Button handleClick={onClickRight} type="header" />
    </div>
  );
};

export default Header;
