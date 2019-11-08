import React, { Component } from 'react';
import logo from "../img/logo.png"
import "../css/Logo.css"

class Logo extends Component {
    state = {  }
    render() { 
        return ( 
            <h1 className="nav-logo"><img src={logo}/>skada.</h1>
         );
    }
}
 
export default Logo;