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
    authRequired: true,
  }),

  new Route({
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
  }),
  // Admin Page Routes ( Staff Page not given to end-user yet )
  new Route({
    path: "/draggable",
    title: "Draggable",
    component: Draggables,
  }),
];

export default routes;
