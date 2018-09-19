import React from 'react';
import AddDataSourceForm from "./add-data-source-form";
import {Button} from "reactstrap";

class AddDataSourceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({show: true});
  }
  handleClose() {
    this.setState({show: false});
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleShow}>
          New data source
        </Button>
        <AddDataSourceForm show={this.state.show} closeCallback={this.handleClose}/>
      </React.Fragment>

    );
  }

};


export default AddDataSourceButton;
