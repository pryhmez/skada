import React, { Component } from 'react';
import Navigation from "./Navigation";
import Human from "../img/Human.png";
import truck from "../img/truck.png" ;
import hand from "../img/hands.png";
import heads from "../img/heads.png";
import litimg from "../img/pic.png";
import time from "../img/time.png";
import Fast from "../img/Fast.png"
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
                            <p>The fastest and most reliable <br/>way to deliver your goods to your 
customers and also keep track of their current location.
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
                                    <p style={{fontSize:'12px'}}>We guarantee same day and next-day delivery Enugu and across the country within 72hours. Our state-of-the-art technology infrastructure also allows for multiple
rescheduling opportunities to suit thecustomer’s needs. 
                                    </p>
                                    </aside>
                                </div>
                                <div data-aos="flip-left">
                                <aside style={{textAlign:'center'}}>
                                    <img src={hand}></img>
                                    <h5>Secure and organized</h5>
                                    <p style={{fontSize:'12px'}}>
                                    We handle customer parcels with utmost strictness & confidentiality. We ensure the parcels reach the intended recipients as fast as possible without any damages.
                                    </p>
                                    </aside>
                                </div>
                                <div data-aos="flip-left">
                                <aside style={{textAlign:'center'}}>
                                    <img src={heads}></img>
                                    <h5>Exellent customer experience</h5>
                                    <p style={{fontSize:'12px'}}>
                                    At GIGL, we believe that quality people produce consistently excellent service, and continuously innovate to meet customer needs. Our HR initiatives are deliberately designed to attract and maintain the best talents,
                                    </p>
                                    </aside>
                                </div>
                            </div>
                        </div>
                </section>
                <div className='lit'>
                    <div style={{width:'400px'}}><img data-aos="zoom-in-up" src={Fast}></img></div>
                    <aside data-aos="zoom-in-down">
                        <h3 style={{width:'200px'}}>Fast order placement with electronic confirmation</h3>
                        <p>This service is more than just a delivery service. With an established reputation for speed and reliability, Skada offers priority delivery services to meet your needs every single hour of every single day. If getting that package to its destination is important to you, then it's definitely important to us.
                        </p>
                        <Button background={"#2F80ED"} color={'white'} content={"Get Started"} border={'none'} wh={'600'}/>
                    </aside>
                </div>
                <br/>
                </div>
                <div style={{background:'white'}}>
                <div style={{padding:'70px 0px'}} className='lit'>
                    <aside data-aos="fade-up">
                        <h3 style={{width:'200px'}}>Real time tracking 
of your delivery</h3>
                        <p>Track all your shipments on Skada, you will get real-time tracking information and visualized delivery path with the Google Maps of all your packages. By just simply enter your tracking number you are in full control of your goods location.
                        </p>
                        <Button background={"#2F80ED"} color={'white'} content={"Get Started"} border={'none'} wh={'600'}/>
                    </aside>
                    <div style={{width:'400px'}}><img data-aos="fade-up" src={litimg}></img></div>
                </div>
                </div>
                <div style={{background:'#F4F7FA'}}>
                <div style={{padding:'70px 0px'}} className='lit'>
                <div style={{width:'400px'}}><img data-aos="fade-in" src={time}></img></div>
                <aside data-aos="fade-in">
                        <h3 style={{width:'200px'}}>Flexible rates and convenient 
transit times.</h3>
                        <p>Enjoy the convenience of our flexible pick up service option - which means we collect your consignment at a time that suits you. We can also schedule regular daily pick-ups at fixed times or on select days. These services are offered at exceptional express delivery service at unbeatable prices.
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