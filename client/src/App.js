import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Navbar";
import Navigator from "./Components/Navigator";
import Single from "./Pages/Single";
import Random from "./Pages/Random";
import Multiple from "./Pages/Multiple";
import Mathematicians from "./Pages/Mathematicians";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  const NotFound = () => {
    return <div className='p-5 text-light display-1 bg-black'>NotFound</div>;
  };
  const SocialLinks = {
    linkdin: "https://www.linkedin.com/in/priyang-patel-948685176",
    github: "https://github.com/priyang12",
    twitter: "https://twitter.com/Priyang_Bawa",
  };
  return (
    <div className='App'>
      <Router>
        <Header Title='Tales of Numbers' />
        <Navigator />
        <Switch>
          <Route exact path='/' component={Single} />
          <Route exact path='/Math' component={Mathematicians} />
          <Route exact path='/Random' component={Random} />
          <Route exact path='/Multiple' component={Multiple} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer links={SocialLinks} />
      </Router>
    </div>
  );
}

export default App;
