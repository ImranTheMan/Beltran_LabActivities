import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Step 1: Add state for the toggle switch
  const [toggleSwitch, setToggleSwitch] = useState(false);

  // Step 2: Create a function to handle the toggle switch state
  const handleToggleSwitch = () => {
    setToggleSwitch(!toggleSwitch);
  };
  useEffect(() => {
    document.body.style.backgroundColor = toggleSwitch ? "#ffffff" : "#171717";
  }, [toggleSwitch]);

  return (
    <div
      className="App d-flex flex-column min-vh-100"
      style={{ backgroundColor: toggleSwitch ? "#ffffff" : "#171717" }}
    >
      <Header />
      <div className="d-flex flex-column align-items-center flex-grow-1 logo">
        <SearchBar />
      </div>
      <Footer
        className="fixed-bottom"
        toggleSwitch={toggleSwitch}
        handleToggleSwitch={handleToggleSwitch}
      />
    </div>
  );
}

export default App;
