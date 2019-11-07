import React, { Component } from 'react';

class Delivered extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="delivery-nav-cont">
                <div className="delivery-nav">
                    <h1>DELIVERED</h1>
                    {/* <div className='del-lik'>In-Transit</div>
                    <div className='del-lik del-active'>Delivered</div>
                    <div className='del-lik'>Pending</div> */}
                </div>
            </div>
            </div>
         );
    }
}
 
export default Delivered;