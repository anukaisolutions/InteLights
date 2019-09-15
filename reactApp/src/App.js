import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import './App.css';

import Maps from './components/Map/Map'
import MapsFilter from './components/MapsFilter/MapsFilter'
class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://13.126.33.251:80",
      lights: {
        l1: 'yellow',
        l2: 'red',
        l3: 'green',
        l4: 'yellow'
      },
      data: {}
    };
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    // socket.emit('womenDensity');
    socket.on('intel', (col) => {
        if(col.l1){
          this.setState({
            lights: col
          })
        }
    })
  }

  onChange = (endpoint) => {
    let todd;
    if(endpoint === 'aq') {
      todd = 'airquality'
    } else if(endpoint === 'wd') {
      todd = 'women'
    } else if(endpoint === 'i') {
      todd = 'illumination'
    }
    let self = this;
    fetch(this.state.endpoint+'/'+todd)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      self.setState({
        data: myJson
      })
    });
  }


  componentDidMount = () => {
      
  }

  render() {
    return (
      <div>
        <div className="header">Intelights</div>
        {/* <div className="line-seperator"/> */}
        {/* <button onClick={() => this.send() }>start lights</button> */}
        <div className="maps-container">
          <div className="map-first">
            <div className="maps-header" style={{justifyContent:'space-evenly'}}> 
            <div className="maps-header-center">TRAFFIC VIEW</div>
              <div onClick={this.send} style={{display:'flex', textTransform:'uppercase', color:'red', fontWeight:'500', cursor:'pointer'}}><div className="maps-header-circle"/>Live</div>
            </div>
            <Maps lights={this.state.lights}/>
          </div>
          <div className="map-second">
          <div className="maps-header" style={{justifyContent:'center'}}> 
            <div className="maps-header-center">DENSITY VIEW</div>
            </div>
            <MapsFilter data={this.state.data}/>
            <div className="map-footer">
            <RadioGroup onChange={ this.onChange } horizontal>
            <RadioButton value="aq" rootColor="black" pointColor="#cc1717">
              Air Quality
            </RadioButton>
            <RadioButton value="wd" rootColor="black" pointColor="#cc1717">
              Women Density
            </RadioButton>
            <RadioButton value="i" rootColor="black" pointColor="#cc1717">
              Illumination
            </RadioButton>
          </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;