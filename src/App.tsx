import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Literacy from "./components/pages/Literacy";
import Modules from "./components/pages/Modules";
import ClinicalPractice from "./components/pages/ClinicalPractice";
import InTASCStandards from "./components/pages/InTASCStandards";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "Home" && <Home />}
      {currentPage === "Literacy" && <Literacy />}
      {currentPage === "Modules" && <Modules />}
      {currentPage === "Clincal Practice" && <ClinicalPractice />}
      {currentPage === "InTASC Standards" && <InTASCStandards />}
    </>
  );
};

export default App;
