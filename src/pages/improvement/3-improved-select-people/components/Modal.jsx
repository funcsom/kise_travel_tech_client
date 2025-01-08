import { useEffect } from "react";
import Button from "../../../../improved/Button";
import styles from "./Modal.module.css";

const Modal = ({ openNoti }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.Modal} onClick={openNoti}>
      <div className={styles.alert} onClick={(e) => e.stopPropagation()}>
        <div className={styles.textwrapper}>
          <div className={styles.header}>이용 안내</div>
          <div className={styles.titlewrapper}>
            <span className={styles.title}>상품안내</span>
            <span className={styles.subtitle}>
              예약 전 반드시 해당 패키지의 인원 기준 확인
            </span>
          </div>
          <div className={styles.titlewrapper}>
            <span className={styles.title}>인원안내</span>
            <span className={styles.subtitle}>
              패키지별 최소/최대 인원 상이 <br />
              최대 인원 초과 시, 여행센터 또는 철도 고객센터로 문의
            </span>
          </div>
          <div className={styles.titlewrapper}>
            <span className={styles.title}>좌석안내</span>
            <span className={styles.subtitle}>
              여행상품 예약 시 좌석 선택이 불가해 랜덤배정되며,
              <br /> 역방향 배정 가능
            </span>
          </div>
        </div>
        <div className={styles.buttonwrapper}>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r1"
            onClickButton={openNoti}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
