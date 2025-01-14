import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/Header";
import Contents from "../../../components/common/Contents";
import RecommandEvent from "./components/RecommandEvent";
import LocalTripProduct from "./components/LocalTripProduct";
import PeriodicTourTrain from "./components/PeriodicTourTrain";
import Footer from "../../../improved/Footer";
import Button from "../../../improved/Button";

import footer from "../../../assets/image/improved/lovinglocal/footer.jpg";

const ImpLovingLocal = () => {
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  const openNoti = () => {
    setIsNotiOpen((prev) => !prev);
  };

  return (
    <Contents>
      <Header text="지역사랑여행" />
      <main>
        <RecommandEvent />
        <div
          style={{
            height: "6px",
            backgroundColor: "var(--color-line-alternative)",
          }}
        ></div>
        <LocalTripProduct isNotiOpen={isNotiOpen} openNoti={openNoti} />
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
