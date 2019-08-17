import React from 'react';
import { Popup, Button, Grid, Menu, Icon } from 'semantic-ui-react'
import './index.css'

import ControlPanel from './components/ControlPanel/ControlPanel'
import CPUCard from './components/CPU'
import NETCard from './components/NET'
import RAMCard from './components/RAM'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      showTip: true
    }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal(e) {
    if (e) e.preventDefault()
    this.setState({ ...this.state, isOpen: false })
  }

  openModal(e) {
    if (e) e.preventDefault()
    this.setState({ ...this.state, isOpen: true, showTip: false })
  }

  render() {

    return (
      <div className="App">

        {this.state.isOpen ? <ControlPanel closeModal={this.closeModal} /> : null}


        <Menu fixed='top' size='large' style={{ borderTop: '1px solid #dedede' }}>
          <Menu.Item name='home' onClick={this.handleItemClick}>
            <a href="https://autoscale.one" style={{ color: 'black' }}>
              <b>Autoscale</b> <span className="hide_small">&nbsp; | &nbsp; Automatic Scaling</span> for EOS
            </a>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item color='red' style={{ fontWeight: 'bold' }} name='manager' onClick={this.openModal}>

              <Popup
                content="Get started!"
                inverted={true}
                open={this.state.showTip}
                position="right"
                trigger={<Button><span className='color'><Icon name='rocket' /> Scaling Manager</span></Button>}
              />


            </Menu.Item>
          </Menu.Menu>
        </Menu>


        <div className='header_spacer'>&nbsp;</div>

        <Grid textAlign='center'>
          <Grid container columns={3} stackable>
            <Grid.Column textAlign='center'>
              <CPUCard />
            </Grid.Column>
            <Grid.Column>
              <NETCard />
            </Grid.Column>
            <Grid.Column>
              <RAMCard />
            </Grid.Column>
          </Grid>
        </Grid>

        <br />
        <div>Deposit EOS directly to <b>autoscale.x</b> or use the <b className="color" style={{ cursor: 'pointer' }} onClick={this.openModal}>scaling manager</b>.</div>
      </div >
    );
  }
}

export default App;
