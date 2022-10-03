import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../../../pages/About";
import Posts from "../../../pages/posts";
import Error from "../../../pages/Error";
import PostIdPage from "../../../pages/postIdPage";
import { publicRoutes, privateRoutes } from "../../../router/routes";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";
import Loader from "../Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)
  if (isLoading){
    return <Loader/>
  }

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
