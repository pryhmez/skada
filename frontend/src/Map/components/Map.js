import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA9k-3L6ULHhY1EvpbzwtKdo4i9myfQJgY",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `92vh` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.long }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.long }} onClick={props.onMarkerClick} />}
  </GoogleMap>
))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    latitude:-34.397,
    longitude: 150.644
  }

  componentDidMount() {
    this.delayedShowMarker()
    var watchID = navigator.geolocation.watchPosition((position) => {
        // do_something(position.coords.latitude, position.coords.longitude);
        this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude})
       });
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        lat={this.state.latitude}
        long={this.state.longitude}
      />
    )
  }
}

export default MyFancyComponent
