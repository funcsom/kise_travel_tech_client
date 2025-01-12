import styles from "./RatingStars.module.css";

import starempty from "../../assets/icon/improved/star_empty.svg";
import starfull from "../../assets/icon/improved/star_full.svg";
import starhalf from "../../assets/icon/improved/star_half.svg";

import smallstarempty from "../../assets/icon/improved/star_small_empty.svg";
import smallstarfull from "../../assets/icon/improved/star_small_full.svg";
import { useEffect } from "react";

export const RatingStarsBig = ({ setIsClickedBigStar, rating, setRating }) => {
  const onClickStar = (props) => {
    setIsClickedBigStar(true);
    if (props === rating) {
      setRating((prev) => prev - 0.5);
    } else {
      setRating(props);
    }
  };

  // useEffect(() => {
  //   console.log(`current rating is... ${rating}`);
  // }, [rating]);

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

export const RatingStarsSmall = ({ rating, setRating }) => {
  const onClickStar = (props) => setRating(props);

  // useEffect(() => {
  //   console.log(`current rating is... ${rating}`);
  // }, [rating]);

  return (
    <div className={styles.RatingStarsSmall}>
      <img
        onClick={() => onClickStar(1)}
        src={rating >= 1 ? smallstarfull : smallstarempty}
      />
      <img
        onClick={() => onClickStar(2)}
        src={rating >= 2 ? smallstarfull : smallstarempty}
      />
      <img
        onClick={() => onClickStar(3)}
        src={rating >= 3 ? smallstarfull : smallstarempty}
      />
      <img
        onClick={() => onClickStar(4)}
        src={rating >= 4 ? smallstarfull : smallstarempty}
      />
      <img
        onClick={() => onClickStar(5)}
        src={rating >= 5 ? smallstarfull : smallstarempty}
      />
    </div>
  );
};
