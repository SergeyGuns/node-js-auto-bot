import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import LostArkFishingPage from './containers/LostArkFishingPage';

export default () => (
  <App>
    <Switch>
      <Route
        exact
        path={routes.LOST_ARK_FISHING}
        component={LostArkFishingPage}
      />
      <Route exact path={routes.COUNTER} component={CounterPage} />
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
