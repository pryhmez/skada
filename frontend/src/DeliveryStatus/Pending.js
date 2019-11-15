import React, { Component } from 'react';
import Table from "./Table"
 
class Pending extends Component {
    state = { 
        table:[
            {
                id:1,
                goods:"Food",
                content:"Chicken",
                contact:"09088377288"
            },
            {
                id:2,
                goods:"Food",
                content:"Chicken",
                contact:"09088377288"
            },
            {
                id:3,
                goods:"Food",
                content:"Chicken",
                contact:"09088377288"
            },
            {
                id:4,
                goods:"Food",
                content:"Chicken",
                contact:"09088377288"
            },
            {
                id:5,
                goods:"Food",
                content:"Chicken",
                contact:"09088377288"
            }
        ]
     }
    render() { 
        return ( 
            <div>
                <div className="delivery-nav-cont">
                <div className="delivery-nav">
                    <Table table={this.state.table} />
                </div>
            </div>
            </div>
         );
    }
}
 
export default Pending;