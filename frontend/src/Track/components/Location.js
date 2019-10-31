import React, { Component } from 'react';
import "../css/Track.css"

class Locate extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="location-cont">
                <div className="location-img"></div>
                <div className="description">
                    <aside className="text">
                        <aside style={{fontSize:'17px',fontWeight:'600'}}>Catering</aside>
                        <aside style={{fontSize:'13px'}}>Pershiable</aside>
                        <br></br>
                        <aside style={{fontSize:'17px',fontWeight:'600'}}>Description:</aside>
                        <div style={{fontSize:'14px'}}>Awesome lunch and amazing taste with a taste fill</div>
                    </aside>
                </div>
                <div className="location">
                    <div className="locate-text">
                        <div style={{color:"#9F9D9D",fontSize:'12px',marginTop:'2px'}}>
                            <aside>
                                <i style={{paddingRight:'6px'}} class="fas fa-calendar-week"></i>    
                                23-03-2020 
                            </aside>
                            <div style={{padding:'5px 0px'}}></div>
                            <aside>
                                <i style={{paddingRight:'6px'}} className="fas fa-clock"></i>
                                12:00pm
                            </aside>
                        </div>
                        <div style={{display:'flex',alignItems:'flex-start',width:'200px'}}>
                                <i style={{color:"#2F80ED",marginRight:'15px',marginTop:'4px'}}className="fas fa-map-marker-alt"></i>
                            <div>
                                    <aside style={{fontSize:'14px',fontWeight:'bold',color:"#2F80ED"}}>Pick up point</aside>
                                    <aside>27. Centenary Street, Golf City Estate, Enugu State,Nigeria</aside>
                            </div>
                        </div>
                </div>
                <div className="locate-text">
                        <div style={{color:"#9F9D9D",fontSize:'12px',marginTop:'2px'}}>
                            <aside>
                                <i style={{paddingRight:'6px'}} class="fas fa-calendar-week"></i>    
                                23-03-2020 
                            </aside>
                            <div style={{padding:'5px 0px'}}></div>
                            <aside>
                                <i style={{paddingRight:'6px'}} className="fas fa-clock"></i>
                                12:00pm
                            </aside>
                        </div>
                        <div style={{display:'flex',alignItems:'flex-start',width:'200px'}}>
                                <i style={{color:"#ED2F2F",marginRight:'15px',marginTop:'4px'}}className="fas fa-map-marker-alt"></i>
                            <div>
                                    <aside style={{fontSize:'14px',fontWeight:'bold',color:"#ED2F2F"}}>Pick up point</aside>
                                    <aside>27. Centenary Street, Golf City Estate, Enugu State,Nigeria</aside>
                            </div>
                        </div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Locate;