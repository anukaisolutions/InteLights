import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Light from '../Light/Light'

export class MapContainer extends Component {
  render() {
    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBqqW5pq28Qera8ScOykfyKpiIP5Cc0XAM' }}
          defaultCenter={{lat: 30.709119, lng: 76.696143}}
          defaultZoom={19}
        >
          <Light
            lat={30.708983}
            lng={76.696172}
            text="LANE1"
            lightColor={this.props.lights.l1}
          />
          <Light
            lat={30.709359}
            lng={76.696431}
            text="LANE4"
            lightColor={this.props.lights.l2}
          />
          <Light
            lat={30.709331}
            lng={76.696089}
            text="LANE3"
            lightColor={this.props.lights.l3}
          />
          <Light
            lat={30.708974}
            lng={76.6957394}
            text="LANE2"
            lightColor={this.props.lights.l4}
          />
        </GoogleMapReact>
    );
  }
}

export default MapContainer;