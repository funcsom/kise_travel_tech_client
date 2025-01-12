import styles from "./RatingStarsSmall.module.css";
import smallstarempty from "../../assets/icon/improved/star_small_empty.svg";
import smallstarfull from "../../assets/icon/improved/star_small_full.svg";

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
