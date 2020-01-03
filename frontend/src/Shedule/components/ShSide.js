import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';
import TopNav from '../../Dashboard/components/TopNav';
import Del from './Del';
import Package from './Package';
import Send from './Send';
import { Link } from 'react-router-dom';
import '../css/Shside.css'
import { serverlUrl } from '../../Utils/ServerUrl';

const Side = (props) => {
	const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const { user : { user}} = authContext;
    const { businessName:sendersName, email:sendersEmail, businessPhone: sendersPhone, _id: sendersId, } = user
    const { setAlert } = alertContext;
    const [loading, setLoading] = useState(null)
    const [status, setSta] = useState(null)

    useEffect(() => {
        console.log(props)
        // if (status === true) {
        //     const { email } = userInfo;
        //     props.history.push({
        //         pathname: '/register_verified',
        //         state: { businessName : businessname, email }
        //       })
        // } 
        // if ((status === "fail") && message){
        //     setAlert(message, 'danger');
        // }
        // if (status === "error"){
        //     setAlert("Failed to send Email, please try again later", 'danger');
        // }

        // eslint-disable-next-line
      }, [loading]);
    const handleCancel =  () => {
        props.handleRoute("schedule")
    }
    const handleConfirm =  async () => {
        // setLoading({loading: true})
        const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.token
			}
        };
        const req = { ...props.orderDet}
        req.sendersEmail = sendersEmail;
        req.sendersId = sendersId
        req.sendersName = sendersName
        req.sendersPhone = sendersPhone
        console.log(req)
        let response = await fetch(`${serverlUrl}/api/schedule/create`, {
            method: 'post',
            headers: config.headers,
            body: JSON.stringify(req)
        });
        response = await response.json()
        console.log(response)
        setLoading({loading: false})
        if(response.success === true) {
            console.log(props)
         props.handleRoute("complete")
        } else {
            setAlert(response.message,"danger")
        }
    }
	return (
		<div>
			<TopNav tit={'Shedule Pickup'} />
			<Del orderDet={props.orderDet} />
			<Package orderDet={props.orderDet} />
			<Send orderDet={props.orderDet} />
			<div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '92.5%' }}>
                <div style={{ textDecoration: 'none' }} >
					<button className="confirm-btn btn-ash" type="button" onClick={handleCancel}>Cancel</button>
				</div>
				<br />
				<div style={{ textDecoration: 'none' }} >
					<button className="confirm-btn" type="button" onClick={handleConfirm}>Confirm Order</button>
				</div>
				<br />
			</div>
		</div>
	);
};

export default Side;
