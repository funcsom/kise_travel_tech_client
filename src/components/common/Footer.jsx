import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return <div className={styles.Footer}>{children}</div>;
};

export default Footer;
