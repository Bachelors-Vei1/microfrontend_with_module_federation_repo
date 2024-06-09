import React, {lazy, Suspense, useState, useEffect} from "react";
import { Router, Route, Switch, Redirect} from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {createBrowserHistory} from "history";

import Header from "./components/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp").catch(() => {
  return { default: () => <>Marketing service is unavailable</> };
}));
const AuthLazy = lazy(() => import("./components/AuthApp").catch(() => {
  return { default: () => <>Authentication service is unavailable</> };
}));
const AboutLazy = lazy(() => import("./components/AboutApp").catch(() => {
  return { default: () => <>About me service is unavailable</> };
}));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/about");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
              </Route>
              <Route path="/about">
                {!isSignedIn && <Redirect to="/" />}
                <AboutLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
