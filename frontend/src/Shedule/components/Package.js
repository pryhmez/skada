import React, { Component } from 'react';

class Package extends Component {
    state = {  }
    render() { 
        const {  natureOfGood, quantity, goodsDescription, goodsType, amount} = this.props.orderDet;
        return ( 
            <div className="pac">
            <div className="pack">
                <div className="pack-img"></div>
                <div className="pack-side">
                    <div className="three">
                        <aside>
                            <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Good Type:</div>
                            <div style={{fontWeight:"600"}}>{goodsType}</div>
                        </aside>
                        <aside>
                            <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Quantity:</div>
                            <div style={{fontWeight:"600"}}>{quantity}</div>
                        </aside>
                        <aside>
                            <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Nature:</div>
                            <div style={{fontWeight:"600"}}>{natureOfGood} </div>
                        </aside>
                    </div>
                    <br/>
                    <div className="des">
                        <div style={{color:"#2F80ED",fontSize:"0.8rem"}}>Description:</div>
                        <div style={{fontWeight:"600"}}>{goodsDescription} </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Package;