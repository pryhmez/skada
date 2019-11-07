import React, { Component } from 'react';
import { ProductConsumer } from "../../Context/Context";
import Nav from "../../Dashboard/components/Navi";
import Side from "./ShSide"

class Shedule extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value => {return(
                <div className="dash-cont">
                <div className="navii"><Nav/></div>
                <div style={{display:value.isFalse ?  'block':'none'}} className="navbar"><Nav/></div>
                <div onClick={value.side} style={{right:value.isFalse ? '0%' : '100%',position:'fixed' }} className='black'></div>
                <div className="naviii"><Side/></div>
                </div>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default Shedule;