import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/loving-local-page/LovingLocal";
import LocalTrip from "./pages/local-trip-page/LocalTrip";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LovingLocal />} />
      <Route path="/localtrip" element={<LocalTrip />} />
    </Routes>
  );
}

export default App;
