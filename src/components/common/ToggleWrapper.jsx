import { useState } from "react";
import styles from "./ToggleWrapper.module.css";
import closing from "../../assets/icon/icon_arrow.svg";

const ToggleWrapper = ({ title, children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={styles.ToggleWrapper}>
      <div className={styles.title}>
        <span>{title}</span>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          {open ? (
            <img src={closing} alt="closing button" />
          ) : (
            <img
              className={styles.openButton}
              src={closing}
              alt="opening button"
            />
          )}
        </button>
      </div>
      {open && <div>{children}</div>}
    </div>
  );
};

export default ToggleWrapper;
