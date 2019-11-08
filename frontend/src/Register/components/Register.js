import React, { useContext, useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import Logo from "../../components/Logo";
import Drop from "./DropDown"
import "../css/Register.css"
import AuthContext from "../../Context/auth/authContext";
import AlertContext from '../../Context/alert/alertContext'

const Register  =  props => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;
    const {register, status, clearMessages, message, loading, error} = authContext;
    const {location:{state:{userInfo}}} = props
    useEffect(() => {

        if (status === true) {
            const { email } = userInfo;
            props.history.push({
                pathname: '/register_verified',
                state: { businessName : businessname, email }
              })
        } 
        if (status === "fail"){

            setAlert(message, 'danger');
            clearMessages();
        }
        // eslint-disable-next-line
      }, [error, status, message]);

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
        const isPhoneValid = (/^0[7-9][0-1]\d{8}$/g).test(businessphone);
        if(isPhoneValid) {
            const regUser = { businessname,
            businessphone,
            businesstype,
            businesscategory, ...userInfo}; 
            register(regUser)
        } else {
            setAlert("PLease Input a valid phone number", 'danger') 
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
                        <div className='flex-end'>
                            <button className="bt-login" type="submit">
									{ loading ? <i 
										className= "fa fa-spinner fa-spin"/> : "Done"}
							</button>
                        </div>
                    </form>
                    <div className="foot">
                        <div><span>Sign up with Instagram page 
                            <i style={{color:'#2F80ED',fontSize:"25px",marginLeft:'5px'}} className="fab fa-instagram"></i></span></div>
                            <br/>
                        <div>Have an Account? <Link to="/login"  className="textDeco-none">Sign In</Link></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Register;