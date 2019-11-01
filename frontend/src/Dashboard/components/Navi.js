import React, { Component } from 'react';
import {ProductConsumer} from "../../Context"
import Logo from "../../components/Logo";
import Button from "./DashButton"
import "../css/Navi.css";
import {NavLink} from "react-router-dom"

class Navi extends Component {
    state = { 
        activeNav: 'Dashboard',
        route:[
            {
                name:'Dashboard',
                route:'/dashboard',
                active:'active'
            },
            {
                name:'Delivery Status',
                route:'/schedule',
                active:'active1'
            },
            {
                name:'Track Goods',
                route:'/tracking',
                active:'active2'

            },
            {
                name:'Manage',
                route:'',
                active:'active3'
            },
            {
                name:'Logout',
                route:'',
                active:'active4'
            }
        ]
    }

    handleClick = (name) => {
        console.log(name);
        this.setState({activeNav: name})
    }
    render() {
        console.log(this.props)
        return ( 
            <ProductConsumer>
                {value => {return (
            <div className="side-nav">
                <div style={{marginLeft:'80px'}}><Logo/></div>
                <header style={{marginLeft:'80px'}} className="header">Hey <side>Hunger Clinic</side></header>
                {this.state.route.map(data => <div style={{marginTop:"40px"}}>
                    <aside style={{paddingLeft:'80px'}}><NavLink style={{color:'white',textDecoration:'none',width:'100%'}}
                     exact to={data.route} className="navline" activeClassName={data.active}>{data.name}</NavLink></aside>
                </div>)}
                <div style={{marginTop:'40px',paddingLeft:'80px'}}><Button/></div>
            </div>)}}
            </ProductConsumer>
         );
    }
}
 
export default Navi;