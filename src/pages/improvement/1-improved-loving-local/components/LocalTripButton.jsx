import styles from "./LocalTripButton.module.css";

const LocalTripButton = ({ img, text, type, onClickButton }) => {
  return (
    <div className={styles.LocalTripButton} onClick={onClickButton}>
      <div className={`${styles.imagewrapper} ${styles[type]}`}>
        <img className={styles.image} src={img} alt="localimage" />
      </div>
      <span className={`${styles.localtext} ${styles[type]}`}>{text}</span>
    </div>
  );
};

export default LocalTripButton;
