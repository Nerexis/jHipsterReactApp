import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const Sidebar = (props) => {
  return (
    <nav className={'sidebar-left box col-sm-2 col-md-2 d-none dl-md-block d-lg-block d-xl-block'}>
        <ul className={'list-group list-unstyled'}>
          {
            props.links.map((item, idx) =>
              <li className={'list-group-item'} key={idx}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            )
          }
        </ul>
    </nav>
  );
};

export default Sidebar;
