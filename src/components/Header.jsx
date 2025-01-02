import Button from "./Button";
import styles from "./Header.module.css";

const Header = ({ handleClickLeft, text, imageLeft, handleClickRight }) => {
  const onClickRight = () => {
    handleClickLeft();
  };
  return (
    <div className={styles.Header}>
      <Button
        handleClick={handleClickLeft}
        type="headerLeft"
        image={imageLeft}
      />
      <span>{text}</span>
      <Button handleClick={onClickRight} type="header" />
    </div>
  );
};

export default Header;
