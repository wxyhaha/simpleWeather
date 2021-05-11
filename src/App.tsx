import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Start from './views/Start';
import Weather from './views/Weather';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/start">
            <Start/>
          </Route>
          <Route path="/weather">
            <Weather/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
