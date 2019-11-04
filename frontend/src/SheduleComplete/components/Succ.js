import React, { Component } from 'react';
import Nav from "../../Dashboard/components/TopNav"
import "../css/SheduleCom.css";

class Succ extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Nav tit={"Schedule Pickup"}/>
                <div className="succ-cont">
                    <div className="succ">
                        <div className="succ-pick">
                            <aside style={{fontSize:'16px',fontWeight:'600'}}><d style={{color:'#2F80ED'}}>Congrats,</d> Your</aside>
                            <aside style={{fontSize:'25px',fontWeight:'bold'}}>Order is placed</aside>
                            <div className="succ-pick-img"></div>
                            <div className="picko"></div>
                        </div>
                        <div className="suck-text">
                            <div>
                               <aside style={{fontSize:'15px'}}>You can track good @</aside> 
                               <aside style={{fontSize:'25px',fontWeight:'bold'}}>Skada/fffgh</aside>
                               <button>
                                   <i className="fas fa-share-alt"></i>
                                   <div style={{flex:'0.1'}}></div>
                                   <aside style={{fontSize:'12px',fontWeight:'500'}}>Share</aside>
                               </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Succ;