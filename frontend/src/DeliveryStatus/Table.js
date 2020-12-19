import React, { Component } from 'react';

class Table extends Component {
    state = { 
       
     }
    render() { 
        return ( 
            <table>
                        <tr style={{color:'#2F80ED'}}>
                            <th>senders Phone</th>
                            <th>pick Up</th>
                            <th>delivery</th>
                            <th>Good's Nature</th>
                        </tr>
                        <br/>
                        {this.props.table.map((data,i)=>(
                            <tr key={i} className='del-tr'>
                                <td>{data.sendersPhone}</td>
                                <td>{data.pickUpPoint}</td>
                                <td>{data.deliveryPoint}</td>
                                <td>{data.natureOfGood}</td>
                            </tr>
                        ))}
                    </table>
         );
    }
}
 
export default Table;