import React, { Component, useContext, useState, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import { ProductConsumer } from '../../Context/Context';
import Logo from '../../components/Logo';
import Button from './DashButton';
import '../css/Navi.css';
import { NavLink, Link } from 'react-router-dom';
import One from '../icons/1.svg';
import Two from '../icons/2.png';
import Three from '../icons/3.png';
import Four from '../icons/4.png';
import Five from '../icons/5.png';

const Navi = (props) => {
    const authContext = useContext(AuthContext);
	// const alertContext = useContext(AlertContext)
	// const { setAlert } = alertContext;
    const { user } = authContext;
    const { businessName } = user.user
    // const { user } = props;
    // const { businessName } = user;
	const [ state, setState ] = useState({
		activeNav: 'Dashboard',
		route: [
			{
				name: 'Dashboard',
				route: '/dashboard',
				active: 'active',
				icon: One
			},
			{
				name: 'Delivery Status',
				route: '/delivery_status',
				active: 'active1',
				icon: Two
			},
			{
				name: 'Track Goods',
				route: '/tracking',
				active: 'active2',
				icon: Three
			},
            {
                name:'Manage wallet',
                route:'managewallet',
                active:'active3',
                icon:Four
            }
		]
    });
    
    return (
        <ProductConsumer>
            {(value) => {
                return (
                    <div className="side-nav">
                        <div style={{ marginLeft: '80px' }}>
                            <Link style={{textDecoration:'none',color:'white'}} to="/"><Logo /></Link>
                            <br/>
                        </div>
                        <header style={{ marginLeft: '80px' }} className="header">
                            Hey <span style={{fontWeight:'600'}}>{businessName}</span>
                        </header>
                        <br/>
                        {state.route.map((data) => (
                            <div style={{ marginTop: '40px' }}>
                                <aside style={{ paddingLeft: '80px' }}>
                                    <NavLink
                                        style={{ color: 'white', textDecoration: 'none', width: '100%' }}
                                        exact
                                        to={data.route}
                                        className="navline"
                                        activeClassName={data.active}
                                    >
                                        <img style={{ marginRight: '15px', marginTop: '5px' }} src={data.icon} />
                                        {data.name}
                                    </NavLink>
                                </aside>
                            </div>
                        ))}
                        <aside onClick={value.handleLogModal} style={{color:'white',width:'100%',marginTop:'40px',cursor:'pointer'}}>
                            <aside style={{paddingLeft:'80px'}}>
                                <img style={{ marginRight: '15px', marginTop: '5px' }} src={Five} />
                                Logout
                                </aside>
                                </aside>
                        <div style={{ marginTop: '40px', paddingLeft: '80px' }}>
                            <Link to="/schedule"><Button/></Link>
                        </div>
                    </div>
                );
            }}
        </ProductConsumer>
    );
};
export default Navi;

