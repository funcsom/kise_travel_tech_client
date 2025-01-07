import styles from "./Clip.module.css";

const Clip = ({ deleteStation, children }) => {
  return (
    <span onClick={() => deleteStation(children)} className={styles.Clip}>
      {children}
    </span>
  );
};

export default Clip;
