import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Navigator from './Components/Navigator';
import Single from './Pages/Single';
import Random from './Pages/Random';
import Multiple from './Pages/Multiple';
import Mathathesians from './Pages/Mathathesians';
import './App.css';

function App() {
  const NotFound = () => {
    return <div className='p-5 text-light display-1 bg-black'>NotFound</div>;
  };
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Navigator />
        <Switch>
          <Route exact path='/' component={Single} />
          <Route exact path='/Math' component={Mathathesians} />
          <Route exact path='/Random' component={Random} />
          <Route exact path='/Multiple' component={Multiple} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
