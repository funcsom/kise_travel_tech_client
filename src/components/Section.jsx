import styles from "./Section.module.css";

const Section = ({ title, subtitle, children }) => {
  return (
    <div className={styles.Section}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
};

export default Section;
