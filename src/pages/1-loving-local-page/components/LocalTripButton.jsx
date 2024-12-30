import { useNavigate } from "react-router-dom";

const LocalTripButton = ({ img, text, linkTo }) => {
  const navigate = useNavigate();

  const handleGoLocal = () => {
    navigate(`/localtrip/${linkTo}`);
  };

  return (
    <button
      onClick={handleGoLocal}
      style={{
        width: "6rem",
        height: "6rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebebeb",
        borderRadius: "3rem",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {img && <img src={img} alt="localImage" style={{ height: "6rem" }} />}
      <div
        style={{
          position: "absolute",
          zIndex: "1",
          backgroundColor: "#00000050",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "6rem",
          height: "6rem",
          color: "white",
        }}
      >
        {text}
      </div>
    </button>
  );
};

export default LocalTripButton;
