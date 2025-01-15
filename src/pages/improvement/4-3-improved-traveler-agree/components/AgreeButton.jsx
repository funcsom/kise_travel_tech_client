import styles from "./AgreeButton.module.css";

const AgreeButton = ({ isClickAgree, isClickCheckbox }) => {
  return (
    <div
      className={styles.AgreeButton}
      onClick={() => {
        isClickCheckbox();
        console.log(isClickAgree);
      }}
    >
      <input
        className={styles.CustomCheckbox}
        type="checkbox"
        checked={isClickAgree}
      />
      <span>개인정보의 제3자 제공 동의</span>
    </div>
  );
};

export default AgreeButton;
