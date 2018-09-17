import React from 'react';
import ContentRow from "./content-row";
import ContentBox from "./content-box";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  };
};

export default Dashboard;
