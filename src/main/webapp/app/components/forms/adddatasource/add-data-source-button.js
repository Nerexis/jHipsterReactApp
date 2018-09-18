import React from 'react';
import {Button} from "react-bootstrap";
import AddDataSourceForm from "./add-data-source-form";

class AddDataSourceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

    this.handleShow = () => {
      this.setState({show: true});
    }
    this.handleClose = () => {
      this.setState({show: false});
    }
  }

  render() {
    return (
      <React.Fragment>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          New data source
        </Button>
        <AddDataSourceForm show={this.state.show} closeCallback={this.handleClose}/>
      </React.Fragment>

    );
  }

};

export default AddDataSourceButton;
