import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import CreateCVPage from "./components/CreateCVPage.jsx";
import LoadCVPage from "./components/LoadCVPage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Header />
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "create-cv" && (
        <CreateCVPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "load-cv" && (
        <LoadCVPage setCurrentPage={setCurrentPage} />
      )}
      <Footer />
    </>
  );
}

export default App;
