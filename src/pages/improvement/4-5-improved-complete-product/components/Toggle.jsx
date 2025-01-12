import styles from "./Toggle.module.css";
import { useState } from "react";
import togglebutton from "../../../../assets/icon/improved/toggle_button.svg";

const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.Toggle}>
      <div className={styles.title}>
        <span>{title}</span>
        <button
          className={styles.buttonwrapper}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <img className={styles.opened} src={togglebutton} />
          ) : (
            <img src={togglebutton} />
          )}
        </button>
      </div>
      {isOpen && <div className={styles.children}>{children}</div>}
    </div>
  );
};

export default Toggle;
