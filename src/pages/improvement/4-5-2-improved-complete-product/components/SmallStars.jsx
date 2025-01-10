import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import starempty from "../../../../assets/icon/improved/star_small_empty.svg";
import starfull from "../../../../assets/icon/improved/star_small_full.svg";
import "./BigStars.css";

const SmallStars = ({ clicked }) => {
  const [rating, setRating] = useState(0); // Default rating is 1 out of 5

  const properties = {
    size: 20,
    count: 5,
    color: "var(--color-background-normal-alternative)",
    activeColor: "var(--color-background-normal-alternative)",
    value: rating,
    emptyIcon: <img src={starempty} alt="empty star" />,
    filledIcon: <img src={starfull} alt="empty star" />,
    onChange: (newRating) => {
      clicked();
      if (rating === newRating) {
        setRating(newRating - 0.5);
      } else {
        setRating(newRating);
      }
    },
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactStars {...properties} />
    </div>
  );
};

export default SmallStars;
