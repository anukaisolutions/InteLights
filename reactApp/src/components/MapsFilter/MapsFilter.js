import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Area from '../../components/Area/Area'
import Filter from '../../components/Filter/Filter'

export class MapContainer extends Component {
  render() {
      console.log(this.props.data)
    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBqqW5pq28Qera8ScOykfyKpiIP5Cc0XAM' }}
          defaultCenter={{lat: 30.708983, lng: 76.696172}}
          defaultZoom={15}
        >
            <Filter
            lat={30.716661}
            lng={76.679380}
            text="filters"
            filter={this.props.data.filter?this.props.data.filter:''}
          />
            <Area
            lat={30.708983}
            lng={76.696172}
            text="area1"
            region={this.props.data.regions?this.props.data.regions[0]:''}
          />
          <Area
            lat={30.715188}
            lng={76.691486}
            text="area2"
            region={this.props.data.regions?this.props.data.regions[1]:''}
          />
          <Area
            lat={30.716583}
            lng={76.707861}
            text="area3"
            region={this.props.data.regions?this.props.data.regions[2]:''}
          />
          <Area
            lat={30.709986}
            lng={76.712661}
            text="area4"
            region={this.props.data.regions?this.props.data.regions[3]:''}
          />
          <Area
            lat={30.701892}
            lng={76.684627}
            text="area5"
            region={this.props.data.regions?this.props.data.regions[4]:''}
          />
        </GoogleMapReact>
    );
  }
}

export default MapContainer;