import React, { Component } from 'react';
import Table from "./Table"
 
class Pending extends Component {

    render() { 
        return ( 
            <div>
                <div className="delivery-nav-cont">
                <div className="delivery-nav">
                    <Table table={this.props.goods} />
                </div>
            </div>
            </div>
         );
    }
}
 
export default Pending;