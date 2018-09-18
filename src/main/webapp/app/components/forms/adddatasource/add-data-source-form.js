import React from 'react';
import {Button, Modal} from "react-bootstrap";

class AddDataSourceForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleClose = () => {
      this.props.closeCallback();
    }
  }

  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>One fine body...</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddDataSourceForm;
