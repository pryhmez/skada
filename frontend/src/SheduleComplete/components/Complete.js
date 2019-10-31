import React, { Component } from 'react';
import Succ from "./Succ"
import "../css/SheduleCom.css";
import {ProductConsumer} from "../../Context";
import Nav from "../../Dashboard/components/Navi";


class Complete extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value => {return(
                <div className="dash-cont">
                <div className="navii"><Nav/></div>
                <div style={{display:value.isFalse ?  'block':'none'}} className="navbar"><Nav/></div>
                <div onClick={value.side} style={{right:value.isFalse ? '0%' : '100%',position:'fixed' }} className='black'></div>
                <div className="naviii"><Succ/></div>
                </div>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default Complete;