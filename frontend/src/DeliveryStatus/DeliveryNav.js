import React, { Component } from 'react';
import {ProductConsumer} from "../Context/Context";
import Notification from "../Dashboard/components/DropDown"

class TopNav extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value => {return (
            <nav style={{justifyContent:'space-evenly'}} className="topNav">
               <i style={{marginRight:'10px'}} onClick={value.side} className="fas fa-bars hamb"></i> 
               <h3 style={{color:'#4F4F4F'}}>{this.props.tit}</h3>
               <input className='delivery-input' style={{
                 width:'40%',
                 background:'#F3F3F3',
                 border:'none',
                 padding:'2px 20px',
                 outline:'none'
               }} placeholder='search'></input>
               {/* <div style={{flex:'0.5'}}></div> */}
               <div style={{display:'flex',alignItems:'center'}}>
                <Notification icon={<i style={{marginRight:'20px'}} className="far fa-bell"></i>}/>
               <div className='img-box'></div>
               </div>
            </nav>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default TopNav;