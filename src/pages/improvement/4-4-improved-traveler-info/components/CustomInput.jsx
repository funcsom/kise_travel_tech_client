import styles from "./CustomInput.module.css";

const CustomInput = ({
  type = "text",
  inputRef,
  placeholder,
  value,
  onChangeInput,
  disabled,
}) => {
  return (
    <form>
      <input
        type={type}
        ref={inputRef} // ref 속성에 inputRef 전달
        className={styles.CustomInput}
        placeholder={placeholder}
        value={value}
        onChange={onChangeInput}
        disabled={disabled}
      />
    </form>
  );
};

export default CustomInput;
