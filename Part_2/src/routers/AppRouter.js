import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import React from "react";

// 080 Breaking into components
import DashBoard from "../components/DashBoard";
// Perform smilar for all

const AnotherPage = () => <div>Another Page Reached</div>;

const DynamicPage = props => {
  console.log(props);
  return <div>This page is </div>;
};

const Error404 = () => <div>404 Page Not Found</div>;

const Header = () => (
  <div>
    <h1>This is a header</h1>
    <NavLink to="/" exact={true}>
      Home
    </NavLink>
    <NavLink to="/other">Another Page</NavLink>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      {/* This will show on every page */}
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/other" component={AnotherPage} />
        <Route path="/dynamic/:id" component={DynamicPage} />
        {/* Not working */}
        <Route component={Error404} />
        {/* Route is used to create a route to another page */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
