import "./App.css";
import Homepage from "./Pages/Homepage";
import FeaturesPage from "./Pages/FeaturesPage";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </HashRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </BrowserRouter> */}
      {/* <FeaturesPage /> */}
    </>
  );
}

export default App;
