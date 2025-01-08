import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";

import iconprev from "../../../assets/icon/icon_previous.svg";

const ImpLovingLocal = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("./");
  };

  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <Contents>
      <Header
        text="지역사랑여행"
        imageLeft={iconprev}
        handleClickLeft={handlePrev}
      />
    </Contents>
  );
};

export default ImpLovingLocal;
