import Header from "../../components/Header";
import LocalTripProduct from "./components/LocalTripProduct/LocalTripProduct";
import RecommandedEvent from "./components/RecommandedEvent/RecommandedEvent";
import PeroidicTourTrain from "./components/PeroidicTourTrain/PeroidicTourTrain";

import styles from "./LovingLocal.module.css";

const LovingLocal = (props) => {
  const handleclick = (e) => {
    console.log(e);
  };
  return (
    <div className={styles.LovingLocal}>
      <Header
        handleClickLeft={handleclick}
        text="지역사랑여행"
        handleClickRight={handleclick}
      />
      <RecommandedEvent />
      <LocalTripProduct />
      <PeroidicTourTrain />
    </div>
  );
};

export default LovingLocal;
