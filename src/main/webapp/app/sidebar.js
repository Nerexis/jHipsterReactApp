import React from 'react';

const Sidebar = (props) => {
  return (
    <nav className={'sidebar-left box h-100 col-sm-3 col-md-2'}>
      <ul className={'list-group list-unstyled'}>
        {
          props.links.map((item,idx) =>
            <li className={'list-group-item'} key={idx}>
              <a href={'#'}>{item.name}</a>
            </li>
          )
        }
      </ul>
    </nav>
  );
};

export default Sidebar;
