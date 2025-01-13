import { RatingStarsSmall } from "../../../../improved/ratingstars/RatingStarsSmall";
import styles from "./SmallStarsWrapper.module.css";
import { useEffect, useState } from "react";

const SmallStarsWrapper = ({
  isClickedBigStar,
  setComplete,
  smallRating,
  setSmallRating,
}) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);

  useEffect(() => {
    if (star1 && star2 && star3 && star4) setComplete();
  });

  return (
    <div className={styles.smallwrapper}>
      {isClickedBigStar ? (
        <div className={styles.SmallStars}>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <div>예약 절차가 복잡하지 않고 쉽게 느껴짐</div>
            <RatingStarsSmall
              rating={smallRating.star1}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star1: props });
                setStar1(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>각 단계에서 제공되는 정보가 이해하기 쉬웠음</span>
            <RatingStarsSmall
              rating={smallRating.star2}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star2: props });
                setStar2(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>상품을 선택할 때, 가격이 명확히 전달됨</span>
            <RatingStarsSmall
              rating={smallRating.star3}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star3: props });
                setStar3(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>예약을 끝내는 데 소요된 시간이 적절하다고 느꼈음</span>
            <RatingStarsSmall
              rating={smallRating.star4}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star4: props });
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

{
  /* <SmallStars4
  rating={smallRating.star4}
  setRating={(props) => {
    setSmallRating({ ...smallRating, star4: props });
    setStar4(true);
  }}
/> */
}
// 요로코롬 했었다는...
