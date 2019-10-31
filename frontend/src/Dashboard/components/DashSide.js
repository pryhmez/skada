import React, { Component } from 'react';
import Nav from "./TopNav";
import Stat from "./Statboard";
import Deliver from "./Delivery";
import {ProductConsumer, withState} from "../../Context";
import "../css/Side.css"

class DashSide extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value => {return (
                <div className='siddle'>
                        <Nav tit={'Dashboard'}/>
                        <Stat/>
                        <Deliver/>
                </div>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default DashSide;