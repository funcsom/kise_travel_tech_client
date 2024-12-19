import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/loving-local-page/LovingLocal";
import LocalTrip from "./pages/local-trip-page/LocalTrip";
import Component from "./components/common/ComponentExample";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LovingLocal />} />
      <Route path="/localtrip" element={<LocalTrip />} />
      <Route path="/selectproduct" element={<Component />} />
    </Routes>
  );
}

export default App;
