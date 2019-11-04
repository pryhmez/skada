import React, { Component } from 'react';
import {Link} from "react-router-dom"
import Button from "./LogButton";
import Logo from "../../components/Logo"
import "../css/Login.css"

class Login extends Component {
    state = { 
        firstname:'',
        secondname:'',
        phonenumber:'',
        email:'',
        password:''
    }

    handleChange=(e)=>{
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const { phonenumber } = this.state;
        const isPhoneValid = (/^0[7-9][0-1]\d{8}$/g).test(phonenumber);
        if(isPhoneValid) {
            const userInfo = this.state
            this.props.history.push();
            this.props.history.push({
                pathname: '/register2',
                state: { userInfo }
              })
        } else {
            alert("I, victor promise to fix or it turn to a Bed bug")
           
        }
    }
    render() {
        let isValid = false; 

            const userInfo = this.state
        return (  
            <div className="loginwrapp">
                <div className="blue">
                    <div className='log'><Logo/></div>
                    <div  className='tec'><h1>Create an account in less than 2 minutes</h1></div>
                </div>
                <div style={{background:'white'}} className="white">
                    <div className='logtext'>
                        <h1 className="v">Register</h1>
                        <span><p className="v">Create an account with Skada</p></span>
                        <form onSubmit={this.handleSubmit}>
                            <div className="name">
                                <input required className='no' name='firstname' onChange={this.handleChange} placeholder="First Name"></input>
                                <input required className='nv' name='secondname' onChange={this.handleChange}placeholder="second Name"></input>
                            </div>
                            <input required className="na" name='phonenumber' onChange={this.handleChange} placeholder="Phone Number eg 081"></input>
                            <input required className="na" name='email' onChange={this.handleChange} placeholder="Email Address" type='email'></input>
                            <input required className="na" pattern=".{8,}"  name='password' onChange={this.handleChange} placeholder="Password" type="password" title="3 characters minimum"></input>
                            <div className="bt"><Button name={"Continue"}/></div>
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