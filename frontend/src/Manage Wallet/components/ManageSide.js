import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../Context/auth/authContext';
import TopNav from "../../Dashboard/components/TopNav";
import Wallet from "../../Dashboard/components/Statboard";
import Loading from '../../components/Loading'
import AddWallet from "./AddWallet";
import {ProductConsumer} from "../../Context/Context"
import { serverlUrl } from '../../Utils/ServerUrl';


const ManageSide = () => {
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

    if(state.loading) return <Loading />
    const { data } = state;
    return ( 
        <ProductConsumer>
            {value=>{return(
        <div>
            <TopNav tit={"Manage Wallet"}/>
            <div 
            style={{
                width:value.paydrop &&'100%',
                background:value.paydrop && 'white',
                height:value.paydrop &&'100%',
                margin:value.paydrop &&'0px auto'
            }}>
                <Wallet walletInfo={data}/>   
                <AddWallet/>
            </div>
        </div>
        )}}
        </ProductConsumer>
     );
}
 
export default ManageSide;