import React, { Component } from 'react';
import TopNav from "../Dashboard/components/TopNav";
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
            <div className="deli-cont">
                <div className="delivery-nav-cont">
                    <div className="delivery-nav">
                        {tabs.map((tab,i) => {
                            let className = 'del-lik ';
                            className += activeTab === i ? 'del-active' : '';
                        return <div onClick={() => this.handleClick(i)} key={`${tab.label}${i}`}  className={className}>
                            {tab.label}
                            </div>
                        })}
                    </div>
                </div>
                {tabs[activeTab] && tabs[activeTab].component}
            </div>
                </div>
            </div>
         );
    }
}
 
export default DeliveryStatusSide;