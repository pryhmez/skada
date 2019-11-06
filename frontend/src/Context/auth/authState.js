import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { REGISTER_SUCCESS, REGISTER_FAILED, LOGIN_FAILED, LOGOUT, LOGIN_VERIFY, LOGIN_SUCCESS, AUTH_ERROR, LOADING, USER_LOADED } from '../Types';

const AuthState = (props) => {
	const initailState = {
		token: null,
		message: null,
		isAuth: null,
		status: null,
		user: null,
		error: null,
		loading: null
	};
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};
	const [ state, dispatch ] = useReducer(authReducer, initailState);
	const register = async (registerData) => {
		console.log(registerData, 'Registration info');

		try {
			dispatch({ type: LOADING })
			const response = await fetch('/api/user/signup', {
				method: 'post',
				headers: config.headers,
				body: JSON.stringify(registerData)
			});
			const res = await response.json();
			console.log('=====================');
			console.log(res);
			console.log('=====================');

			if (res.status === true) {
				dispatch({
					type: REGISTER_SUCCESS,
					payload: res
				});
			} else {
				dispatch({
					type: REGISTER_FAILED,
					payload: res
				});
			}
		} catch (error) {
			console.log(error, 'Error block');
			dispatch({
				type: REGISTER_FAILED,
				payload: error
			});
		}
	};
	const resendRegEmail = async (email) => {
		console.log("email", email)
		try {
			const response = await fetch('/api/user/resend', {
				method: 'post',
				headers: config.headers,
				body: JSON.stringify({email})
			});
			const res = await response.json();
			console.log('=====================');
			console.log(res);
			console.log('=====================');

			if (res.status === true) {
				dispatch({
					type: LOGIN_VERIFY,
					payload: res
				});
			} else {
				dispatch({
					type: AUTH_ERROR,
					payload: res
				});
			}
		} catch (error) {
			console.log(error, 'Error block');
			dispatch({
				type: AUTH_ERROR,
				payload: error
			});
		}
	}
	const login = async (loginData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		console.log(loginData)
		try {
			dispatch({ type: LOADING })
			const response = await fetch('/api/user/login', {
				method: 'post',
				headers: config.headers,
				body: JSON.stringify(loginData)
			});
			const res = await response.json();
			console.log(res)
			if (res.status === true) {
				dispatch({
					type: LOGIN_SUCCESS,
					payload: res
				});	
				loadUser();
			} else if(res.status === "pending") {
				dispatch({
					type: LOGIN_VERIFY,
					payload: res
				});
			} else {
				
				dispatch({
					type: LOGIN_FAILED,
					payload: res
				});
			}
			
		} catch (err) {
			dispatch({
				type: LOGIN_FAILED,
				payload: err
			});
        }
	};
	// Logout
	const logout = () => dispatch({ type: LOGOUT });

	//Load User
	const loadUser = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.token
			}
		};

		try {
			const response = await fetch('/api/user/login', {
				method: 'get',
				headers: config.headers
			});
			const res = await response.json();
			console.log("++++++++++++++++++++")
			console.log(res)
			console.log("++++++++++++++++++++")

			if (res.status === true) {
				console.log("say hi to Jerry")
				dispatch({
					type: USER_LOADED,
					payload: res
				});	
			} else {
				dispatch({
					type: AUTH_ERROR,
					payload: res
				});
			}
		} catch (err) {
			dispatch({ type: AUTH_ERROR, payload: err });
		}
	};

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				isAuth: state.isAuth,
				status: state.status,
				message: state.message,
				user: state.user,
				error: state.error,
				loading: state.loading,
				register,
				login,
				logout,
				loadUser,
				resendRegEmail
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
