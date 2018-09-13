import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import React from 'react';
import Navbar from './navbar';

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
        <div className="jakisdiv">
          <h1>Test tytuł</h1>
          <p>Lorem ipsum sripsum pipsum </p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
