import CustomInput from "./CustomInput";
import CustomCheckbox from "../../../../improved/CustomCheckbox";
import GenderButton from "./GenderButton";

import styles from "./TravelerInfo.module.css";
import { useState, useEffect } from "react";

const TravelerInfo = ({ information, setInformation, travelerNameRef }) => {
  const [gender, setGender] = useState(information.gender);
  const [isSameName, setIsSameName] = useState(false);

  const changeGender = (gender) => {
    setGender(gender);
    setInformation({ ...information, gender });
  };

  const onClickNameSame = () => {
    setIsSameName((prev) => !prev);
  };

  useEffect(() => {
    if (isSameName) {
      setInformation((prev) => ({
        ...prev,
        travelerName: prev.reserveName,
      }));
    } else {
      setInformation((prev) => ({ ...prev, travelerName: "" }));
    }
  }, [isSameName, setInformation]);

  return (
    <div className={styles.ReservatorInfo}>
      <div className={styles.headerwarpper}>
        <span className={styles.heading}>여행자</span>
        <div className={styles.checkbox}>
          <CustomCheckbox
            isClickAgree={isSameName}
            isClickCheckbox={onClickNameSame}
          />
          <div>예약자 정보와 동일</div>
        </div>
      </div>
      <div className={styles.inputgroup}>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>성별</div>
          <div className={styles.radiowrapper}>
            <GenderButton
              type={gender === "m" ? "selected" : "unselected"}
              value="m"
              onClickBtn={changeGender}
            >
              남자
            </GenderButton>
            <GenderButton
              type={gender === "w" ? "selected" : "unselected"}
              value="w"
              onClickBtn={changeGender}
            >
              여자
            </GenderButton>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>이름</div>
          <CustomInput
            type="text"
            inputRef={travelerNameRef}
            placeholder=""
            value={information.travelerName}
            onChangeInput={(e) =>
              setInformation({ ...information, travelerName: e.target.value })
            }
            disabled={isSameName}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelerInfo;
