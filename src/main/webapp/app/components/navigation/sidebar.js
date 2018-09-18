import React from 'react';

const Sidebar = (props) => {
  return (
    <div className={'sidebar-left box col-sm-2 col-md-2 d-none dl-md-block d-lg-block d-xl-block'}>
      {props.children}
    </div>
  );
};

export default Sidebar;
