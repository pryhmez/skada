import React, { Component,useContext, useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import Button from "./RegisterButton";
import Logo from "../../components/Logo";
import Drop from "./DropDown"
import "../css/Register.css"
import AuthContext from "../../Context/auth/authContext";

const Register  =  props => {
    const authContext = useContext(AuthContext)
    const {register, status, msg, error} = authContext;

    console.log(status)
    useEffect(() => {
        console.log("hiiiiiiiiiaaaaaa", status)
        if (status === true) {
          props.history.push('/');
        }
    
        if (error === 'User already exists') {
        //   setAlert(error, 'danger');
        //   clearErrors();
        }
        // eslint-disable-next-line
      }, [error, status, msg, props.history]);

      const [ user, setUser ] = useState({ 
        businessname:"",
        businessphone:"",
        businesstype:"",
        businesscategory:"",
     })

     const { businessname, businessphone, businesstype, businesscategory } = user;

     const onChange = e =>   {
         if(e.target){
            const { name, value } = e.target;
            setUser((user) =>{
                    return { ...user, [name]: value }  
             })
         } else {
            setUser((user) =>{
                return { ...user, businesscategory: e  }  
            })
         }
        
     };

     const onSubmit = e => {
        e.preventDefault();
        const {location:{state:{userInfo}}} = props
        const isPhoneValid = (/^0[7-9][0-1]\d{8}$/g).test(businessphone);
        // console.log(isPhoneValid)
        if(isPhoneValid) {
            const regUser = { businessname,
            businessphone,
            businesstype,
            businesscategory, ...userInfo}; 
            // this.props.history.push({
            //     pathname: '/register2',
            //     state: { userInfo }
            //   })
            register(regUser)
        } else {
            alert("I, victor promise to fix or it turn to a Bed bug")
           
        }
      };

      
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
                    <form onSubmit={onSubmit}>
                        <input className="na" onChange={onChange} value={businessname}  name='businessname' required  placeholder="Business Name"></input>
                        <input className="na" onChange={onChange} value={businessphone} name='businessphone' required placeholder="Business Number"></input>
                        <input className="na" onChange={onChange}  value={businesstype} name='businesstype' required placeholder="Business Type"></input>
                        <Drop onChange = {onChange} value={businesscategory}/>
                        <input
                            type='submit'
                            value='Done'
                            className='bt btn-primary btn-block'
                            />
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

export default Register;