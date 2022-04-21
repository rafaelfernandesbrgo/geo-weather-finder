import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../pages/Main';
import Page404 from '../pages/404';




const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} sensitive />
      <Route path="/main" exact component={Main} sensitive isPrivate={false} />
    <Route component={Page404} />
  </Switch >
);

export default Routes;

