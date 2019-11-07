import React, { useContext, useState, useEffect } from 'react';
import {Link} from "react-router-dom"
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';
import Button from "./RegisterButton";
import Logo from "../../components/Logo"
import "../css/Login.css"

const Register1 = (props) => {
    const [ state, setState] = useState( { 
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        password:''
    })
    const { firstname, lastname, phone, email, password } = state;
    const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
    const handleChange=(e)=>{
        setState({...state,[e.target.name] : e.target.value})
        //  console.log(state)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const isPhoneValid = (/^0[7-9][0-1]\d{8}$/g).test(phone);
        if(isPhoneValid) {
            console.log(state)
            props.history.push()
            props.history.push({
                pathname: '/register2',
                state: { userInfo : state }
              })
        } else {
            setAlert("Please input a valid phone number", "danger")
           
        }
    }

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
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <input required className='no' name='firstname' value={firstname} onChange={handleChange} placeholder="First Name"></input>
                            <input required className='nv' name='lastname'  value={lastname} onChange={handleChange}placeholder="second Name"></input>
                        </div>
                        <input required className="na" name='phone'  value={phone} onChange={handleChange} placeholder="Phone Number eg 081"></input>
                        <input required className="na" name='email'  value={email} onChange={handleChange} placeholder="Email Address" type='email'></input>
                        <input required className="na" pattern=".{8,}"  value={password} name='password' onChange={handleChange} placeholder="Password" type="password" title="3 characters minimum"></input>
                        <div className="bt"><Button name={"Continue"}/></div>
                    </form>
                    <div className="foot">
                        <div><span>Sign up with Instagram page 
                            <i style={{color:'#2F80ED',fontSize:"25px",marginLeft:'5px'}} className="fab fa-instagram"></i></span></div>
                            <br/>
                        <div>Have an Account? <pan><Link to="/login" className="textDeco-none"> Sign In</Link></pan></div>
                    </div>
                </div>
            </div>
        </div>
     );
}
        
         
export default Register1;