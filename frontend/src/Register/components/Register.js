import React, { Component,useContext } from 'react';
import {Link} from "react-router-dom"
import Button from "./RegisterButton";
import Logo from "../../components/Logo";
import Drop from "./DropDown"
import "../css/Register.css"
import AuthContext from "../../Context/auth/authContext";

class Register extends Component {
    constructor(props){
        super(props)
        const {location:{state:{userInfo}}} = this.props
        this.state = { 
            businessname:"",
            businessphoneno:"",
            businesstype:"",
            businessCategory:"",
            ...userInfo
         }
    }

     handleChange=(e)=>{
         console.log(e)
         if(e.target){
            this.setState({[e.target.name]:e.target.value}, () => {
                console.log(this.state)
            })
         } else {
            this.setState({businessCategory: e }, () => {
                console.log(this.state)
            })
         }     
     }
     handleSubmit=(e)=>{
        e.preventDefault()
        const { businessphoneno } = this.state;
        const isPhoneValid = (/^0[7-9][0-1]\d{8}$/g).test(businessphoneno);
        if(isPhoneValid) {
            const userInfo = this.state
            // this.props.history.push({
            //     pathname: '/register2',
            //     state: { userInfo }
            //   })
            const authContext = useContext(AuthContext)
            const {register} = authContext;
            register(this.state)
        } else {
            alert("I, victor promise to fix or it turn to a Bed bug")
           
        }
    }
    render() { 
        console.log(this.props)
        // const {location:{state:{userInfo}}} = this.props
        return ( 
            <div className="loginwrapp">
                <div className="blue">
                    <div className='log'><Logo/></div>
                    <div  className='tec'><h1>Create an account in less than 2 minutes</h1></div>
                </div>
                <div style={{background:'white'}} className="white">
                    <div className='logtext'>
                        <h1 className="v">Register</h1>
                        <span><p className="v">Create an account with Skada</p></span>
                        <form>
                            <input className="na" onChange={this.handleChange} name='businessname' required  placeholder="Business Name"></input>
                            <input className="na" onChange={this.handleChange} name='businessphoneno' required placeholder="Business Number"></input>
                            <input className="na" onChange={this.handleChange}  name='businesstype' required placeholder="Business Type"></input>
                            <Drop onChange = {this.handleChange}/>
                            <Link style={{textDecoration:'none'}} to="/dashboard"><div className="bt"><div></div><Button name={'Done'}/></div></Link>
                        </form>
                        <div className="foot">
                            <div><span>Sign up with Instagram page 
                                <i style={{color:'#2F80ED',fontSize:"25px",marginLeft:'5px'}} className="fab fa-instagram"></i></span></div>
                                <br/>
                            <div>Have an Account? <pan>Sign in</pan></div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Register;