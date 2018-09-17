import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import React from 'react';
import Navbar from './navbar';
import Sidebar from "./sidebar";
import {HashRouter} from "react-router-dom";
import Dashboard from "./dashboard";
import ViewRoutes from "./view-routes";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brandName: 'NiceBrand',
      menuItems: [
        {id: 1, name: 'Dashboard', link: '/dashboard'},
        {id: 2, name: 'Add link', link: '/addLink'},
        {id: 3, name: 'Posts', link: '/posts'}
      ]
    };
  }

  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar brandName={this.state.brandName} menuItems={this.state.menuItems}/>
          <div className="container-fluid row" id={'content-view'}>
            <Sidebar links={this.state.menuItems}/>
            <ViewRoutes/>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default App;
