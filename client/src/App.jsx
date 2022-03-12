import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navigator from "./Components/Navigator";
import Single from "./Pages/Single";
import Random from "./Pages/Random";
import NotFound from "./Pages/NotFound";
import Multiple from "./Pages/Multiple";
import Mathematicians from "./Pages/Mathematicians";
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
  const SocialLinks = {
    linkedin: "https://www.linkedin.com/in/priyang-patel-948685176",
    github: "https://github.com/priyang12",
    twitter: "https://twitter.com/Priyang_Bawa",
  };
  return (
    <div className='App'>
      <Router>
        <Header Title='Tales of Numbers' />
        <AlertBox alertMessage='No Internet Connection' display={!Online} />
        <Navigator />
        <Switch>
          <Route exact path='/' component={Single} />
          <Route exact path='/Random' component={Random} />
          <Route exact path='/Multiple' component={Multiple} />
          <Route exact path='/Math' component={Mathematicians} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer links={SocialLinks} />
      </Router>
    </div>
  );
}

export default App;
