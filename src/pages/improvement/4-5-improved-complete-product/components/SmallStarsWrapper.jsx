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
            <div>예약 과정이 쉽고 직관적임</div>
            <RatingStarsSmall
              rating={smallRating.star1}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star1: props });
                setStar1(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>KTX 선택 등 상품 선택이 직관적으로 제공되었음</span>
            <RatingStarsSmall
              rating={smallRating.star2}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star2: props });
                setStar2(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>상품 가격이 명확하게 제공됨</span>
            <RatingStarsSmall
              rating={smallRating.star3}
              setRating={(props) => {
                setSmallRating({ ...smallRating, star3: props });
                setStar3(true);
              }}
            />
          </div>
          <div className={`${styles.wrapper} ${styles.detailwrapper}`}>
            <span>코레일톡 지역 사랑 여행을 추천하고 싶음</span>
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
