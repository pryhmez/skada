import React, { Component } from 'react';
import "../css/Shedule.css";

class Package extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="pac">
            <div className="pack">
                <div className="pack-img"></div>
                <div className="pack-side">
                    <div className="three">
                        <aside>
                            <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Good Type:</div>
                            <div style={{fontWeight:"600"}}>Food and bevreges  </div>
                        </aside>
                        <aside>
                            <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Good Type:</div>
                            <div style={{fontWeight:"600"}}>Food and bevreges  </div>
                        </aside>
                        <aside>
                            <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Good Type:</div>
                            <div style={{fontWeight:"600"}}>Food and bevreges  </div>
                        </aside>
                    </div>
                    <br/>
                    <div className="des">
                        <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Description:</div>
                        <div style={{fontWeight:"600"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nesciunt deleniti <br/>perspiciatis exercitationem consequatur non. </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Package;