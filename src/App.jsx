import "./App.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { PetsNew } from "./PetsNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets/new" element={<PetsNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
