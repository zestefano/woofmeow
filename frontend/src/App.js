import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Sitters from "./components/Sitters/sitters";
import SitterPage from "./components/SitterPage";
import HomePage from "./components/HomePage/homePage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/sitters">
            <Sitters />
          </Route>
          <Route path="/:sitterId">
            <SitterPage />
          </Route>
          <Route>
            <HomePage path="/" />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;