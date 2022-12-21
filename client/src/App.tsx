import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Header Title="Tales of Numbers" />
        <AlertBox alertMessage="No Internet Connection" display={!Online} />
        <Navigator />
        <Routes>
          <Route path="/" element={<Single />} />
          <Route path="/Random" element={<Random />} />
          <Route path="/Multiple" element={<Multiple />} />
          <Route path="/Math" element={<Mathematicians />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
