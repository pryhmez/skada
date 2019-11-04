import React from 'react';
import './App.css';
import {Switch,Route} from "react-router-dom"
import Landing from "./components/LandingPage";
import Login from "../src/Login/components/Login"
import Register from "../src/Register/components/Register"
import Dashboard from "./Dashboard/components/Dashboard"
import Shedule from "./Shedule/components/Shedule"
import Complete from "./SheduleComplete/components/Complete";
import Tracking from "./Track/components/Track";
import DeliveryStatus from "./DeliveryStatus/DeliveryStatus"



function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/register1" component={Login}></Route>
      <Route path="/register2" component={Register}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/schedule" component={Shedule}></Route>
      <Route path="/complete" component={Complete}></Route>
      <Route path="/tracking" component={Tracking}></Route>
      <Route path="/delivery status" component={DeliveryStatus}></Route>
      </Switch>
    </div>
  );
}

export default App;
