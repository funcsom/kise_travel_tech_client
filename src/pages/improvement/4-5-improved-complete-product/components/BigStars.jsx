import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import starempty from "../../../../assets/icon/improved/star_empty.svg";
import starfull from "../../../../assets/icon/improved/star_full.svg";
import starhalf from "../../../../assets/icon/improved/star_half.svg";
import "./BigStars.css";

const BigStars = ({ setIsClicked, rating, setRating }) => {
  const properties = {
    size: 36,
    count: 5,
    color: "var(--color-background-normal-alternative)",
    activeColor: "var(--color-background-normal-alternative)",
    value: rating,
    isHalf: true,
    emptyIcon: <img src={starempty} alt="empty star" />,
    halfIcon: <img src={starhalf} alt="empty star" />,
    filledIcon: <img src={starfull} alt="empty star" />,
    onChange: (newRating) => {
      setIsClicked(true);
      setRating(newRating);
    },
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactStars {...properties} />
    </div>
  );
};

export default BigStars;
