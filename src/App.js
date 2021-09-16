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
import doctorsData from './doctorsData';
import { useState } from 'react';

function App() {
  const [doctors, setDoctors] = useState(doctorsData);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/doctors/:doctorSlug">
          <DoctorDetails doctors={doctors} />
        </Route>
        <Route path="/doctors">
          <Doctors doctors={doctors} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
