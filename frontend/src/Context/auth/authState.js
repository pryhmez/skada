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
        status: null,
        user : null,
        error : null,
        loading : true 
    }
    const [state,dispatch] = useReducer(authReducer,initailState)
    const register= async (registerData)=>{
        console.log(registerData, "Registration info")
        const config = {
            headers : {
                'Content-Type': 'application/json'
            }
        }

        console.log(registerData)

        
        try {
            const response = await  fetch("http://localhost:8080/api/user/signup", {
                method:"post",
                headers: config.headers,
                body: JSON.stringify(registerData)
            })
            const res = await response.json()
            console.log("=====================")
            console.log(res)
            console.log("=====================")
            
            if(res.status === true){
                dispatch({
                    type : REGISTER_SUCCESS,
                    payload: res,
                })
            } else {
                dispatch({
                    type : REGISTER_FAILED,
                    payload: res
                })
            }
           
        } catch (error) {
            console.log(error, "Error block")
            dispatch({
                type : REGISTER_FAILED,
                payload : error
            })
        }
    }
    return(
        <AuthContext.Provider value={
            {
                token : state.token,
                isAuth : state.isAuth,
                status: state.status,
                message : state.msg,
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