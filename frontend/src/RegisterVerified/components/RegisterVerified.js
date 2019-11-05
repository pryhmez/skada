import React, { Component } from 'react';
import Logo from "../../components/Logo";
import Img from "../img/Vector.svg";
import "../css/RegisterVerified.css"

class RegisterVerified extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <div className="loginwrapp">
                <div className="blue">
                    <div className='log'><Logo/></div>
                    <div style={{position:'relative'}}  className='tec'><h1>Hey Hunger Clinic</h1>
                    <span style={{
                        marginTop:'-30px',
                        position:'absolute',
                        fontSize:'18px',
                        fontWeight:'400'
                    }}>Lets make it work</span>
                    </div>
                </div>
                <div style={{background:'white'}} className="white">
                   <div className="verified-cont">
                       <div className="vr" style={{display:'flex',justifyContent:'center'}}>
                            <img style={{margin:'0px auto'}} src={Img}></img>
                        </div>
                        <h1 style={{color:'#2F80ED',textAlign:'center',margin:'10px auto'}}>Verify Your Email</h1>
                        <p style={{padding:'0px 18%',textAlign:'center',color:'#4F4F4F',fontsize:'12px'}}>Thanks for signing up! We’ve sent a verification link
                        to your mail so you can start enjoying skada.</p>
                        <div style={{display:'flex',justifyContent:'center'}}><input style={{
                                marginTop:'15px',
                                color:'white',
                                background:'#2F80ED',
                                border:'none',
                                padding:'8px 35px',
                            }} type='button' value="Open Mall App"></input></div>
    <div style={{display:'flex',justifyContent:'center',color:'#4F4F4F',fontsize:'12px'}}><p>Did not receive any mail? 
    <f style={{ color:"#2F80ED"}}> Resend email</f></p></div>
                   </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default RegisterVerified;