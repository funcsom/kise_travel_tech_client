import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/1-loving-local-page/LovingLocal";
import LocalTrip from "./pages/2-local-trip-page/LocalTrip";
import SelectDate from "./pages/3-select-date/SelectDate";
import Component from "./components/common/ComponentExample";
import SelectProduct from "./pages/4-select-product-page/SelectProduct";
import SelectDetail from "./pages/5-select-detail-page/SelectDetail";
import TravelerAgree from "./pages/6-traveler-agree-page/TravelerAgree";
import TravelerInfo from "./pages/7-traveler-info/TravelerInfo";
import CompleteProduct from "./pages/8-complete-product/CompleteProduct";
import styles from "./App.module.css";

export const UserContext = createContext();

function App() {
  const [info, setInfo] = useState({
    region: "",
    date: "",
    day: "",
    people: 1,
    product: "",
    goTrain: {
      departstation: "",
      departtime: "",
      arrivalstation: "",
      arrivaltime: "",
    },
    comeTrain: {
      departstation: "",
      departtime: "",
      arrivalstation: "",
      arrivaltime: "",
    },
    name: "",
    dob: "",
    phone: "",
    email: "",
    gender: "m",
  });

  const contextValue = { info, setInfo };

  return (
    <div className={styles.App}>
      <UserContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<LovingLocal />} />
          <Route path="/localtrip/:local" element={<LocalTrip />} />
          <Route path="/selectdate" element={<SelectDate />} />
          <Route path="/selectproduct" element={<SelectProduct />} />
          <Route path="/selectdetail" element={<SelectDetail />} />
          <Route path="/traveleragree" element={<TravelerAgree />} />
          <Route path="/travelerinfo" element={<TravelerInfo />} />
          <Route path="/completeproduct" element={<CompleteProduct />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
