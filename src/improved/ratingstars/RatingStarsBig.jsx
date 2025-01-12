import styles from "./RatingStarsBig.module.css";

import starempty from "../../assets/icon/improved/star_empty.svg";
import starfull from "../../assets/icon/improved/star_full.svg";
import starhalf from "../../assets/icon/improved/star_half.svg";

const RatingStarsBig = ({ setIsClickedBigStar, rating, setRating }) => {
  const onClickStar = (props) => {
    setIsClickedBigStar(true);
    if (props === rating) {
      setRating((prev) => prev - 0.5);
    } else {
      setRating(props);
    }
  };

  return (
    <div className={styles.RatingStarsBig}>
      <img
        onClick={() => onClickStar(1)}
        src={rating === 0.5 ? starhalf : rating >= 1 ? starfull : starempty}
      />
      <img
        onClick={() => onClickStar(2)}
        src={rating === 1.5 ? starhalf : rating >= 2 ? starfull : starempty}
      />
      <img
        onClick={() => onClickStar(3)}
        src={rating === 2.5 ? starhalf : rating >= 3 ? starfull : starempty}
      />
      <img
        onClick={() => onClickStar(4)}
        src={rating === 3.5 ? starhalf : rating >= 4 ? starfull : starempty}
      />
      <img
        onClick={() => onClickStar(5)}
        src={rating === 4.5 ? starhalf : rating >= 5 ? starfull : starempty}
      />
    </div>
  );
};

export default RatingStarsBig;
