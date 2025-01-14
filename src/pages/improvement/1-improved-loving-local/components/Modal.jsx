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
    <div className={styles.Modal}>
      <div className={styles.alert} onClick={(e) => e.stopPropagation()}>
        <div className={styles.textwrapper}>
          <div className={styles.header}>미션안내</div>
          <div className={styles.titlewrapper}>
            <span className={styles.title}>
              강원권의 2025 동트는 택시를 선택해주세요
            </span>
            <span className={styles.subtitle}>
              <div className={styles.center}>
                해당 사이트는 사용성 테스트를 위한 페이지로
              </div>
              <div className={styles.center}>
                ’2025 동트는 택시’를 통해 상품을 예약하실 수 있어요
              </div>
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
