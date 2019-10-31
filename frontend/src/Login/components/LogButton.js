import React, { Component } from 'react';
import "../css/Butt.css"

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className="con">{this.props.name}</button>
         );
    }
}
 
export default Button;