import React from 'react';
import { Input, Modal, Loader, Button, Table, Dimmer, Image, Segment, Icon } from 'semantic-ui-react'

import scatter from '../helpers/scatter'
import { thisExpression } from '@babel/types';

class ControlPanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      connection: false
    }
    this.openWallet = this.openWallet.bind(this)
    this.logoutScatter = this.logoutScatter.bind(this)
  }

  async componentDidUpdate() {
    if (this.props.isOpen) {
      await this.openWallet()
    }
  }

  async openWallet() {
    let connection = await scatter.init()
    console.log("connected")
    console.log(connection)
    
    if (!this.state.connection) {
      this.setState({ connection })
    }
  }

  logoutScatter() {
    scatter.logout()
    window.location.reload()
  }

  transferTokens(amt) {
    scatter.transfer(1)
  }

  renderTable(connection) {
    let account = connection.identity.accounts[0]
    return (
      <Table basic='very'>
      
      <Table.Body>
        <Table.Row>
          <Table.Cell>Account</Table.Cell>
          <Table.Cell>
            <h2>
            {account.name} &nbsp; 
            <Icon name="sign-out" onClick={this.logoutScatter} />
            </h2>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Autoscale Balance</Table.Cell>
          <Table.Cell><h3>0.00 EOS</h3></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Deposit EOS</Table.Cell>
          <Table.Cell>


            <Input type="number" name="quantity" placeholder="1.5" step="0.1" min="0" max="500" /> 
            &nbsp; 
            <Button onClick={this.transferTokens}>Deposit</Button>
            <br />
            You can also send EOS tokens to <b>autoscale.x</b>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
  

    </Table>
    )
  }

  render() {
    return (
      <Modal size={'tiny'} open={this.props.isOpen} onClose={this.props.closeModal}>
        <Modal.Header>Autoscale Control Panel</Modal.Header>
        <Modal.Content>
          {this.state.connection ?     
            this.renderTable(this.state.connection)
          :
            <div>
              <Segment basic>
                <Dimmer active inverted>
                  <Loader inverted>Connecting...</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </Segment>
              <a href="#" onClick={this.openWallet}>Retry wallet</a>
            </div>

          }
        </Modal.Content>
      </Modal>
    );
  }
}

export default ControlPanel;
