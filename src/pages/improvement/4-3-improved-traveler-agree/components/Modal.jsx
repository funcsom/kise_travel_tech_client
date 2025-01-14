import { useEffect } from "react";
import Button from "../../../../improved/Button";
import styles from "./Modal.module.css";

const Modal = ({ openNoti, handlePrev }) => {
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
          <div className={styles.header}>확인해주세요</div>
          <div className={styles.titlewrapper}>
            <div className={styles.title}>
              <div className={styles.center}>상품 옵션을 수정하려면</div>
              <div className={styles.center}>다시 상품을 선택해야해요</div>
            </div>
            <div className={styles.subtitle}>
              지금 선택하신 상품정보는 사라져요
            </div>
          </div>
        </div>
        <div className={styles.buttonwrapper}>
          <Button
            type="secondary"
            state="default"
            size="large"
            shape="box"
            rate="r2"
            onClickButton={handlePrev}
          >
            다시 상품 선택
          </Button>
          <Button
            type="primary"
            state="default"
            size="large"
            shape="box"
            rate="r3"
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
