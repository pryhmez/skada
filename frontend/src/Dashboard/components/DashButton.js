import React, { Component } from 'react';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <aside className="shBut" style={{
                width:'140px',
                padding:'10px',
                background:'white',
                borderRadius:'2px',
                textAlign:'center',
                color:"#2F80ED",
                cursor:'pointer'
            }}>Schedule Pickup</aside>
         );
    }
}
 
export default Button;