import CustomInput from "./CustomInput";

import styles from "./ReservatorInfo.module.css";

const ReservatorInfo = ({
  information,
  setInformation,
  phoneRef,
  emailRef,
}) => {
  const cannotchange = () => {};
  return (
    <div className={styles.ReservatorInfo}>
      <div className={styles.headerwarpper}>
        <span className={styles.heading}>예약자</span>
        <span className={styles.text}>
          변경이 필요한 부분을 선택해 수정하실 수 있습니다.
        </span>
      </div>
      <div className={styles.inputgroup}>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>이름</div>
          <CustomInput
            type="text"
            value={information.reserveName}
            onChangeInput={cannotchange}
            disabled={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>생년월일</div>
          <CustomInput
            type="number"
            value={information.dob}
            onChangeInput={cannotchange}
            disabled={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>휴대폰번호</div>
          <CustomInput
            type="number"
            inputRef={phoneRef} // inputRef로 전달
            value={information.phone}
            onChangeInput={(e) =>
              setInformation({ ...information, phone: e.target.value })
            }
            placeholder="'-' 제외하고 입력"
          />
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.label}>이메일주소</div>
          <CustomInput
            type="email"
            inputRef={emailRef} // inputRef로 전달
            value={information.email}
            onChangeInput={(e) =>
              setInformation({ ...information, email: e.target.value })
            }
            placeholder="jenny.hw0122@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservatorInfo;
