import React from 'react';
import { Input, Modal, Loader, Button, Table, Dimmer, Image, Segment, Icon } from 'semantic-ui-react'
import scatter from '../helpers/scatter'

import costs from '../helpers/costs'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderT = createSliderWithTooltip(Slider);

class ControlPanel extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      connection: false,
      depositLoading: false,
      depositAmt: 1.0,
      cpuReserve: 1000,
      netReserve: 1000,
      ramReserve: 1000,
      autoscale_balance: 0
    }
    this.openWallet = this.openWallet.bind(this)
    this.logoutScatter = this.logoutScatter.bind(this)
    this.transferTokens = this.transferTokens.bind(this)
    this.setDepositAmt = this.setDepositAmt.bind(this)
    this.depositCompleted = this.depositCompleted.bind(this)
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
      // save conn variable
      this.setState({ ...this.state, connection })
    }

    // load user autoscale balance
    await costs.autoscaleBalance('winter')

  }

  logoutScatter() {
    scatter.logout()
    window.location.reload()
  }

  transferTokens() {
    this.setState({depositLoading: true})   // turns on loader
    // invokes scatter, 2nd param called to stop loader on button.
    scatter.transfer(this.state.depositAmt, this.depositCompleted) 
  }

  setDepositAmt(e) {
    let depositAmt = e.target.value   // grab textinput val
    this.setState({...this.state, depositAmt})    // save to state.
  }

  depositCompleted() {
    // stops loading
    this.setState({...this.state, depositLoading: false})
  }

  renderTable(connection) {
    let account = connection.identity.accounts[0]
    return (
      <Table basic='very'>
      
      <Table.Body>
        <Table.Row>
          <Table.Cell width={4}>User Account</Table.Cell>
          <Table.Cell>
            <h2>
            <span className="color">{account.name}</span> &nbsp; 
            <a href={`https://bloks.io/account/${account.name}`} target="_blank"><Icon name="globe"></Icon></a>
            <Icon name="sign-out" style={{cursor:'pointer'}} onClick={this.logoutScatter} />
            </h2>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Autoscale Balance</Table.Cell>
          <Table.Cell>
            <h3>0.0000 EOS</h3>
            <i>Low balance; account not protected.</i>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Deposit EOS</Table.Cell>
          <Table.Cell>
            <Input type="number" name="quantity" onChange={this.setDepositAmt} value={this.state.depositAmt} step="0.1" min="0" max="500" /> 
            &nbsp; 
            <Button disabled={true} onClick={this.transferTokens} loading={this.state.depositLoading}>Deposit</Button>
            <div className="spacer" />
            Token deposit <b>disabled</b>, currently in closed beta.
            {/*You can also send EOS tokens to <b>autoscale.x</b>*/}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>PRO Tier Tools <br />* coming soon.</Table.Cell>
          <Table.Cell>
            With PRO tier you can adjust the minimum CPU, NET, & RAM that is available to your account.
            <div className="spacer" />
            <Segment>
              <div className={'padder'}>
                <Icon name='globe' color='grey' /> RAM: <b>{this.state.ramReserve}</b> bytes
                <Slider min={0} max={10000} value={this.state.ramReserve} />
                <br />
                <Icon name='cog' color='grey' /> CPU: <b>{this.state.cpuReserve}</b> milliseconds
                <SliderT min={0} max={10000} value={this.state.cpuReserve} />
                <br />
                <Icon name='plug' color='grey' /> NET: <b>{this.state.netReserve}</b> kilobytes
                <Slider min={0} max={10000} value={this.state.netReserve} />
              </div>
            </Segment>      
          </Table.Cell>
        </Table.Row>
      </Table.Body>
  

    </Table>
    )
  }

  render() {
    return (
      <Modal size={'tiny'} open={this.props.isOpen} onClose={this.props.closeModal}>
        <Modal.Content>
          {this.state.connection ?     
            this.renderTable(this.state.connection)
          :
            <div>
              <Segment basic>
                <Dimmer active inverted>
                  <Loader inverted>Connecting to Scatter...</Loader>
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
