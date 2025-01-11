import styles from "./Section.module.css";

const Section = ({ title, subtitle, color, children }) => {
  return (
    <div className={styles.Section}>
      <div className={`${styles.header} ${styles[color]}`}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.lists}>{children}</div>
    </div>
  );
};

export default Section;
