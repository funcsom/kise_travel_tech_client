import styles from "./ProgressItem.module.css";

const ProgressItem = ({ text, text2, type }) => {
  return (
    <div className={`${styles.Progressbar} ${styles[type]}`}>
      {text}
      <br />
      {text2}
    </div>
  );
};

export default ProgressItem;
