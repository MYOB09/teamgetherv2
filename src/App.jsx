import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Infos from "./Infos";
import Contactus from "./Contactus";
import Pricing from "./Pricing";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Infos />
      <Pricing />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
