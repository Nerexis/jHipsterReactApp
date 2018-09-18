import React from 'react';
import AddLink from "./add-link";
import {Route} from "react-router-dom";
import Dashboard from "./components/views/dashboard";
import {Switch} from "react-router";
import Posts from "./posts";

const ViewRoutes = () => {
  return (
      <Switch>
        <Route exact path={'/'} component={Dashboard}/>
        <Route path={'/dashboard'} component={Dashboard}/>
        <Route path={'/addLink'} component={AddLink}/>
        <Route path={'/posts'} component={Posts}/>
      </Switch>
  );
};

export default ViewRoutes;
