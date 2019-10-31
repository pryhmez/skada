import React, { Component } from 'react';
import TopNav from "../../Dashboard/components/TopNav";
import "../css/Shedule.css"

class Side extends Component {
    state = {  }
    render() { 
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
                                        <aside>27. Centenary Street, Golf City Estate, Enugu State,Nigeria</aside>
                                        <aside className="time">
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} class="fas fa-calendar-week"></i>    
                                                 23-03-2020
                                            </aside>
                                            <div style={{flex:'1'}}></div>
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} className="fas fa-clock"></i>
                                                 Estimated time: 12:00pm
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
                                        <aside>27. Centenary Street, Golf City Estate, Enugu State,Nigeria</aside>
                                        <aside className="time">
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} class="fas fa-calendar-week"></i>    
                                                 23-03-2020
                                            </aside>
                                            <div style={{flex:'1'}}></div>
                                            <aside className="time">
                                                <i style={{paddingRight:'6px'}} className="fas fa-clock"></i>
                                                 Estimated time: 12:00pm
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