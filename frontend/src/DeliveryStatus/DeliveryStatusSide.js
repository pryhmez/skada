import React, { Component } from 'react';
import TopNav from "../Dashboard/components/TopNav";
import Nav from "./DeliveryStatusNav";
import "./css/DeliveryStatus.css"

class DeliveryStatusSide extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <TopNav tit={"Delivery Status"}/>
                    <div className="del-cont">
                        <div className="deli-cont">
                            <Nav/>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default DeliveryStatusSide;