import React from 'react';
import { Tab, Input, Modal, Loader, Button, Table, Dimmer, Image, Segment, Icon } from 'semantic-ui-react'
import scatter from '../../helpers/scatter'

import Balance from './Balance'
import Priority from './Priority';
import Estimator from './Estimator';


class ControlPanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      connection: false,
      depositLoading: false,
      depositAmt: 0.5,
      depositError: '',
      autoscale_balance: 0,
      showBalance: true // render balance component
    }
    this.openWallet = this.openWallet.bind(this)
    this.logoutScatter = this.logoutScatter.bind(this)
    this.transferTokens = this.transferTokens.bind(this)
    this.setDepositAmt = this.setDepositAmt.bind(this)
    this.depositCompleted = this.depositCompleted.bind(this)
    this.depositCanceled = this.depositCanceled.bind(this)
  }

  async componentDidMount() {
    await this.openWallet()
  }

  async openWallet() {
    let connection = await scatter.init()
    console.log("connected")
    console.log(connection)

    if (!this.state.connection) {
      // save conn variable
      this.setState({ ...this.state, connection })
    }
  }

  logoutScatter() {
    scatter.logout()
    window.location.reload()
  }

  transferTokens() {
    this.setState({ depositLoading: true })   // turns on loader
    // invokes scatter, 2nd param called to stop loader on button.
    scatter.transfer(this.state.depositAmt, this.depositCompleted, this.depositCanceled)
  }

  setDepositAmt(e) {
    let depositAmt = e.target.value   // grab textinput val
    this.setState({ ...this.state, depositAmt })    // save to state.
  }

  depositCompleted() {
    // stops loading
    this.setState({ ...this.state, depositLoading: false })
    // refresh balance
    setTimeout(() => {
      this.setState({ ...this.state, showBalance: false }, () => {
        this.setState({ ...this.state, showBalance: true })
      })
    }, 800)
  }

  depositCanceled(e) {
    this.setState({ ...this.state, depositLoading: false, depositError: e })
    // remove deposit error after 5 seconds
    setTimeout(() => {this.setState({...this.state, depositError: ''})}, 5000)
  }

  renderTable(connection) {
    let { account } = connection
    return (
      <Table basic='very'>

        <Table.Body>
          <Table.Row>
            <Table.Cell width={4}>User Account</Table.Cell>
            <Table.Cell>
              <h2>
                <span className="color">{account.name}</span> &nbsp;
            <a href={`https://bloks.io/account/${account.name}`} target="_blank" rel="noopener noreferrer"><Icon name="globe"></Icon></a>
                <Icon name="sign-out" style={{ cursor: 'pointer' }} onClick={this.logoutScatter} />
              </h2>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Autoscale Balance</Table.Cell>
            <Table.Cell>
              {this.state.showBalance ? <Balance account={account.name} /> : null}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }

  renderTabs() {

    let depositEOS = <Tab.Pane>
      {this.state.depositError ? <Segment inverted color='red'>{this.state.depositError}</Segment> : null }
      <Input style={{ width: '100px' }} type="number" name="quantity" onChange={this.setDepositAmt} value={this.state.depositAmt} step="0.1" min="0" max="99.9" />
      &nbsp;
    <Button onClick={this.transferTokens} loading={this.state.depositLoading}>Deposit</Button>
      <div className="spacer" />
      Initial deposit must be at least 0.25 EOS. <br />
      You can also fund your account by sending EOS to <b>autoscale.x</b>
      <Estimator payment={this.state.depositAmt} />
    </Tab.Pane>

    let resourceSettings = <Tab.Pane>
      <Priority />
    </Tab.Pane>

    const panes = [
      { menuItem: 'Deposit EOS', render: () => depositEOS },
      { menuItem: 'Resource Settings', render: () => resourceSettings }
    ]

    return <Tab panes={panes} />

  }

  render() {
    return (
      <Modal size={'tiny'} open={true} onClose={this.props.closeModal}>
        <Modal.Content>
          {this.state.connection ?
            <div>
              {this.renderTable(this.state.connection)}
              <div className="spacer" />
              {this.renderTabs()}
            </div>

            :
            <div>
              <Segment basic>
                <Dimmer active inverted>
                  <Loader inverted>Connecting to Scatter...</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
              </Segment>
              <Button onClick={this.openWallet}>Retry wallet</Button>
            </div>

          }
        </Modal.Content>
      </Modal>
    );
  }
}

export default ControlPanel;
