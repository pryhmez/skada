import React, { Component } from 'react';

class Table extends Component {
    state = { 
       
     }
    render() { 
        return ( 
            <table>
                        <tr style={{color:'#2F80ED'}}>
                            <th>Order ID</th>
                            <th>Goods Content</th>
                            <th>ETD</th>
                            <th>recipient’s Contact</th>
                        </tr>
                        <br/>
                        {this.props.table.map((data,i)=>(
                            <tr key={i} className='del-tr'>
                                <td>{data.id}</td>
                                <td>{data.goods}</td>
                                <td>{data.content}</td>
                                <td>{data.contact}</td>
                            </tr>
                        ))}
                    </table>
         );
    }
}
 
export default Table;