import React, { useContext, useState, useEffect } from 'react';
import Logo from '../../components/Logo';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';
import { Link } from 'react-router-dom';

const Login = (props) => {
	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const { login, status, resendRegEmail, message, clearMessages, loading, user: returnedUser, isAuth } = authContext;

	if (localStorage.token) {
		authContext.loadUser();
	}
	const [ user, setUser ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;
	useEffect(
		() => {
			if (isAuth && returnedUser) {
				props.history.push({
					pathname: '/dashboard',
					state: { user: returnedUser.user }
				});
			}
			if ((status === 'fail') && message) {
				console.log(message)
				setAlert(message, 'danger');
			}
			if (status === 'pending') {
				// setAlert(message, 'danger');
				const { businessName, email } = returnedUser;
				resendRegEmail(email);
				props.history.push({
					pathname: '/register_verified',
					state: { businessName, email }
				});
			}
			// eslint-disable-next-line
		}
		,
		[  message, loading, returnedUser, props.history ]
	);


	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			// setAlert('Please fill in all fields', 'danger');
		} else {
			login({
				email,
				password
			});
			clearMessages()
		}
	};
	console.log("loading:", loading)
	return (
		<div>
			<div className="loginwrapp">
				<div className="blue">
					<div className="log">
						<Logo />
					</div>
					<div style={{ position: 'relative' }} className="tec">
						<h1>Welcome back !</h1>
						<span
							style={{
								marginTop: '-30px',
								position: 'absolute',
								fontSize: '18px',
								fontWeight: '400'
							}}
						>
							Lets make it work
						</span>
					</div>
				</div>
				<div style={{ background: 'white' }} className="wite">
					<div style={{ marginTop: '50px' }} className="logtext">
						<h1 className="v">Sign in</h1>
						<span>
							<p className="v">Log in to your account</p>
						</span>
						<form onSubmit={onSubmit}>
							<input
								className="na"
								required
								placeholder="Email Address"
								type="email"
								name="email"
								value={email}
								onChange={onChange}
							/>
							<input
								className="na"
								required
								placeholder="Password"
								type="password"
								name="password"
								value={password}
								onChange={onChange}
							/>
							<div
								className="inpu"
								style={{
									display: 'flex',
									justifyContent: 'center',
									flexWrap: 'wrap',
									width: '100%'
								}}
							>
								<div style={{ flex: '1' }} />
								<button className="bt-login" type="submit">
									 {/* <i
										className={loading && "fa fa-spinner fa-spin"}
									/> */}
									{ loading ? <i 
										className= "fa fa-spinner fa-spin"/> : "Submit"}
								</button>
							</div>
						</form>
						<div className="foot">
							<div>
								<span>
									Don't have an account ?<f style={{ color: '#2F80ED' }}>
										<Link to="/register1" className="textDeco-none"> Sign up</Link>
									</f>{' '}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
