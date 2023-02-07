import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalContext } from "../utils/context";
import { useState } from "react";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <GlobalContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
