import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import Layout from "./hoc/Layout/Layout";
import { Route, Redirect } from "react-router-dom";

import CharactersPage from "./Containers/Characters/Characters";
import FavoritesPage from "./Containers/Favorites/Favorites";
import FilmsPage from "./Containers/Films/Films";
import * as actions from "./store/Actions/App";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const onStartApp = useCallback(() => dispatch(actions.StartApp()), [
    dispatch,
  ]);

  useEffect(() => {
    onStartApp();
  }, [onStartApp]);

  return (
    <Layout>
      <Route path="/" exact component={FilmsPage} />
      <Route path="/characters" exact component={CharactersPage} />
      <Route path="/favorites" exact component={FavoritesPage} />
      <Redirect to="/" />
    </Layout>
  );
}

export default App;
