import React, { Component } from 'react';
import Nav from "../../Dashboard/components/TopNav";
import Location from "./Location"
import "../css/Track.css";
import Map from "../../Map/components/Map"

class Trac extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Nav tit={"Track Goods"}/>
                <div className="trac-cont">
                    <div className="loc-cont"><Location/></div>
                    <div className="map-cont"><Map/></div>
                </div>
            </div>
         );
    }
}
 
export default Trac;