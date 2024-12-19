import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/loving-local-page/LovingLocal";
import LocalTrip from "./pages/local-trip-page/LocalTrip";
import Component from "./components/common/ComponentExample";
import SelectProduct from "./pages/select-product-page/SelectProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LovingLocal />} />
      <Route path="/localtrip" element={<LocalTrip />} />
      <Route path="/selectproduct" element={<SelectProduct />} />
    </Routes>
  );
}

export default App;
