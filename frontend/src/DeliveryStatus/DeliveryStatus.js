import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/auth/authContext';
import { ProductConsumer } from "../Context/Context";
import Loading from '../components/Loading'
import Navi from "../Dashboard/components/Navi";
import Side from "./DeliveryStatusSide"
import TopNav from './DeliveryNav';
import { serverlUrl } from '../Utils/ServerUrl';
 
const DeliveryStatus = () => {
    const authContext = useContext(AuthContext)
    const { user : { user}} = authContext;
    const { _id } = user;
    const [state, setState] = useState({ "loading" : true})
    const fetchdashboard = async () => {
        const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.token
			}
        };
       
        let response = await fetch(`${serverlUrl}/api/user/dashboard?id=${_id}`, {
            method: 'get',
            headers: config.headers
        });
        response = await response.json()
        return response
    }
    useEffect(() => {
        const response= fetchdashboard();
        response.then(res =>  setState({...state, "data": res.data, "loading" : false} ))
    }, [])
    console.log(state)
    const open = [], closed = [], pending=[];
    
    if(!state.loading) {
        const { data: { schedules } } = state;
        if(schedules) {
            for( const schedule of schedules) {
                if(schedule.status === "open") {
                    open.push(schedule)
                } else if ( schedule.status === "pending") {
                    pending.push(schedule)
                } else {
                    closed.push(schedule)
                }
            }
        }
    }
   
    
    return ( 
        <ProductConsumer>
            {value => {return(
            <div className="dash-cont">
            <div className="navii"><Navi/></div>
            <div style={{display:value.isFalse ?  'block':'none'}} className="navbar"><Navi/></div>
            <div onClick={value.side} style={{right:value.isFalse ? '0%' : '100%',position:'fixed' }} className='black'></div>
            <div className="naviii">
            <TopNav tit={'Delivery Status'} />
            {!state.loading ? <Side open={open} closed={closed} pending={pending} /> : < Loading />}</div>
            </div>
        )}}
        </ProductConsumer>
         );
}
export default DeliveryStatus;