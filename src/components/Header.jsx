import Button from "./Button";
import styles from "./Header.module.css";

const Header = ({ handleClickLeft, text, imageLeft, handleClickRight }) => {
  const onClickRight = () => {
    handleClickLeft();
  };
  return (
    <div className={styles.Header}>
      {/* GTM 측정 */}
      <button
        className={`${styles.Button} ${styles.headerLeft}`}
        onClick={handleClickLeft}
        id="previous-btn"
      >
        {imageLeft && <img src={imageLeft} alt="icon" />}
      </button>
      <span>{text}</span>
      <Button handleClick={onClickRight} type="header" />
    </div>
  );
};

export default Header;
