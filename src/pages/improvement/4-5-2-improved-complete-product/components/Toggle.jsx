import styles from "./Toggle.module.css";
import { useState } from "react";
import togglebutton from "../../../../assets/icon/improved/toggle_button.svg";

const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.Toggle}>
      <div className={styles.title}>
        <span>{title}</span>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (
            <img className={styles.opened} src={togglebutton} />
          ) : (
            <img src={togglebutton} />
          )}
        </button>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Toggle;
