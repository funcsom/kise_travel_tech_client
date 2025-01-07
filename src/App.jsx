import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

// original pages
import LovingLocal from "./pages/1-loving-local-page/LovingLocal";
import LocalTrip from "./pages/2-local-trip-page/LocalTrip";
import SelectDate from "./pages/3-select-date/SelectDate";
import SelectProduct from "./pages/4-select-product-page/SelectProduct";
import SelectDetail from "./pages/5-select-detail-page/SelectDetail";
import TravelerAgree from "./pages/6-traveler-agree-page/TravelerAgree";
import TravelerInfo from "./pages/7-traveler-info/TravelerInfo";
import CompleteProduct from "./pages/8-complete-product/CompleteProduct";

// improvment pages
import ImpLocalTrip from "./pages/improvement/2-improved-local-trip/ImpLocalTrip";
import ImpSelectDate from "./pages/improvement/3-improved-select-date/ImpSelectDate";
import ImpSelectProduct from "./pages/improvement/4-improved-select-product/ImpSelectProduct";
import ImpTravelerAgree from "./pages/improvement/5-improved-traveler-agree/ImpTravelerAgree";
import ImpTravelerInfo from "./pages/improvement/6-improved-traveler-info/ImpTravelerInfo";
import ImpCompleteProd from "./pages/improvement/7-improved-complete-product/ImpCompleteProd";

import styles from "./App.module.css";

export const UserContext = createContext();
export const ImpUserContext = createContext();

function App() {
  const [info, setInfo] = useState({
    region: "",
    date: "",
    day: "",
    people: 1,
    product: { name: "", price: 0 },
    package: "",
    goTrain: {
      trainNo: "",
      trainGrade: "economy",
      departstation: "",
      departtime: "",
      arrivalstation: "",
      arrivaltime: "",
    },
    comeTrain: {
      trainNo: "",
      trainGrade: "economy",
      departstation: "",
      departtime: "",
      arrivalstation: "",
      arrivaltime: "",
    },
    reserveName: "",
    travelerName: "",
    dob: "",
    phone: "",
    email: "",
    gender: "m",
  });

  const [impInfo, setImpInfo] = useState({
    region: "",
    date: "",
    day: "",
    people: 1,
    product: { name: "", price: 0 },
    package: { name: "", price: 0 },
    goTrain: {
      trainNo: "",
      trainGrade: "economy",
      departstation: "부산",
      departtime: "",
      arrivalstation: "오송",
      arrivaltime: "",
      price: 0,
    },
    comeTrain: {
      trainNo: "",
      trainGrade: "economy",
      departstation: "오송",
      departtime: "",
      arrivalstation: "부산",
      arrivaltime: "",
      price: 0,
    },
    reserveName: "",
    travelerName: "",
    dob: "",
    phone: "",
    email: "",
    gender: "m",
  });

  return (
    <div className={styles.App}>
      <UserContext.Provider value={{ info, setInfo }}>
        <ImpUserContext.Provider value={{ impInfo, setImpInfo }}>
          <Routes>
            <Route path="/" element={<LovingLocal />} />
            <Route path="/localtrip/:local" element={<LocalTrip />} />
            <Route path="/selectdate" element={<SelectDate />} />
            <Route path="/selectproduct" element={<SelectProduct />} />
            <Route path="/selectdetail" element={<SelectDetail />} />
            <Route path="/traveleragree" element={<TravelerAgree />} />
            <Route path="/travelerinfo" element={<TravelerInfo />} />
            <Route path="/completeproduct" element={<CompleteProduct />} />

            <Route path="/imp">
              <Route path="localtrip" element={<ImpLocalTrip />} />
              <Route path="selectdate" element={<ImpSelectDate />} />
              <Route path="selectproduct" element={<ImpSelectProduct />} />
              <Route path="traveleragree" element={<ImpTravelerAgree />} />
              <Route path="travelerinfo" element={<ImpTravelerInfo />} />
              <Route path="completeproduct" element={<ImpCompleteProd />} />
            </Route>
          </Routes>
        </ImpUserContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
