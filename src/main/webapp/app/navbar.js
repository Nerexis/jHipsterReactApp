import React from 'react';
import {NavLink} from "react-router-dom";

// handleOnHover = (e) => {
//   alert('test: ' + e.name);
// };

const Navbar = (props) => {
  return <nav className={'navbar navbar-expand-lg navbar-dark bg-dark sticky-top'}>
    <div className={'container-fluid'}>
      <div className={'navbar-header'}>
        <a href={'/'} className={'navbar-brand'}>{props.brandName}</a>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={'collapse navbar-collapse'} id="navbarNav">
        <ul className={'navbar-nav nav-pills'}>
          {
            props.menuItems.map((item, idx) =>
              <li className={'nav-item'} key={idx}>
                <NavLink to={item.link} className={'nav-link'}>{item.name}</NavLink>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  </nav>;
};

export default Navbar;
