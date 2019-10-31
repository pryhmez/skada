import React, { Component } from 'react';
import TopNav from "../../Dashboard/components/TopNav";
import Del from "./Del";
import Package from "./Package";
import Send from "./Send";
import {Link} from "react-router-dom"
import "../css/Shedule.css";

class Side extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <TopNav tit={"Shedule Pickup"}/>
                <Del/>
                <Package/>
                <Send/>
                <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',width:'92.5%'}}>
                    <Link style={{textDecoration:'none'}} to="/complete"><button style={{
                                    width:'200px',
                                    padding:'10px 0px',
                                    color:'white',
                                    background:'#2F80ED',
                                    borderRadius:'2px',
                                    border:'none',
                                    fontWeight:'500',
                                    fontSize:'18px',
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop:'30px',
                                    fontWeight:'600'
                                }}>
                                Confirm Order
                    </button></Link>
                    <br/>
                </div>
            </div>
         );
    }
}
 
export default Side;