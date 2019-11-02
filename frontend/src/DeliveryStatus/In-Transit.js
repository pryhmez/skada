import React, { Component } from 'react';
import Nav from "./DeliveryStatusNav"

class InTransit extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="delivery-nav-cont">
                <div className="delivery-nav">
                    {/* <div className='del-lik del-active'>In-Transit</div>
                    <div className='del-lik'>Delivered</div>
                    <div className='del-lik'>Pending</div> */}
                    THis is the transit page
                </div>
            </div>
            </div>
         );
    }
}
 
export default InTransit;