import React from 'react';
import { Modal, Button } from 'semantic-ui-react'

import scatter from '../helpers/scatter'

class ControlPanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    async componentDidUpdate() {
      if(this.props.isOpen) {
        let connected = await scatter.init()
        console.log("connected")
        console.log(connected)
      }
    }

    render() {
        return (
            <Modal size={'tiny'} open={this.props.isOpen} onClose={this.props.closeModal}>
            <Modal.Header>Autoscale Control Panel</Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete your account</p>
            </Modal.Content>
          </Modal>
        );
    }
}

export default ControlPanel;
