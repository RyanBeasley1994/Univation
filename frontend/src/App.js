import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ViewCars from './Views/Pages/View Cars/viewCars'
import CreateCars from './Views/Pages/Create Cars/createCars'
import Sidebar from './Views/Sidebar/sidebar'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact><ViewCars /></Route>
        <Route path='/create'><CreateCars /></Route>
      </Switch>
    </Router>
  );
}

export default App;
