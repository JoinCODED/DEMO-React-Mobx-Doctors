import './App.css';
import './assets/css/animate.css';
import './assets/css/bootstrap-5.0.0-beta2.min.css';
import './assets/css/LineIcons.2.0.css';
import './assets/css/main.css';
import './assets/css/tiny-slider.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Doctors from './Components/Doctors';
import { Route, Switch } from 'react-router';
import DoctorDetails from './Components/DoctorDetails';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/doctors/:doctorSlug">
          <DoctorDetails />
        </Route>
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
