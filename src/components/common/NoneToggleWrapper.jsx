import styles from "./NoneToggleWrapper.module.css";

const NoneToggleWrapper = ({
  title,
  children,
  checkbox,
  checkedIsSame,
  setCheckedIsSame,
}) => {
  return (
    <div className={styles.NoneToggleWrapper}>
      <div className={styles.title}>
        <span>{title}</span>
        {checkbox && (
          <div
            style={{ color: "var(--color-white)", font: "var(--font-orig-b2)" }}
          >
            <input
              id="isequal"
              type="checkbox"
              style={{ border: "1px solid var(--color-white)" }}
              onChange={() => setCheckedIsSame(!checkedIsSame)}
            />
            <label htmlFor="isequal">예약자 정보와 동일</label>
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NoneToggleWrapper;
