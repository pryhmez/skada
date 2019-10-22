import React, { Component } from 'react';
import "../css/Email.css"

class Email extends Component {
    state = {  }
    render() { 
        return ( 
            <form className='landinput'>
                <input placeholder="Email address" type="email"></input>
                <button>Get started</button>
            </form>
         );
    }
}
 
export default Email;