import styles from "./AgreeButton.module.css";
import CustomCheckbox from "../../../../improved/CustomCheckbox";

const AgreeButton = ({ isClickAgree, isClickCheckbox }) => {
  return (
    <button className={styles.AgreeButton} onClick={isClickCheckbox}>
      <CustomCheckbox isClickAgree={isClickAgree} />
      <span>개인정보의 제3자 제공 동의</span>
    </button>
  );
};

export default AgreeButton;
