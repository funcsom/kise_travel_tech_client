import styles from "./SmallStarsWrapper.module.css";
import SmallStars from "./SmallStars";
import { useEffect, useState } from "react";

const SmallStarsWrapper = ({ isClicked, setComplete }) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);

  useEffect(() => {
    if (star1 && star2 && star3 && star4) setComplete();
  });

  return (
    <div className={styles.smallwrapper}>
      {isClicked ? (
        <div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>Label</span>
            <SmallStars
              clicked={() => {
                setStar1(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>Label</span>
            <SmallStars
              clicked={() => {
                setStar2(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>Label</span>
            <SmallStars
              clicked={() => {
                setStar3(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>Label</span>
            <SmallStars
              clicked={() => {
                setStar4(true);
              }}
            />
          </div>
        </div>
      ) : (
        <div className={`${styles.wrapper} ${styles.emptywrapper}`}>
          별점을 선택해주세요
        </div>
      )}
    </div>
  );
};

export default SmallStarsWrapper;
