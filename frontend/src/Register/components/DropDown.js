import React, { Component } from 'react';
import "../css/Drop.css"

class Drop extends Component {
    state = { 
        category:[{id:1,cat:"Carpentry"},{id:2,cat:"Electronics"},{id:3,cat:"Fashion"},{id:4,cat:"Catering"},{id:5,cat:"Carpentry"},{id:6,cat:"Electronics"},{id:7,cat:"Fashion"},{id:8,cat:"Catering"},{id:9,cat:"Carpentry"},{id:10,cat:"Electronics"},{id:11,cat:"Fashion"},{id:12,cat:"Catering"}],
        isFalse:false,
        typeBiz:''
     }
     handleDrop=()=>{
        console.log('hi')
        this.setState({isFalse:!this.state.isFalse})
        console.log(this.state.isFalse)
     }
     handleChangeBiz = (cat) => {
         
        this.setState({typeBiz:cat, isFalse: false}, () => {
         this.props.onChange(this.state.typeBiz);
        })
     }
    render() { 
        const {typeBiz} = this.state
        return ( 
            <div className='drop-wrapper'>
            <div className="drop">{typeBiz}<an style={{cursor: "pointer"}} 
            ><i onClick={this.handleDrop} className="fas fa-sort-down"></i></an>
            </div>
               {this.state.isFalse ?
               <div className='cat'>{this.state.category.map((data)=>
                (<div><aside onClick={() => this.handleChangeBiz(data.cat)}>{data.cat}</aside></div>))}</div>
                : null}
            </div>
         );
    }
}
 
export default Drop;