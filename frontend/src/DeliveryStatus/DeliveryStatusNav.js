import React, { Component } from 'react';
import "./css/DeliveryStatus.css"

class DeliveryStatusNav extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="delivery-nav-cont">
                <div className="delivery-nav">
                    <div className='del-lik del-active'>In-Transit</div>
                    <div className='del-lik'>Delivered</div>
                    <div className='del-lik'>Pending</div>
                </div>
            </div>
         );
    }
}
 
export default DeliveryStatusNav;