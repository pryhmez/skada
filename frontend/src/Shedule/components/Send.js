import React, { Component } from 'react';

class Send extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="send-cont">
                <div className="send">
                <div className='pick'>
                    <div className="pic">
                                <div style={{display:'flex',alignItems:'flex-start'}}>
                                    <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-user"></i>
                                    <div>
                                        <aside style={{fontSize:'18px',fontWeight:'bold'}}>Sender Information</aside>
                                        <aside style={{fontWeight:'600'}}>Hunger Clinic</aside>
                                        <aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.7rem'}}>   
                                                 Hungerclinic@gmail.com
                                            </aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.8rem'}}>
                                                 090 235 274 980
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                            <div style={{flex:'1'}}/>
                            <div className="pic">
                                <div style={{display:'flex',alignItems:'flex-start'}}>
                                    <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-user"></i>
                                    <div>
                                        <aside style={{fontSize:'18px',fontWeight:'bold'}}>Receviers Information</aside>
                                        <aside style={{fontWeight:'600'}}>John Doe</aside>
                                        <aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.7rem'}}>   
                                                 johndoe@gmail.com
                                            </aside>
                                            <aside style={{color:'#C4C4C4',fontSize:'0.8rem'}}>
                                                 080 290 562 999
                                            </aside>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Send;