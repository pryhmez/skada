import React, { Component } from 'react';
import Notification from "./DropDown";  
import {ProductConsumer} from "../../Context/Context";
import "../css/Side.css"

class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value => {return (
            <nav className="topNav">
               <i style={{marginRight:'10px'}} onClick={value.side} className="fas fa-bars hamb"></i> 
               <h3 style={{color:'#4F4F4F'}}>{this.props.tit}</h3>
               <div style={{flex:'0.8'}}></div>
                <Notification icon={<i style={{marginRight:'20px'}} className="far fa-bell"></i>}/>
               <div className='img-box'></div>
            </nav>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default Nav;