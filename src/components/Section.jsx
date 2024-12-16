import Card from "./Card";
import styles from "./Section.module.css";

const Section = ({ title, subtitle, format }) => {
  return (
    <div className={styles.Section}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <Card />
    </div>
  );
};

export default Section;
