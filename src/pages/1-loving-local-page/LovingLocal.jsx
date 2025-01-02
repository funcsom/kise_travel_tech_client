import Header from "../../components/Header";
import LocalTripProduct from "./components/LocalTripProduct";
import RecommandedEvent from "./components/RecommandedEvent";
import PeroidicTourTrain from "./components/PeroidicTourTrain";

import styles from "./LovingLocal.module.css";

const LovingLocal = () => {
  return (
    <div className={styles.LovingLocal}>
      <Header text="지역사랑여행" />
      <RecommandedEvent />
      <LocalTripProduct />
      <PeroidicTourTrain />
    </div>
  );
};

export default LovingLocal;
