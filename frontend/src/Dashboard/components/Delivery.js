import React, { Component } from 'react';
import {ProductConsumer} from "../../Context/Context"
import "../css/Deliever.css"

class Delivery extends Component {
    state = {  }
    render() { 
        return ( 
        <ProductConsumer>
            {value=>{return(
            <div className='deliver-cont'>
                <div className="deliver">
                    <div className="hh">
                        <h2>Deliver Order Overview</h2>
                    </div>
                    <div className="over">
                        {value.hidden ?
                        
                        <aside>
                            <h5 style={{width:'220px',color:'#C4C4C4'}}>You haven't made delivery orders yet.
                            Make your first order!</h5>
                            <button style={{
                                width:'200px',
                                padding:'15px 0px',
                                color:'white',
                                background:'#2F80ED',
                                borderRadius:'2px',
                                border:'none',
                                fontWeight:'500',
                                fontSize:'18px',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                marginTop:'10px'
                            }}>
                                Shedule Pickup
                            </button>
                        </aside>
                        :
                        <ide style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
                        <div>
                            <h1>23</h1>
                            <aside>Orders Completed</aside>
                        </div>
                        <div>
                            <h1>16</h1>
                            <aside>Order in Transit</aside>
                        </div>
                        <div>
                            <h1>22</h1>
                            <aside>Orders Pending</aside>
                        </div> 
                        </ide>
                    }
                    </div>
                </div>
            </div>
             )}}
            </ProductConsumer>
         );
    }
}
 
export default Delivery;