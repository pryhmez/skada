import React, { Component } from 'react';
import TopNav from "../../Dashboard/components/TopNav";
import Wallet from "../../Dashboard/components/Statboard";
import AddWallet from "./AddWallet";
import {ProductConsumer} from "../../Context/Context"

class ManageSide extends Component {
    state = {  }
    render() { 
        return ( 
            <ProductConsumer>
                {value=>{return(
            <div>
                <TopNav tit={"Manage Wallet"}/>
                <div 
                style={{
                    width:value.paydrop &&'100%',
                    background:value.paydrop && 'white',
                    height:value.paydrop &&'100%',
                    margin:value.paydrop &&'0px auto'
                }}>
                    <Wallet/>   
                    <AddWallet/>
                </div>
            </div>
            )}}
            </ProductConsumer>
         );
    }
}
 
export default ManageSide;