import React, { Component } from 'react';
import { ProductConsumer } from "../../Context/Context";
import Nav from "../../Dashboard/components/Navi";
import Side from "./ShSide"

import "../css/ScheduleDetails.css";


class ScheduleDetails extends Component {
    state = {  }
    onChangeRoute = (route) => {
        this.props.history.push(`/${route}`)
    }
    render() { 
        const { orderDetails } = this.props.location.state
        console.log(orderDetails)
        return ( 
            <ProductConsumer>
                {value => {return(
                <div className="dash-cont">
                <div className="navii"><Nav/></div>
                <div style={{display:value.isFalse ?  'block':'none'}} className="navbar"><Nav/></div>
                <div onClick={value.side} style={{right:value.isFalse ? '0%' : '100%',position:'fixed' }} className='black'></div>
                <div className="naviii"><Side orderDet={orderDetails} handleRoute={this.onChangeRoute}/></div>
                </div>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default ScheduleDetails;