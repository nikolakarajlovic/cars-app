import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AppCars from './pages/AppCars';
import AddCar from './pages/AddCar';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
          <Route path="/add">
            <AddCar />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
