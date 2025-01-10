import styles from "./TabItem.module.css";

const TabItem = ({ type, text, onClickTabItem }) => {
  return (
    <div
      onClick={onClickTabItem}
      className={`${styles.Tabitem} ${styles[type]}`}
    >
      {text}
    </div>
  );
};

export default TabItem;
