import ReactStars from "react-rating-stars-component";
import starempty from "../../../../assets/icon/improved/star_empty.svg";
import starfull from "../../../../assets/icon/improved/star_full.svg";
import starhalf from "../../../../assets/icon/improved/star_half.svg";

import smallstarempty from "../../../../assets/icon/improved/star_small_empty.svg";
import smallstarfull from "../../../../assets/icon/improved/star_small_full.svg";
import "./Stars.css";

export const BigStars = ({ setIsClickedBigStar, rating, setRating }) => {
  const properties = {
    size: 36,
    count: 5,
    value: rating,
    isHalf: true,
    // emptyIcon: <i className="far fa-star" />,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    // filledIcon: <i className="fa fa-star" />,
    emptyIcon: <img src={starempty} alt="empty star" />,
    halfIcon: <img src={starhalf} alt="half star" />,
    filledIcon: <img src={starfull} alt="full star" />,
    onChange: (newRating) => {
      // console.log("clicked Big Star");
      setIsClickedBigStar(true);
      setRating(newRating);
      console.log(newRating);
    },
  };

  return (
    <div className="bigstarwrapper">
      <ReactStars {...properties} />
    </div>
  );
};

export const SmallStars1 = ({ rating, setRating }) => {
  console.log(`first star rating is... ${rating}`);
  const properties = {
    size: 20,
    count: 5,
    value: rating,
    emptyIcon: <img src={smallstarempty} alt="empty star" />,
    filledIcon: <img src={starfull} alt="empty star" />,
    onChange: (newRating) => {
      setRating(newRating);
    },
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactStars {...properties} />
    </div>
  );
};

export const SmallStars2 = ({ rating, setRating }) => {
  const properties = {
    size: 20,
    count: 5,
    value: rating,
    emptyIcon: <img src={smallstarempty} alt="empty star" />,
    filledIcon: <img src={starfull} alt="empty star" />,
    onChange: (newRating) => {
      setRating(newRating);
    },
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactStars {...properties} />
    </div>
  );
};

export const SmallStars3 = ({ rating, setRating }) => {
  const properties = {
    size: 20,
    count: 5,
    value: rating,
    emptyIcon: <img src={smallstarempty} alt="empty star" />,
    filledIcon: <img src={starfull} alt="empty star" />,
    onChange: (newRating) => {
      setRating(newRating);
    },
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactStars {...properties} />
    </div>
  );
};

export const SmallStars4 = ({ rating, setRating }) => {
  const properties = {
    size: 20,
    count: 5,
    value: rating,
    emptyIcon: <img src={smallstarempty} alt="empty star" />,
    filledIcon: <img src={starfull} alt="empty star" />,
    onChange: (newRating) => {
      setRating(newRating);
    },
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <ReactStars {...properties} />
    </div>
  );
};
