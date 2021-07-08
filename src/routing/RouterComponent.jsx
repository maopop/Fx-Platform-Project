import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Forex from '../pages/Forex';
import FixedIncome from '../pages/FixedIncome';
import Equity from '../pages/Equity';

const RouterComponent = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Forex' component={Forex} />
          <Route exact path='/FixedIncome' component={FixedIncome} />
          <Route exact path='/Equity' component={Equity} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterComponent;
