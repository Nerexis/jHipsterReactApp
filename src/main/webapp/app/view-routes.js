import React from 'react';
import AddLink from "./add-link";
import {Route} from "react-router-dom";
import Dashboard from "./dashboard";
import {Fade} from "reactstrap";
import {Switch} from "react-router";
import Posts from "./posts";

const ViewRoutes = () => {
  return (
    <div id={'ViewRoutes'} className={'col'}>
      <Fade>
        <Switch>
          <Route exact path={'/'} component={Dashboard}/>
          <Route path={'/dashboard'} component={Dashboard}/>
          <Route path={'/addLink'} component={AddLink}/>
          <Route path={'/posts'} component={Posts}/>
        </Switch>
      </Fade>
    </div>
  );
};

export default ViewRoutes;
