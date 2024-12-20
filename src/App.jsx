import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/loving-local-page/LovingLocal";
import LocalTrip from "./pages/local-trip-page/LocalTrip";
import Component from "./components/common/ComponentExample";
import SelectProduct from "./pages/select-product-page/SelectProduct";
import SelectDetail from "./pages/select-detail-page/SelectDetail";
import TravelerAgree from "./pages/traveler-agree-page/TravelerAgree";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<LovingLocal />} />
        <Route path="/localtrip" element={<LocalTrip />} />
        <Route path="/selectproduct" element={<SelectProduct />} />
        <Route path="/selectdetail" element={<SelectDetail />} />
        <Route path="/traveleragree" element={<TravelerAgree />} />
      </Routes>
    </div>
  );
}

export default App;
