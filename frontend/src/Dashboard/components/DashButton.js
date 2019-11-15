import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className="shBut" style={{
                width:'140px',
                padding:'10px',
                background:'white',
                borderRadius:'2px',
                textAlign:'center',
                color:"#2F80ED",
                cursor:'pointer',
                border: 'none'
            }}
            onClick={this.props.handleClick}
            >Schedule Pickup</button>
         );
    }
}
 
export default Button;