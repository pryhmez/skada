import React, { Component } from 'react';
import Nav from "../../Dashboard/components/TopNav";
import Location from "./Location"
import "../css/Track.css";
import Map from "../../Map/components/Map";
import track from '../img/track.png'

class Trac extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Nav tit={"Track Goods"}/>
                <div style={{display:'flex',justifyContent:'center'}}>
                <div className="trac-cont">
                    <div>
                        <div className="trac-img"><img src={track}/></div>
                        <h1>Track your delivery order</h1>
                        <aside className='track-p'>Enter your Order ID</aside>
                        <div className='form'>
                            <input placeholder='Order ID'/>
                            <div style={{flex:'0.3'}}></div>
                            <button className='track-btn'>Track</button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Trac;