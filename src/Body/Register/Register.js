import { Component } from "react";
import axios from 'axios'
import './Register.css'



class Register extends Component{
    state = {
        firstname : "",
        lastname : "",
        address : "",
        email : "",
        phone : "",
        username : "",
        password : "",
        userType : ""
    };

    submitUser=(e)=>{
        e.preventDefault();
        const userdata = {
                        firstname : this.state.firstname,
                        lastname : this.state.lastname,
                        address : this.state.address,
                        email : this.state.email,
                        phone : this.state.phone,
                        username : this.state.username,
                        password : this.state.password,
                        userType : this.state.userType
        }
        axios.post("http://localhost:90/register", userdata)
        .then((response) =>{
            console.log(response)
            this.props.history.push('/login')
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class='SignUp-box'>
            <h1>Register</h1>
            <form>
                <div className='text-box'>
                <i class="fas fa-user"></i>
                <input type="text" value={this.state.firstname} onChange={(event => { this.setState({ firstname: event.target.value }) })} placeholder='Firstname'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-user"></i>
                <input type="text" value={this.state.lastname} onChange={(event => { this.setState({ lastname: event.target.value }) })} placeholder='Lastname'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-envelope"></i>
                <input type="text" value={this.state.email} onChange={(event => { this.setState({ email: event.target.value }) })} placeholder='Email'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-map-marker-alt"></i>
                <input type="text" value={this.state.address} onChange={(event => { this.setState({ address: event.target.value }) })} placeholder='Address'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-phone-square-alt"></i>
                <input type="text" value={this.state.phone} onChange={(event => { this.setState({ phone: event.target.value }) })} placeholder='Phone'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-user"></i>
                <input type="text" value={this.state.username} onChange={(event => { this.setState({ username: event.target.value }) })} placeholder='Username'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-lock"></i>
                <input type="password" value={this.state.password} onChange={(event => { this.setState({ password: event.target.value }) })} placeholder='Password'/>
                </div>
                <div className='text-box'>
                <i class="fas fa-user-shield"></i>
                <input type="text" value={this.state.userType} onChange={(event => { this.setState({ userType: event.target.value }) })} placeholder='UserType'/>
                </div>

                <button onClick={this.submitUser} className='Submit-Btn'>Submit</button>
            </form>
            </div>
            )
            
    }
}

export default Register
