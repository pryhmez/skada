import React, { Component } from 'react';
import Navigation from "./Navigation";
import Human from "../img/Human.png";
import truck from "../img/truck.png" ;
import hand from "../img/hands.png";
import heads from "../img/heads.png";
import litimg from "../img/pic.png";
import time from "../img/time.png"
import Email from "./Email"
import "../css/LandingPage.css"
import Button from './Button';

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment> 
                <div>
                <div className="back">
                    <Navigation/>
                    <div className='landtext'>
                        <div>
                            <h1>Helping small business<br/> deliver their goods the smart way</h1>
                            <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. 
                                Vel, amet quod adipisci ipsam provident at tenetur alias!
                            </p>
                            <button style={{
                                padding:'15px 50px',
                                background:'white',
                                borderRadius:'2px',
                                color:'#2F80ED',
                                fontWeight:'600',
                                border:'none',
                                fontSize:'17px',
                                marginTop:'10px'
                            }}>Get Started</button>
                        </div>
                        <img src={Human}></img>
                    </div>
                </div>
                <div style={{background:'#F4F7FA',position:'relative'}}>
                <section className='choose'>
                        <div style={{width:'100%'}}>
                            <h2 style={{textAlign:'center'}}>Why choose us</h2>
                            <br/>
                            <div className='choose-card'>
                                <div data-aos="flip-left">
                                    <aside style={{textAlign:'center'}}>
                                    <img src={truck}></img>
                                    <h5>On-time delivery</h5>
                                    <p style={{fontSize:'14px'}}>We guarantee same day and next-day delivery 
                                        Enugu and across the country within 72hours. 
                                    </p>
                                    </aside>
                                </div>
                                <div data-aos="flip-left">
                                <aside style={{textAlign:'center'}}>
                                    <img src={hand}></img>
                                    <h5>Secure and organized</h5>
                                    <p style={{fontSize:'14px'}}>We guarantee same day and next-day delivery 
                                        Enugu and across the country within 72hours. 
                                    </p>
                                    </aside>
                                </div>
                                <div data-aos="flip-left">
                                <aside style={{textAlign:'center'}}>
                                    <img src={heads}></img>
                                    <h5>Exellent customer experience</h5>
                                    <p style={{fontSize:'14px'}}>We guarantee same day and next-day delivery 
                                        Enugu and across the country within 72hours. 
                                    </p>
                                    </aside>
                                </div>
                            </div>
                        </div>
                </section>
                <div className='lit'>
                    <div style={{width:'400px'}}><img data-aos="zoom-in-up" src={litimg}></img></div>
                    <aside data-aos="zoom-in-down">
                        <h3 style={{width:'200px'}}>Fast order placement with electronic confirmation</h3>
                        <p>Get in Full control of how your goods are delivered to your
                            customers. Get in Full control of how your goods are delivered
                            to your customers, Get in Full control of how your goods
                            are delivered to your customers.Get in Full control of how
                            your goods are delivered to your customers.
                        </p>
                        <Button background={"#2F80ED"} color={'white'} content={"Get Started"} border={'none'} wh={'600'}/>
                    </aside>
                </div>
                <br/>
                </div>
                <div style={{background:'white'}}>
                <div style={{padding:'70px 0px'}} className='lit'>
                    <aside data-aos="fade-up-right">
                        <h3 style={{width:'200px'}}>Real time tracking 
of your delivery</h3>
                        <p>Get in Full control of how your goods are delivered to your
                            customers. Get in Full control of how your goods are delivered
                            to your customers, Get in Full control of how your goods
                            are delivered to your customers.Get in Full control of how
                            your goods are delivered to your customers.
                        </p>
                        <Button background={"#2F80ED"} color={'white'} content={"Get Started"} border={'none'} wh={'600'}/>
                    </aside>
                    <div style={{width:'400px'}}><img data-aos="fade-up-left" src={litimg}></img></div>
                </div>
                </div>
                <div style={{background:'#F4F7FA'}}>
                <div style={{padding:'70px 0px'}} className='lit'>
                <div style={{width:'400px'}}><img data-aos="fade-right" src={time}></img></div>
                <aside data-aos="fade-left">
                        <h3 style={{width:'200px'}}>Flexible rates and convenient 
transit times.</h3>
                        <p>Get in Full control of how your goods are delivered to your
                            customers. Get in Full control of how your goods are delivered
                            to your customers, Get in Full control of how your goods
                            are delivered to your customers.Get in Full control of how
                            your goods are delivered to your customers.
                        </p>
                        <Button background={"#2F80ED"} color={'white'} content={"Get Started"} border={'none'} wh={'600'}/>
                    </aside>
                </div>
                </div>
                <div className="email-spot">
                    <aside className='email-sp' style={{margin:'0px auto'}}>
                        <h1 style={{color:'white'}}>Track your delivery order</h1> 
                        <aside style={{color:'white',marginTop:'-8px'}}>Enter your ID</aside>
                        <br/>
                        <Email/>
                   </aside>
                </div>
                <footer className='land-foot'>
                <aside style={{color:'#9F9D9D'}}>Copyright 2019, Skada App</aside>
                </footer>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Landing;