import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GlobalContext } from "../utils/context";
import { useState } from "react";
import Menu from "../components/Menu";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <GlobalContext.Provider value={{ isMenuVisible, setIsMenuVisible }}>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
