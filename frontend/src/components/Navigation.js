import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "../css/Navigation.css"
import Logo from "./Logo"
import Button from "./Button"

class Navigation extends Component {
    state = { 
        isFalse:false
     }
     handleHam = () => {
         this.setState({isFalse:!this.state.isFalse})
     }
    render() { 
        return ( 
            <>
            <div className="navi">
                <div className="av">
                    <Logo/>
                    <div style={{flex:'0.6'}}></div>
                    {this.state.isFalse?<i onClick={this.handleHam} class="fas fa-times"></i>
                        :<i onClick={this.handleHam} className="fas fa-bars"></i>
                    }
                </div>
                <div style={{flex:'0.7'}}></div>
                <div style={{right:this.state.isFalse?'0%':'100%'}} className='span'>
                    <br/><br/><br/><br/><br/>
                    <div className="ham rr">Why skada?</div>
                    <Link to ="/register1"><div className="ham"><Button content={'Register'} color={"#2F80ED"} background={"whitesmoke"} border={'none'} /></div></Link>
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