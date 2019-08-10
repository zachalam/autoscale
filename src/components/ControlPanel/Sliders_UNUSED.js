import React from 'react';
import { Segment, Icon } from 'semantic-ui-react'


import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderT = createSliderWithTooltip(Slider);

class Sliders extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
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
    );
  }
}

export default Sliders;