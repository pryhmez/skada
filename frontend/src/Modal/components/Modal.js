import React, { Component, useContext, useEffect } from 'react';
import { Redirect} from 'react-router-dom';
import {ProductConsumer} from "../../Context/Context";
import "../css/Modal.css";
import LogoImg from "../img/logoout.png"
import AuthContext from '../../Context/auth/authContext';

const Modal = (props) => {
  
    const authContext = useContext(AuthContext);
    const { logout, isAuth } = authContext;

    useEffect(() =>{
       console.log(isAuth)
    },[isAuth]);

    const handleLogout = () => {
        logout()
    }

       
        
        return ( 
            <ProductConsumer>
                {value=>{return(
                    <div className='mod-cont' onClick={value.handleLogModal} style={{position:'fixed',height:'100vh',top:'0',
                    background:'rgba(65, 139, 239, 0.2)',zIndex:'1'}}>
                        <div style={{width:'600px',height:'450px',background:'white',
                        position:'absolute',
                        zIndex:'1',display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <div>
                                <h2 style={{color:'black'}}>Are you sure you want to logout?</h2>
                                <br/>
                                <img style={{marginLeft:'20px'}} src={LogoImg}></img>
                                <br/><br/><br/>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <button style={{
                                    padding:'5px 20px',
                                    background:'#2F80ED',
                                    border:'none',
                                    color:'white'
                                }}>Cancel</button>
                                <div style={{flex:'0.6'}}></div>
                                <button style={{ 
                                    padding:'5px 20px',
                                    background:'#efefef',
                                    border:'none',
                                    color:'#2F80ED'
                                }} onClick={handleLogout}>Logout</button>
                            </div>
                            </div>
                        </div>
                    </div>
                )}}
            </ProductConsumer>
         );
}
 
export default Modal;