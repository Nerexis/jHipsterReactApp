import React from 'react';
import {Input, Form, FormGroup, Button, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {connect} from 'react-redux';

class AddDataSourceForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      url: '',
      xpath: ''
    }

    this.handleClose = this.handleClose.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleClose() {
    this.props.closeCallback();
  }

  handleOnChange(e) {
    let id = e.target.id;
    let val = e.target.value;

    this.setState({ [id]: val});
  }

  handleOnSubmit() {
    this.props.addDataSource(this.state.name, this.state.url, this.state.xpath);
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.show}>
          <ModalHeader>New data source</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for={'dataSourceName'}>Data source name: </Label>
                <Input type={'text'} id={'name'} placeholder={'Data source name'} onChange={this.handleOnChange}/>
                <Label for={'url'}>Data source URL: </Label>
                <Input type={"text"} id={'url'} placeholder={'Data source URL'} onChange={this.handleOnChange}/>
                <Label for={'xpath'}>Data source XPath expression: </Label>
                <Input type={'textarea'} id={'xpath'} placeholder={'Data Source XPath expression'} onChange={this.handleOnChange}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleOnSubmit}>Save</Button>
            <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addDataSource: (name,url,xpath) => {  dispatch({type: 'ADD_DATA_SOURCE', name: name, url: url, xpath: xpath }) }
  };
};

export default connect(null,mapDispatchToProps)(AddDataSourceForm);
