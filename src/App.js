import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Helmet from "react-helmet";
import NotFound from "./App/Layout/NotFound";
import NavBar from "./App/Layout/NavBar";
import NonLoggedIn from "./App/Layout/NonLogged";
import routes from "./App/Router";

const TitleComponent = ({ title }) => {
  const defaultTitle = "Demo";
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
};

function App() {
  const userToken = localStorage.getItem("isLoggedIn");

  const AuthRoute = ({ component: Component, title, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        userToken ? (
          <React.Fragment>
            <TitleComponent title={title} />
            <Component {...props} />
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
  let Navigation;
  if (userToken) {
    Navigation = NavBar;
  } else {
    Navigation = NonLoggedIn;
  }
  return (
    <>
      <Router>
        <Navigation>
          <Switch>
            {routes.map((route) =>
              route.authRequired ? (
                <AuthRoute
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  title={route.title}
                  component={route.component}
                />
              ) : (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  title={route.title}
                  component={route.component}
                />
              )
            )}
            <Route path="">
              <NotFound />
            </Route>
          </Switch>
        </Navigation>
      </Router>
    </>
  );
}

export default App;
