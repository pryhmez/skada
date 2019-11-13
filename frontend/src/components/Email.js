import React, { Component } from 'react';
import "../css/Email.css"

class Email extends Component {
    state = {  }
    render() { 
        return ( 
            <form className='landinput'>
                <input placeholder="Order ID" type="email"></input>
                <button>Track</button>
            </form>
         );
    }
}
 
export default Email;