import React from 'react';
import { Button, Grid, Menu, Icon } from 'semantic-ui-react'
import './index.css'

import ControlPanel from './components/ControlPanel'
import CPUCard from './components/CPU'
import NETCard from './components/NET'
import RAMCard from './components/RAM'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal(e) {
    if (e) e.preventDefault()
    this.setState({ isOpen: false })
  }

  openModal(e) {
    if (e) e.preventDefault()
    this.setState({ isOpen: true })
  }

  render() {

    return (
      <div className="App">

        <ControlPanel
          isOpen={this.state.isOpen}
          closeModal={this.closeModal}
        />


        <Menu fixed='top'>
          <Menu.Item name='home' onClick={this.handleItemClick}>
            <a href="https://autoscale.one" style={{color:'black'}}>
            <b>Autoscale</b> &nbsp; | &nbsp; Automatic EOS Scaling
            </a>
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item style={{fontWeight:'bold'}} name='manager' onClick={this.openModal}>
              <span className='color'><Icon name='cog' /> Scaling Manager</span>
            </Menu.Item>
          </Menu.Menu>
        </Menu>


        <div className='header_spacer' />

        <Grid textAlign='center' style={{ height: '100vh' }}>
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

      </div >
    );
  }
}

export default App;
