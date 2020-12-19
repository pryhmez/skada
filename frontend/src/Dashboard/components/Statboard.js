import React, { Component } from 'react';
import {ProductConsumer} from "../../Context/Context"
import "../css/Stat.css"

class Statboard extends Component {
    state = {  }
    render() { 
        const { walletInfo : {wallet}} = this.props
        return ( 
            <div className="stat-cont">
                <div className="stat">
                    <h4>Skada Wallet Balance</h4>
                    <aside className='ht'>
                    <ProductConsumer>
                    {value=>{return(<h1 style={{fontSize:'54px'}}>&#8358;{value.hidden?"N XXX.XX":  ((wallet.length > 0) ? 'hia': 0)}</h1>)}}
                    </ProductConsumer>   
                    <div style={{flex:'1'}}></div>
                    <ProductConsumer>
                    {value=>{return(<i onClick={value.hide} className={value.hidden?"far fa-eye-slash":"far fa-eye"}></i>)}}
                    </ProductConsumer>
                    </aside>
                    <aside className="htt">
                        <div className="httt" style={{marginTop:'10px'}}>
                        <aside style={{color:'whitesmoke',fontSize:'16px'}}>Wallet Number</aside>
                        <aside style={{fontSize:'21px'}}>123 456 5445 7XXX</aside>
                        </div>
                        <div style={{flex:'1'}}></div>
                        <button className="fund-wallet" style={{
                            width:'200px',
                            padding:'15px 0px',
                            color:'#2F80ED',
                            background:'white',
                            borderRadius:'2px',
                            border:'none',
                            fontWeight:'500',
                            fontSize:'16px',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center',
                            marginTop:'10px',
                            fontWeight:'600'
                            }}><i className="fas fa-plus"></i><div style={{flex:"0.2"}}/> Fund Wallet
                        </button>
                    </aside>
                </div>
            </div>
         );
    }
}
 
export default Statboard;