import * as Accounts from "../Modules/Accounts";
import Dashboard from "../Modules/Dashboard";
import Draggables from "../Modules/Draggable";

class Route {
  constructor({
    path,
    component,
    title,
    onNavigation = false,
    exact = true,
    authRequired = true,
  }) {
    this.path = path;
    this.component = component;
    this.title = title;
    this.onNavigation = onNavigation;
    this.exact = exact;
    this.authRequired = authRequired;
  }
}

const routes = [
  new Route({
    path: "/login",
    title: "Login",
    component: Accounts.Login,
    authRequired: false,
  }),
  new Route({
    path: "/",
    title: "Login",
    component: Accounts.Login,
    authRequired: false,
  }),
  new Route({
    path: "/sign-up",
    title: "SignUp",
    component: Accounts.SignUp,
    authRequired: false,
  }),
  new Route({
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
  }),
  new Route({
    path: "/draggable",
    title: "Draggable",
    component: Draggables,
  }),
];

export default routes;
