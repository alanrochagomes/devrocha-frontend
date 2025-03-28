import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";
// import ReCAPTCHA from "react-google-recaptcha";
import Servicos from "./pages/servicos/Servicos";
import Portfolio from "./pages/portfolio/Portfolio";
import Login from "./components/login/login";
import ForgotPassword from "./components/login/ForgotPassword";
import ResetPassword from "./components/login/ForgotPassword";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import About from "./pages/about/About";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Blog from "./pages/blog/blog";
import BlogPost from "./pages/blog/blogPost";
import FaleConosco from "./pages/faleConosco/FaleConosco";
import ProgressRequestForm from "./components/ProgressRequestForm/ProgressRequestForm";
// import CookieConsent from "./components/cookie/CookieConsent";

import Pagamento from "./components/Pagamento/Pagamento";

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
            <Route path="/projetos" element={<Portfolio />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/andamento" element={<ProgressRequestForm />} />

            <Route path="/pagamento" element={<Pagamento />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
        {/* <CookieConsent /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
