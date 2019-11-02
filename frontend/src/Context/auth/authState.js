import React, { Component, useReducer } from 'react';
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {REGISTER_SUCCESS,REGISTER_FAILED,USER_LOADED} from "../Type"

const AuthState=(props)=>{
    const initailState = {
        token : null,
        msg: null,
        isAuth : null,
        user : null,
        error : null,
        loading : true 
    }
    const [state,dispatch] = useReducer(authReducer,initailState)
    const register=async(registerData)=>{
        const config = {
            headers : {
                "Content-Type" : 'application/json'
            }
        }
        try {
            const response = await axios.post('/api/users/signup',registerData,config)
            dispatch({
                type : REGISTER_SUCCESS,
                msg : response.message
            })
        } catch (error) {
            dispatch({
                type : REGISTER_FAILED,
                msg : error
            })
        }
    }
    return(
        <AuthContext.Provider value={
            {
                token : state.token,
                isAuth : state.isAuth,
                msg : state.msg,
                user : state.user,
                error : state.error,
                loading : state.true,
                register, 
            }
        }>
            {props.children}
            
        </AuthContext.Provider>
    )
}

export default AuthState;