import React, { Component } from 'react';
import {GoogleMap,withScriptjs,withGoogleMap} from "react-google-maps"

function Map(){
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{lat:7.5464, lng:6.4584}}/>
    )
}

const WrapperMap = withScriptjs(withGoogleMap(Map))

class Maper extends Component {
    state = {  }
    render() { 
        const APP_KEY = "AIzaSyBu7c2LkFXEYpftlrfG0sS1mlKTIzc7NJE "
        return ( 
            <div style={{width:'100%',height:'92vh'}}>
                <WrapperMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${"AIzaSyBu7c2LkFXEYpftlrfG0sS1mlKTIzc7NJE"}`}
                loadingElement= {<div style={{ height: `100%` }} />}
                containerElement={ <div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />} 
                />
            </div> 
         );
    }
}
 
export default Maper;

