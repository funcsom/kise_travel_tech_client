import { createContext, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// original pages
import LovingLocal from "./pages/1-loving-local-page/LovingLocal";
import LocalTrip from "./pages/2-local-trip-page/LocalTrip";
import SeeDetail from "./pages/2-see-detail-page/SeeDetail";
import SelectDate from "./pages/3-select-date/SelectDate";
import SelectProduct from "./pages/4-select-product-page/SelectProduct";
import SelectDetail from "./pages/5-select-detail-page/SelectDetail";
import TravelerAgree from "./pages/6-traveler-agree-page/TravelerAgree";
import TravelerInfo from "./pages/7-traveler-info/TravelerInfo";
import CompleteProduct from "./pages/8-complete-product/CompleteProduct";

// improvment pages
import ImpLovingLocal from "./pages/improvement/1-improved-loving-local/ImpLovingLocal";
import ImpLocalTrip from "./pages/improvement/2-1-improved-local-trip/ImpLocalTrip";
import ImpSeeDetail from "./pages/improvement/2-2-improved-see-detail/ImpSeeDetail";
import ImpSelectPeople from "./pages/improvement/3-improved-select-people/ImpSelectPeople";
import ImpSelectDate from "./pages/improvement/4-1-improved-select-date/ImpSelectDate";
import ImpSelectProduct from "./pages/improvement/4-2-improved-select-product/ImpSelectProduct";
import ImpTravelerAgree from "./pages/improvement/4-3-improved-traveler-agree/ImpTravelerAgree";
import ImpTravelerInfo from "./pages/improvement/4-4-improved-traveler-info/ImpTravelerInfo";
import ImpCompleteProd from "./pages/improvement/4-5-improved-complete-product/ImpCompleteProd";

import styles from "./App.module.css";

export const UserContext = createContext();
export const ImpUserContext = createContext();

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  const [info, setInfo] = useState({
    region: "",
    date: "",
    day: "",
    people: 0,
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
    reserveName: "홍길동",
    travelerName: "",
    dob: "19970122",
    phone: "01000000000",
    email: "teamprojectkise@gmail.com",
    gender: "m",
  });

  const [impInfo, setImpInfo] = useState({
    region: "",
    date: "",
    day: "",
    people: 2,
    product: { name: "", price: 0 },
    package: { name: "", price: 0 },
    goTrain: {
      id: "",
      // trainNo: "",
      trainName: "",
      trainNo: "",
      trainGrade: "economy",
      departstation: "",
      departtime: "",
      arrivalstation: "",
      arrivaltime: "",
      price: 0,
    },
    comeTrain: {
      id: "",
      // trainNo: "",
      trainName: "",
      trainNo: "",
      trainGrade: "economy",
      departstation: "",
      departtime: "",
      arrivalstation: "",
      arrivaltime: "",
      price: 0,
    },
    reserveName: "홍길동",
    travelerName: "",
    dob: "19970122",
    phone: "01000000000",
    email: "teamprojectkise@gmail.com",
    gender: "m",
  });

  return (
    <div className={styles.App}>
      <UserContext.Provider value={{ info, setInfo }}>
        <ImpUserContext.Provider value={{ impInfo, setImpInfo }}>
          <Routes>
            <Route path="/" element={<LovingLocal />} />
            <Route path="/localtrip/:local" element={<LocalTrip />} />
            <Route path="/seedetail/:id" element={<SeeDetail />} />
            <Route path="/selectdate" element={<SelectDate />} />
            <Route path="/selectproduct" element={<SelectProduct />} />
            <Route path="/selectdetail" element={<SelectDetail />} />
            <Route path="/traveleragree" element={<TravelerAgree />} />
            <Route path="/travelerinfo" element={<TravelerInfo />} />
            <Route path="/completeproduct" element={<CompleteProduct />} />

            <Route path="/imp">
              <Route path="lovinglocal" element={<ImpLovingLocal />} />
              <Route path="localtrip/:local" element={<ImpLocalTrip />} />
              <Route path="seedetail/:id" element={<ImpSeeDetail />} />
              <Route path="selectpeople" element={<ImpSelectPeople />} />
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
