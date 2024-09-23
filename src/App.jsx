import "./App.css";
import Homepage from "./Pages/Homepage";
import FeaturesPage from "./Pages/FeaturesPage";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import EngagementPage from "./Pages/EngagementPage";
import ManagersPage from "./Pages/ManagersPage";
import DSpacePage from "./Pages/DspacePage";
import ReportingPage from "./Pages/ReportingPage";
import IndustriesPage from "./Pages/IndustriesPage";
import AboutPage from "./Pages/AboutPage";
import BookDemoPage from "./Pages/BookDemoPage";
import ContactPage from "./Pages/ContactPage";

import ScrollToTop from "./ScrollToTop";
import { ScrollRestoration } from "react-router-dom";
import { useEffect, useRef } from "react";
import FAQPage from "./Pages/FAQPage";
import Terms from "./Terms";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/managers" element={<ManagersPage />} />
          <Route path="/digitalspace" element={<DSpacePage />} />
          <Route path="/reporting" element={<ReportingPage />} />
          <Route path="/book-a-demo" element={<BookDemoPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
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
