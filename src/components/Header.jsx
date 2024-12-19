import Button from "./Button";
import styles from "./Header.module.css";

const Header = ({ handleClickLeft, text, handleClickRight }) => {
  return (
    <div className={styles.Header}>
      <Button handleClick={handleClickLeft} />
      <span>{text}</span>
      <Button handleClick={handleClickRight} />
    </div>
  );
};

export default Header;
