import React from 'react';
import ContentRow from "../../content-row";
import ContentBox from "../../content-box";
import DashboardSidebar from "./dashboard-sidebar";
import {connect} from 'react-redux';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className={'row dashboard-view'}>
          <DashboardSidebar/>
          <div className="col">
            <ContentRow>
              {
                this.props.dataSources.map( (item, index) =>
                     <ContentBox key={index}>
                       <h1>{item.name}</h1>
                       <h2>{item.url}</h2>
                       <h3>{item.xpath}</h3>
                     </ContentBox>
                )
              }
            </ContentRow>
          </div>
        </div>
      </React.Fragment>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    dataSources: state.dataSources
  };
}

export default connect(mapStateToProps)(Dashboard);
