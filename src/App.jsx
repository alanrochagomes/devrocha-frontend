import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
