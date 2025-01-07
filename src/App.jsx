import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
import ReCAPTCHA from "react-google-recaptcha";
import Servicos from "./pages/servicos/Servicos";
import Portfolio from "./pages/portfolio/Portfolio";
import Login from "./components/login/login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar user={user} setUser={setUser} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
