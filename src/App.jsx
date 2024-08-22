import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Infos from "./Infos";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Infos />
    </>
  );
}

export default App;
