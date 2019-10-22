import React, { Component } from 'react';
import Button from "./LogButton";
import Logo from "../../components/Logo"
import "../css/Login.css"

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="loginwrapp">
                <div className="blue">
                    <div className='log'><Logo/></div>
                    <div  className='tec'><h1>Create an account less than 2 minutes</h1></div>
                </div>
                <div className="white">
                    <div className='logtext'>
                        <h1 className="v">Register</h1>
                        <span><p className="v">Create an account with Skada</p></span>
                        <form>
                            <div className="name">
                                <input className='no' placeholder="First Name"></input>
                                <input className='nv' placeholder="second Name"></input>
                            </div>
                            <input className="na"  placeholder="Phone Number"></input>
                            <input className="na"  placeholder="Email Address" type='email'></input>
                            <input className="na"  placeholder="Password" type="password"></input>
                            <div className="bt"><div></div><Button/></div>
                        </form>
                        <div className="foot">
                            <div><span>Sign up with Instagram page 
                                <i style={{color:'#2F80ED',fontSize:"25px",marginLeft:'5px'}} className="fab fa-instagram"></i></span></div>
                                <br/>
                            <div>Have an Account? <pan>Sign in</pan></div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;