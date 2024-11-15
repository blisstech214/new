import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/main/Navbar";
import About from "./component/Page/about/About";
import Service from "./component/Page/service/Service";
import Portfolio from "./component/Page/portfolio/Portfolio";
import ContMain from "./component/Page/contact/ContMain";
import Footer from "./component/main/Footer";
import HomeMain from "./component/Page/Home/HomeMain";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContMain />} />
        </Routes>
      </main>
      <Footer />
    
    </Router>
  );
}

export default App;
