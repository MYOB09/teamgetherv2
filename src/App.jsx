import "./App.css";
import Homepage from "./Pages/Homepage";
import FeaturesPage from "./Pages/FeaturesPage";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import EngagementPage from "./Pages/EngagementPage";
import ManagersPage from "./Pages/ManagersPage";
import DSpacePage from "./Pages/DspacePage";
import ReportingPage from "./Pages/ReportingPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/managers" element={<ManagersPage />} />
          <Route path="/digitalspace" element={<DSpacePage />} />
          <Route path="/reporting" element={<ReportingPage />} />
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
