import React, { Component } from 'react';
import Navigation from "./Navigation";
import Email from "./Email"
import "../css/LandingPage.css"

class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment> 
                <div className="wrapper">
                    <Navigation/>
                    <div className='landtext'>
                        <h1>Helping small business<br/> deliver their goods the smart way</h1>
                        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. 
                            Vel, amet quod adipisci ipsam provident at tenetur alias!</p>
                        <Email/>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Landing;