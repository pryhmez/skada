import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import LocationSearchInput from "./LocationSearch";
const google = window.google;

Geocode.setApiKey("AIzaSyA9k-3L6ULHhY1EvpbzwtKdo4i9myfQJgY");
Geocode.enableDebug();
// const MyMapComponent = compose(
// 	withProps({
// 		googleMapURL:
// 			'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA9k-3L6ULHhY1EvpbzwtKdo4i9myfQJgY',
// 		loadingElement: <div style={{ height: `100%` }} />,
// 		containerElement: <div style={{ height: `92vh` }} />,
// 		mapElement: <div style={{ height: `100%` }} />
// 	}),
// 	withScriptjs,
// 	withGoogleMap
// )((props) => (
// 	<GoogleMap defaultZoom={8} defaultCenter={{ lat: props.lat, lng: props.long }}>
// 		{props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.long }} onClick={props.onMarkerClick} />}
// 	</GoogleMap>
// ));

// class MyFancyComponent extends React.PureComponent {
// 	state = {
// 		isMarkerShown: false,
// 		latitude: -34.397,
// 		longitude: 150.644
// 	};

// 	componentDidMount() {
// 		this.delayedShowMarker();
// 		var watchID = navigator.geolocation.watchPosition((position) => {
// 			// do_something(position.coords.latitude, position.coords.longitude);
// 			this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
// 		});
// 	}

// 	delayedShowMarker = () => {
// 		setTimeout(() => {
// 			this.setState({ isMarkerShown: true });
// 		}, 3000);
// 	};

// 	handleMarkerClick = () => {
// 		this.setState({ isMarkerShown: false });
// 		this.delayedShowMarker();
// 	};

// 	render() {
// 		return (
// 			<MyMapComponent
// 				isMarkerShown={this.state.isMarkerShown}
// 				onMarkerClick={this.handleMarkerClick}
// 				lat={this.state.latitude}
// 				long={this.state.longitude}
// 			/>
// 		);
// 	}
// }

// export default MyFancyComponent;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",

      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      }
    };
  }

  componentDidMount() {
    console.log(navigator.geolocation)
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      response => {
        const address = response.results[0].formatted_address;
        this.setState({
          address: address ? address : ""
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }

  onChange = event => {
    console.log("hi");
    console.log(event);
    this.setState({ [event.target.name]: event.target.value });
  };
  onPlaceSelected = place => {
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      }
    });
  };

  onMarkerDragEnd = event => {
    console.log("event", event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
      console.log(newLat, newLng)
    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address;
        this.setState({
          address: address ? address : "",
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }
        });
      },
      error => {
        console.error(error);
      }
    );
  };
  
  render() {
    const searchOptions = {
      // location: new google.maps.LatLng(this.state.mapPosition.lat, this.state.mapPosition.lng),
      // radius: 2000,
      types: ['address']
    }
    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          // google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
          }}
        >
          {/* <Autocomplete
            style={{
              width: "100%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px",
              marginBottom: "100px"
            }}
            onPlaceSelected={this.onPlaceSelected}
            searchOptions={searchOptions}
            componentRestrictions={{ country: ['ng'] }}
          /> */}
          <LocationSearchInput />
          <Marker
            google={this.props.google}
            name={"Dolores park"}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng
            }}
          />
          <Marker />
        </GoogleMap>
      ))
    );

    // if (!this.props.center.lat) {
    //   return "I am loading";
    // }
    return (
      <div style={{ height: this.props.height }}>
        <div>
          <div className="form-group">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={this.onChange}
              readOnly="readOnly"
              value={this.state.address}
            />
          </div>
        </div>
        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA9k-3L6ULHhY1EvpbzwtKdo4i9myfQJgY&language=en&region=ng"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: this.props.height }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
