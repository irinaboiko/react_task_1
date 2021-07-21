import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ROUTES} from "./routeNames";
import ClassCounterContainer from "../pages/ClassCounterPage/containers/ClassCounterContainer";
import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounterPage/containers/FunctionalCounterContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route exact path={ROUTES.CLASS_COUNTER_PAGE} component={ClassCounterContainer} />
      <Route exact path={ROUTES.FUNCTIONAL_COUNTER_PAGE} component={FunctionalCounterContainer} />
      <Redirect to={ROUTES.HOME_PAGE} />
    </Switch>
  );
};

export default Routes;
