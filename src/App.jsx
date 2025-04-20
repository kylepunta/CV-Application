import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import CreateCVPage from "./components/CreateCVPage.jsx";
import LoadCVPage from "./components/LoadCVPage.jsx";
import ShowCVPage from "./components/ShowCVPage.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cvDetails, setCVdetails] = useState([[], [], [], [], [], []]);

  useEffect(() => {
    console.log(cvDetails);
  }, [cvDetails]);

  return (
    <>
      <Header />
      {currentPage === "home" && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === "create-cv" && (
        <CreateCVPage
          setCurrentPage={setCurrentPage}
          setCVdetails={setCVdetails}
        />
      )}
      {currentPage === "load-cv" && (
        <LoadCVPage setCurrentPage={setCurrentPage} cvDetails={cvDetails} />
      )}
      {currentPage === "show-cv" && (
        <ShowCVPage setCurrentPage={setCurrentPage} cvDetails={cvDetails} />
      )}
      <Footer />
    </>
  );
}

export default App;
