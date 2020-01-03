import React, { Component, useState, useContext, useEffect } from 'react';
import Nav from "./TopNav";
import Stat from "./Statboard";
import AuthContext from '../../Context/auth/authContext';
import Deliver from "./Delivery";
import {ProductConsumer, withState} from "../../Context/Context";
import Loading from '../../components/Loading'
import "../css/Side.css"
import { serverlUrl } from '../../Utils/ServerUrl';

 const DashSide = () => {
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
        
        // return () => {
        //     cleanup
        // };
    }, [])
    console.log(state)
    const { data } = state;
    return ( 
        
        <ProductConsumer>
            {value => {return (
            <div className='siddle'>
                    <Nav tit={'Dashboard'}/>
                    {!state.loading ? 
                        <><Deliver dashboardInfo={data}/>
                    <Stat walletInfo={data}/></> : <Loading />}
            </div>
        )}}
        </ProductConsumer>
     );
}

export default DashSide;
