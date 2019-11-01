import React, { Component } from 'react';
import {ProductConsumer} from "../../Context"

class Notification extends Component {
    state = {
        display: false,
        tot:[
            {
                mess: "Mike John responded to your email",
                id:1
            },
            {
                mess: "You have 5 new tasks",
                id:2
            },
            {
                mess: "You're now friends with Andrew",
                id:3
            },
            {
                mess: "Another Notification",
                id:4
            },
            {
                mess: "Another one",
                id:5
            }
        ]
    }

    handleNotDel=(id)=>{
        const newMess = this.state.tot.filter((data)=>data.id != id)
        this.setState({tot:newMess})
    }


    render() {
        return (
            <ProductConsumer>{value=>{return(
            <div>
                <div style={{ cursor: 'pointer',position:"relative",fontSize:'18px' }} 
                onClick={this.state.tot.length === 0 ? false : value.dis}>{this.props.icon}
                 <div style={{
                    width:'7px',
                    height:'7px',
                    background:'red',
                    position:'absolute',
                    borderRadius:'50%',
                    top:'0px',
                    right:'19px',
                    display:this.state.tot.length===0 ? "none" : "block"
                }}></div>
                </div>
                {value.display === true && <div
                    style={{
                        padding: '10px 10px',
                        background: 'white',
                        marginTop: '20px',
                        boxShadow: "0px 1px 1px 0px grey",
                        position:'absolute',
                        zIndex:'1' ,
                        fontSize:'13px',
                        color:'grey',
                        right:'50px',
                        borderRadius:'5px',
                        fontWeight:'500'
                    }}>
                       <div>{this.state.tot.map((data,i)=>{
                           return <div style={{position:'relative'}} key={i} className='mess'>{data.mess}
                                <button onClick={()=>this.handleNotDel(data.id)}
                                 style={{
                                    padding:'1px 7px',
                                    borderRadius:'30px',
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    position:'absolute',
                                    color:"black",
                                    background:'rgba(255, 255, 255, 0.767)',
                                    fontWeight:'bold',
                                    border:'none',
                                    top:'3px',
                                    right:'2px'
                                    }}>x
                               </button></div>
                       })}</div> 
                </div>}
            </div>
            )}}</ProductConsumer>
        );
    }
}

export default Notification;