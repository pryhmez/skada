import React, { Component } from 'react';
import "../css/Button.css"

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <button className='navbtn' style={{
                background:this.props.background,
                color:this.props.color,
                border:this.props.border,
                borderRadius:'2px',
                padding:'10px 35px',
                fontWeight:this.props.wh,
                fontFamily: "'Pavanam', sans-serif"
            }}>{this.props.content}</button>
         );
    }
}
 
export default Button;