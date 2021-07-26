import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTES } from "./routeNames";
import ClassCounterContainer from "../pages/ClassCounterPage/containers/ClassCounterContainer";
import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounterPage/containers/FunctionalCounterContainer";
import CounterOfCountersContainer from "../pages/CounterOfCountersPage/containers/CounterOfCountersContainer";
import FormPageContainer from "../pages/Forms/containers/FormContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePageContainer} />
      <Route
        exact
        path={ROUTES.CLASS_COUNTER_PAGE}
        component={ClassCounterContainer}
      />
      <Route
        exact
        path={ROUTES.SIMPLE_FUNC_COUNTER_PAGE}
        component={FunctionalCounterContainer}
      />
      <Route
        exact
        path={ROUTES.COUNTER_OF_COUNTERS_PAGE}
        component={CounterOfCountersContainer}
      />
      <Route exact path={ROUTES.FORM} component={FormPageContainer} />
      <Route component={HomePageContainer} />
    </Switch>
  );
};

export default Routes;
