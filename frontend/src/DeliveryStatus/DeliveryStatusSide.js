import React, { Component } from 'react';
import TopNav from "./DeliveryNav";
import InTransit from "./In-Transit";
import Delivered from "./Delivered"
import "./css/DeliveryStatus.css"
import Pending from './Pending';

const tabs = [
    {label: "In-Transit", component: <InTransit/>},
    {label:"Delivered", component: <Delivered/>},
    {label:"Pending", component: <Pending/>},
]
class DeliveryStatusSide extends Component {
    state = { 
        activeTab:0
     }


     handleClick = (i) => {
         this.setState({activeTab: i})
     }
    

    render() { 
        const {activeTab} = this.state;
        return ( 
            <div>
                <TopNav tit={"Delivery Status"}/>
                    <div className="del-cont">
            <div style={{width:'100%'}}>
                <div style={{width:'100%',borderBottom:'0.2px solid #C4C4C4',marginTop:'26px'}}>
                    <div style={{width:'40%',display:'flex',justifyContent:'space-evenly'}}>
                        {tabs.map((tab,i) => {
                            let className = 'del-lik ';
                            className += activeTab === i ? 'del-active' : '';
                        return <div onClick={() => this.handleClick(i)} key={`${tab.label}${i}`}  className={className}>
                            {tab.label}
                            </div>
                        })}
                    </div>
                </div>
                <br/><br/><br/>
                <div style={{width:'95%',margin:'0px auto'}}>{tabs[activeTab] && tabs[activeTab].component}</div>
            </div>
                </div>
            </div>
         );
    }
}
 
export default DeliveryStatusSide;