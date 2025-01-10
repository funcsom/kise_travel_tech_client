import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import RecommandEvent from "./components/RecommandEvent";

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
      <Header text="지역사랑여행" handleClickLeft={handlePrev} />
      <main>
        <RecommandEvent />
      </main>
    </Contents>
  );
};

export default ImpLovingLocal;
