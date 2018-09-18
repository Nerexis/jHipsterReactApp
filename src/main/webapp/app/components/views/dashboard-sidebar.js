import React from 'react';
import AddDataSourceButton from "../forms/adddatasource/add-data-source-button";
import Sidebar from "../navigation/sidebar";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <ul className={'list-group'}>
        <li className={'list-group-item'}>
          <AddDataSourceButton/>
        </li>
      </ul>
    </Sidebar>
  );
};

export default DashboardSidebar;
