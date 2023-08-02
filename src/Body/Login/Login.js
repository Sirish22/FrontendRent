import React, { Component } from "react";
import axios from 'axios';
import './Login.css'
import { Redirect } from "react-router";


class Login extends Component{
    state = {
        username : '',
        password : ''
    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:90/login', this.state)
        .then((response) =>{
            console.log(response)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('type', response.data.data.userType)
            localStorage.setItem('user',JSON.stringify(response.data.data))
            window.location.reload()
           
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    render(){
        
        if(localStorage.getItem('token')){
            return <Redirect to="/" />
        }
        return(
            
            <div className='login-box'>
                <h1>Login</h1>
                <form>
                    <div className = 'textbox'>
                    <i class="fas fa-user"></i>
                        {/* <label for='username'><b>Username</b></label> */}
                        <input type='text' name='username' placeholder= 'Username' value={this.state.username} onChange={this.inputHandler}/>
                    </div>

                    <div className = 'textbox'>
                    <i class="fas fa-lock"></i>
                        <input type='password' name= 'password' placeholder= 'Password' value= {this.state.password} onChange={this.inputHandler}/>
                    </div>

                    <button onClick={this.submitLogin} className='login-btn'><a className='a' href="/">Log In</a></button>
                    <div className='section'>
                        <h2>Don't have an Account? </h2>
                        <button className= 'login-btn2'><a href="Register" class='signup'>Sign Up</a></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login     