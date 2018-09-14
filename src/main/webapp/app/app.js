import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import React from 'react';
import Navbar from './navbar';
import Sidebar from "./sidebar";
import ContentBox from "./content-box";
import ContentRow from "./content-row";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brandName: 'NiceBrand',
      menuItems: [
        {id: 1, name: 'Link 1'},
        {id: 2, name: 'Link 2'},
        {id: 3, name: 'Link 3'}
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar brandName={this.state.brandName} menuItems={this.state.menuItems}/>
        <div className="container-fluid h-100 row" id={'content-view'}>
          <Sidebar links={this.state.menuItems}/>
          <div className="col">
            <ContentRow>
              <ContentBox>
                dupa
              </ContentBox>
              <ContentBox>
                dupa
              </ContentBox>
              <ContentBox>
                dupa
              </ContentBox>
            </ContentRow>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
