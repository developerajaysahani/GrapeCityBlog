import React,{Component} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%',
};

class location extends React.Component {
    constructor()
     {
      super()
      this.state={
        location : [], 
        isopen: false
      }
     }
    handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  }
componentDidMount(){
      fetch('http://localhost/restapi/index.php/Welcome/location').then((resp)=>{
        resp.json().then((result)=>{
          console.log(result)
          this.setState({location:result})
        })
      })
     }
     
     
     render(){
      return(
        <>
         <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 26.5937, lng: 78.9629}}
        > 
        {
            this.state.location.map((item)=>
              <Marker 

              position={{ lat: item.lat, lng: item.lon}} 
              onClick={() => this.handleToggleOpen()}>
              {
            this.state.open &&
           <InfoWindow  onCloseClick={() => this.handleToggleClose()}>
             <h1>gjhghoihk</h1>
           </InfoWindow>
    }
              </Marker>  
              )
           } 
        </Map>

        </>
        
        );
     }
     }  

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAhMfDuO4hdhFjkh8qXRBs05Wv2bNL6x6M&callback=myMap'
})(location); 
 
