import React from 'react';
import {Modal, ModalBody, Button} from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.hideBeast}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <ModalBody><img src={this.props.beast.image_url} alt={this.props.beast.title}/></ModalBody>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.hideBeast}>Close</Button>
        </Modal.Footer>
      </Modal>

    )
  }
}

export default SelectedBeast;