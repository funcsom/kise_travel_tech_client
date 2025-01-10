import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import RecommandEvent from "./components/RecommandEvent";
import LocalTripProduct from "./components/LocalTripProduct";
import PeriodicTourTrain from "./components/PeriodicTourTrain";
import Footer from "../../../improved/Footer";

import footer from "../../../assets/image/improved/lovinglocal/footer.jpg";

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
        <div
          style={{
            height: "6px",
            backgroundColor: "var(--color-line-alternative)",
          }}
        ></div>
        <LocalTripProduct />
        <div
          style={{
            height: "6px",
            backgroundColor: "var(--color-line-alternative)",
          }}
        ></div>
        <PeriodicTourTrain />
      </main>
      <Footer>
        <div style={{ display: "flex" }}>
          <img src={footer} width={"100%"} />
        </div>
      </Footer>
    </Contents>
  );
};

export default ImpLovingLocal;
