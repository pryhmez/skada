import Logo from "../../components/Logo";
import Img from "../img/Vector.svg";
import "../css/RegisterVerified.css"
import React, { useContext, useState, useEffect } from 'react';
import AuthContext from "../../Context/auth/authContext";
import AlertContext from '../../Context/alert/alertContext'

const RegisterVerified = (props) => {
	const authContext = useContext(AuthContext);
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;
	const {resendRegEmail, status, message, loading} = authContext;
	const [ count, setCount ] = useState(0);
	const handleResend = () => {
		const {location:{state:{ email}}} = props
		resendRegEmail(email)
		setCount(count + 1)
	}

	  
	useEffect(() => {
		if(status === true){
			setAlert(message,'primary')
		} 
		if(status === "fail") {
			setAlert(message,'danger')
		}
		if(status === "error") {
			setAlert("Sorry Email failed to send, Please try again later ",'danger')
		}
        // eslint-disable-next-line
	  }, [ message, props.location.state, count, status, loading]);
	if(!props.location.state) {
		props.history.push("/login")
		return "hi"
	}	  
	const {location:{state:{businessName}}} = props
	return (
		<div>
			<div className="loginwrapp">
				<div className="blue">
					<div className="log">
						<Logo />
					</div>
					<div style={{ position: 'relative' }} className="tec">
						<h1>Hey {businessName}</h1>
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
				<div style={{ background: 'white' }} className="white">
					<div className="verified-cont">
						<div className="vr" style={{ display: 'flex', justifyContent: 'center' }}>
							<img style={{ margin: '0px auto' }} src={Img} />
						</div>
						<h1 style={{ color: '#2F80ED', textAlign: 'center', margin: '10px auto' }}>
							Verify Your Email
						</h1>
						<p style={{ padding: '0px 18%', textAlign: 'center', color: '#4F4F4F', fontsize: '12px' }}>
							Thanks for signing up! We’ve sent a verification link to your mail so you can start
							enjoying skada.
						</p>
						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<button
								style={{
									marginTop: '15px',
									color: 'white',
									background: '#2F80ED',
									border: 'none',
									padding: '8px 35px',
									color: '#fff',
									textDecoration: 'none'
								}}
							>
								<a
									href="https://gmail.com"
									style={{
										color: '#fff',
										textDecoration: 'none'
									}}
									target="_blank"
								>
									Open Mail App
								</a>
							</button>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								color: '#4F4F4F',
								fontsize: '12px'
							}}
						>
							<p>
								Did not receive any mail?
								<span style={{ color: '#2F80ED' }} onClick={handleResend} style={{ cursor: 'pointer'}}> Resend email</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default RegisterVerified;
