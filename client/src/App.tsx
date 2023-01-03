import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Navigator from "./Components/Navigator";
import Single from "./Pages/Single/Single";
import Random from "./Pages/Random/Random";
import NotFound from "./Pages/NotFound/NotFound";
import Multiple from "./Pages/Multiple/Multiple";
import Mathematicians from "./Pages/Mathematicians/Mathematicians";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { AlertBox } from "./Components/AlertBox";
import { AnimatePresence } from "framer-motion";
import ReloadPrompt from "./Components/ReloadPrompt";

function AnimateRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Single />} />
        <Route path="/Random" element={<Random />} />
        <Route path="/Multiple" element={<Multiple />} />
        <Route path="/Math" element={<Mathematicians />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [Online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnline(true);
    });
    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  return (
    <div className="App">
      <ReloadPrompt />
      <BrowserRouter>
        <Header Title="Tales of Numbers" />
        <AlertBox alertMessage="No Internet Connection" display={!Online} />
        <Navigator />
        <AnimateRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
