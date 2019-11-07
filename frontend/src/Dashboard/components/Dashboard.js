import React, { Component } from 'react';
import { ProductConsumer } from "../../Context/Context";
import Navi from "./Navi";
import Side from "./DashSide"
import "../css/Dash.css"


const Dashboard = (props) => {
    return ( 
        <ProductConsumer>
            {value => {return(
            <div className="dash-cont">
            <div className="navii"><Navi /></div>
            <div style={{display:value.isFalse ?  'block':'none'}} className="navbar"><Navi/></div>
            <div onClick={value.side} style={{right:value.isFalse ? '0%' : '100%',position:'fixed' }} className='black'></div>
            <div className="naviii"><Side/></div>
            </div>
        )}}
        </ProductConsumer>
     );
}
export default Dashboard;