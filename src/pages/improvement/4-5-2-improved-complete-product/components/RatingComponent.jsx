import { useState, useEffect } from "react";

import Button from "../../../../improved/Button";
import styles from "./RatingComponent.module.css";
import BigStars from "./BigStars";
import SmallStars from "./SmallStars";

import iconhandle from "../../../../assets/icon/improved/icon_handle.svg";
import SmallStarsWrapper from "./SmallStarsWrapper";

const RatingComponent = ({ openNoti }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [complete, setComplete] = useState(false);

  const clicked = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.Modal} onClick={openNoti}>
      <div className={styles.alert} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headerwrapper}>
          <div className={styles.header}>
            <div>
              <img src={iconhandle} alt="" />
            </div>
            <span>예약 과정이 만족스러웠나요?</span>
          </div>
          <div className={styles.bigstar}>
            <BigStars clicked={clicked} />
          </div>
        </div>
        <SmallStarsWrapper
          isClicked={isClicked}
          setComplete={() => setComplete(true)}
        />
      </div>
      <div className={styles.buttonwrapper}>
        <Button
          type="primary"
          state={complete ? "default" : "disabled"}
          size="large"
          shape="box"
          rate="r1"
          onClickButton={openNoti}
        >
          평가하기
        </Button>
      </div>
    </div>
  );
};

export default RatingComponent;
