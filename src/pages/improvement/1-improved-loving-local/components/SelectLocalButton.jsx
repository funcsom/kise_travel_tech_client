import styles from "./SelectLocalButton.module.css";
import capital from "/assets/improved/image/lovinglocal/local-button/capital.png";
import gangwon from "/assets/improved/image/lovinglocal/local-button/gangwon.png";
import chungcheong from "/assets/improved/image/lovinglocal/local-button/chungcheong.png";
import gyeongsang from "/assets/improved/image/lovinglocal/local-button/gyeongsang.png";
import jeolla from "/assets/improved/image/lovinglocal/local-button/jeolla.png";
import jeju from "/assets/improved/image/lovinglocal/local-button/jeju.png";

// type = "selected" / "default"
// local = capital: "수도", gangwon: "강원", chungcheong: "충청", gyeongsang: "경상", jeolla:  jeju: "제주"

const SelectLocalButton = ({ type, local }) => {
  return (
    <div className={`${styles.selectLocalButton} ${styles[type]}`}>
      <img src={local} alt="" />
    </div>
  );
};

export default SelectLocalButton;
