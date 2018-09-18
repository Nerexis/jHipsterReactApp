import React from 'react';
import ContentRow from "../../content-row";
import ContentBox from "../../content-box";
import DashboardSidebar from "./dashboard-sidebar";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={'row dashboard-view'}>
          <DashboardSidebar/>
          <div className="col">
            <ContentRow>
              <ContentBox>1</ContentBox>
              <ContentBox>2</ContentBox>
              <ContentBox>3</ContentBox>
            </ContentRow>
            <ContentRow>
              <ContentBox>1</ContentBox>
              <ContentBox>2</ContentBox>
              <ContentBox>3</ContentBox>
            </ContentRow>
          </div>


        </div>
      </React.Fragment>
    );
  };
};

export default Dashboard;
