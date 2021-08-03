import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "./routeNames";
import ClassCounterContainer from "../pages/ClassCounterPage/containers/ClassCounterContainer";
import HomePageContainer from "../pages/HomePage/container/HomePageContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounterPage/containers/FunctionalCounterContainer";
import CounterOfCountersContainer from "../pages/CounterOfCountersPage/containers/CounterOfCountersContainer";
import FormPageContainer from "../pages/Forms/containers/FormContainer";
import ReduxCounterManagerContainer from "../pages/ReduxCounterManagerPage/containers/ReduxCounterManagerContainer";
import AsyncOperationsPageContainer from "../pages/AsyncOperationsPage/containers/AsyncOperationsPage";
import PokemonPageContainer from "../pages/PokemonDetailsPage/containers/PokemonDetailsPage";

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
      <Route
        exact
        path={ROUTES.REDUX}
        component={ReduxCounterManagerContainer}
      />
      <Route
        exact
        path={ROUTES.POKEMONS_PAGE}
        component={AsyncOperationsPageContainer}
      />
      <Route
        exact
        path={ROUTES.POKEMON_DETAILS}
        component={PokemonPageContainer}
      />
      <Route component={HomePageContainer} />
    </Switch>
  );
};

export default Routes;
