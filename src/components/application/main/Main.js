import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from './Main.styles';
import routes from '../routes';

const Main = () => (
  <Container>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} component={route.component} key={route.path} />
        ))}
        <Route>
          <div>Page not found</div>
        </Route>
      </Switch>
    </Router>
  </Container>
);

export default Main;
