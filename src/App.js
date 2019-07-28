import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react'
import './index.css'

import CPUCard from './components/CPU'
import NETCard from './components/NET'
import RAMCard from './components/RAM'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <div className="App">

        <Segment piled>
          <h2>
            Autoscale - Automatic EOS Scaling &nbsp; 
            <Button className={'bgColor'}>Login</Button>
          </h2>
        </Segment>

        <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
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

        * Deposit EOS and Autoscale will automatically buy account resources when they're needed.
      </div >
    );
  }
}

export default App;
