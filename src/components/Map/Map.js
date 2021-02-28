import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import './Map.css'
const mapStyles = {
  width: '100%',
  height: '90%',
};
export class MapContainer extends Component {
  state = {
    location: [],
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  componentDidMount() {
    fetch('https://boiling-shelf.herokuapp.com/api/posts').then((resp) => {
      resp.json().then((result) => {
        console.log(result)
        console.log(result)
        
        this.setState({ location: result })
      })
    })
  }

  render() {
    if (!this.props.loaded) return <div>Loading...</div>;

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 26.8467, lng: 80.9462 }}
      >
        {
          this.state.location.map((item, i) =>
            <Marker
              name={item.name}
              address={item.address}
              title={item.title}
              key={i}
              position={{ lat: item.gmac_lattitude, lng:item.gmac_longitude }}
              onClick={this.onMarkerClick}
            >
            </Marker>
          )
        }
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h6>{this.state.selectedPlace.name}</h6>
            <h6>{this.state.selectedPlace.address}</h6>
            <h6>{this.state.selectedPlace.title}</h6>

          </div>
        </InfoWindow>

      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAhMfDuO4hdhFjkh8qXRBs05Wv2bNL6x6M&callback=myMap",
  version: "3.38"
})(MapContainer);
