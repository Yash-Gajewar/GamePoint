import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner/Banner";
import Corporate from "./pages/Corporate/Corporate";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/corporate" element={<Corporate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
