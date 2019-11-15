import React, { Component } from 'react';
import TopNav from "../../Dashboard/components/TopNav";

class Side extends Component {
    state = {  }
    render() { 
        const { deliveryPoint, pickUpPoint, pickUpDate, pickUpTime} = this.props.orderDet;
        return ( 
            <div>
                <div className="del-cont">
                    <div className="del">
                        <div className="hh">
                            <h2>Delivery Details</h2>
                        </div>
                        <div className='pick'>
                            <div className="pic">
                                <div style={{display:'flex',alignItems:'flex-start'}}>
                                    <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <aside style={{fontSize:'18px',fontWeight:'bold'}}>Pick up point</aside>
                                        <aside>{pickUpPoint}</aside>
                                        <aside className="time">
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} class="fas fa-calendar-week"></i>    
                                                 {pickUpDate}
                                            </aside>
                                            <div style={{flex:'1'}}></div>
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} className="fas fa-clock"></i>
                                                 pick up time: {pickUpTime}
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                            <div style={{flex:'1'}}/>
                            <div className="pic">
                                <div style={{display:'flex',alignItems:'flex-start'}}>
                                    <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-map-marker-alt"></i>
                                    <div>
                                        <aside style={{fontSize:'18px',fontWeight:'bold'}}>Drop off points</aside>
                                        <aside>{deliveryPoint}</aside>
                                        <aside className="time">
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} class="fas fa-calendar-week"></i>    
                                                {pickUpDate}
                                            </aside>
                                            <div style={{flex:'1'}}></div>
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} className="fas fa-clock"></i>
                                                 Estimated time of Dlivery: 12:00pm
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Side;