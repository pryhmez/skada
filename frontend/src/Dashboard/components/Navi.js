import React, { Component } from 'react';
import {ProductConsumer} from "../../Context/Context"
import Logo from "../../components/Logo";
import Button from "./DashButton"
import "../css/Navi.css";
import {NavLink} from "react-router-dom";
import One from "../icons/1.svg"
import Two from "../icons/2.png"
import Three from "../icons/3.png"
import Four from "../icons/4.png"
import Five from "../icons/5.png"

class Navi extends Component {
    state = { 
        activeNav: 'Dashboard',
        route:[
            {
                name:'Dashboard',
                route:'/dashboard',
                active:'active',
                icon:One
            },
            {
                name:'Delivery Status',
                route:'/schedule',
                active:'active1',
                icon:Two
            },
            {
                name:'Track Goods',
                route:'/tracking',
                active:'active2',
                icon:Three

            },
            {
                name:'Manage wallet',
                route:'managewallet',
                active:'active3',
                icon:Four
            },
            {
                name:'Logout',
                route:'',
                active:'active4',
                icon:Five
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
                     exact to={data.route} className="navline" activeClassName={data.active}><img style={{marginRight:'15px',marginTop:'5px'}} src={data.icon}></img>{data.name}</NavLink></aside>
                </div>)}
                <div style={{marginTop:'40px',paddingLeft:'80px'}}><Button/></div>
            </div>)}}
            </ProductConsumer>
         );
    }
}
 
export default Navi;