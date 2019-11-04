import React, { Component } from 'react';
import Logo from "../../components/Logo"

function Login () {
        return ( 
            <div>
                <div className="loginwrapp">
                <div className="blue">
                    <div className='log'><Logo/></div>
                    <div style={{position:'relative'}}  className='tec'><h1>Welcome back !</h1>
                    <span style={{
                        marginTop:'-30px',
                        position:'absolute',
                        fontSize:'18px',
                        fontWeight:'400'
                    }}>Lets make it work</span>
                    </div>
                </div>
                <div style={{background:'white'}} className="wite">
                    <div style={{marginTop:'50px'}} className='logtext'>
                        <h1 className="v">Sign in</h1>
                        <span><p className="v">Log in to your account</p></span>
                        <form>
                            <input className="na"  required  placeholder="Email Address" type="email"></input>
                            <input className="na"  required placeholder="Password" type="password"></input>
                            <div className="inpu" style={{display:'flex',justifyContent:'center',
                            flexWrap:'wrap',width:'100%'
                            }}><div  style={{flex:'1'}}></div><input style={{
                                marginTop:'15px',
                                color:'white',
                                background:'#2F80ED',
                                border:'none',
                                padding:'8px 35px',
                            }} type='button' value="Sign in"></input></div>
                        </form>
                        <div className="foot">
                            <div><span>Don't have an account.<f style={{ color:"#2F80ED"}}>Sign up?</f> </span>
                          </div>  
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
}
 
export default Login;