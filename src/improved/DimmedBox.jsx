import styles from "./DimmedBox.module.css";

const DimmedBox = ({ lefttext, righttext }) => {
  return (
    <div className={styles.DimmedBox}>
      <span>{lefttext}</span>
      <span>{righttext}</span>
    </div>
  );
};

export default DimmedBox;
