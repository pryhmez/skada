import React, { Component } from 'react';
import "../css/Navigation.css"
import Logo from "./Logo"
import Button from "./Button"

class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <div className="navi">
                <Logo/>
                <div style={{flex:'0.7'}}></div>
                <div className='span'>
                <div className="ham">Why skada?</div>
                <div className="ham"><Button content={'Register'} color={"#2F80ED"} background={"whitesmoke"} border={'none'} /></div>
                <div className="ham"><Button content={'Login'} color={"whitesmoke"} border={'3px solid #FFFFFF'} 
                background={"linear-gradient(331.3deg, #2F80ED 25.33%, rgba(58, 149, 238, 0.722893) 95.2%, rgba(86, 204, 242, 0) 146.89%)"} 
                border={"1px solid white"}/></div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Navigation;