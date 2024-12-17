import { Routes, Route } from "react-router-dom";
import LovingLocal from "./pages/loving-local-page/LovingLocal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LovingLocal />} />
    </Routes>
  );
}

export default App;
