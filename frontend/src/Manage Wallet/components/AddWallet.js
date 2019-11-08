import React, { Component } from 'react';
import One from "../img/1.png";
import Two from "../img/2.png"
import Three from "../img/3.png"
import "../css/AddWallet.css";
import {ProductConsumer} from "../../Context/Context"

class AddWallet extends Component {
    
    render() { 
        return ( 
            <ProductConsumer>
                {value => {return(
                    <div>
            <div style={{border:value.paydrop && 'none'}} className='pay'>
                <div style={{color:value.paydrop == false ? "#333333":"#2F80ED"}} className="pay-text">
                    <i className="fas fa-plus"></i>
                    <aside>Add Payment Card</aside>
                    <i style={{marginLeft:'20px'}} onClick={value.handlePayDrop} 
                    class={value.paydrop == false ? "fas fa-caret-right":"fas fa-caret-down"}></i> 
                </div>
                <div  style={{display:value.paydrop ==false ? "none" : 'block'}} className='pay-card-container'>
                    <div style={{marginTop:'20px'}} className="pay-card">
                        <aside>
                            <div style={{fontWeight:"600"}}>Payment Method</div>
                            <div style={{fontSize:'16px'}}>Choose payment method</div>
                        </aside>
                        <div style={{flex:0.7}}></div>
                        <img src={One}></img>
                        <img src={Two}></img>
                        <img src={Three}></img>
                    </div>
                    <div style={{marginTop:'30px'}} className="pay-card">
                        <aside>
                            <div style={{fontWeight:"600"}}>Card Number</div>
                            <div style={{fontSize:'16px'}}>Enter your card number</div>
                        </aside>
                        <div style={{flex:0.7}}></div>
                        <input style={{width:'38%',height:'30px',border:'1px solid #CCCCCC'}} type="Password"></input>
                    </div>
                    <div style={{marginTop:'30px'}} className="pay-card">
                        <aside>
                            <div style={{fontWeight:"600"}}>CardHolder Fullname</div>
                            <div style={{fontSize:'16px'}}>Enter your cardholder fullname</div>
                        </aside>
                        <div style={{flex:0.7}}></div>
                        <input style={{width:'38%',height:'30px',border:'1px solid #CCCCCC'}} type="Password"></input>
                    </div>
                    <div style={{marginTop:'30px'}} className="pay-card">
                        <aside>
                            <div style={{fontWeight:"600"}}>Expiry Date</div>
                            <div style={{fontSize:'16px'}}>Enter expiry date</div>
                        </aside>
                        <div style={{flex:0.7}}></div>
                        <input style={{width:'38%',height:'30px',border:'1px solid #CCCCCC'}} type="Password"></input>
                    </div>
                </div>
                </div>
            <div style={{border:value.paydrop && 'none'}} style={{marginTop:'0px',borderTop:'none'}} className='pay'>
             <div style={{color:value.paydrop == false ? "#333333":"#2F80ED"}} className="pay-text">
             <i class="far fa-window-maximize"></i>
             <aside>Fund Wallet</aside>
             <i style={{marginLeft:'20px'}} onClick={value.handlePayDrop} 
             class={value.paydrop == false ? "fas fa-caret-right":"fas fa-caret-down"}></i> 
             </div>
            </div>
           </div>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default AddWallet;