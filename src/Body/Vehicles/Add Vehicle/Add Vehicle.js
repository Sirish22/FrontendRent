import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Add Vehicle.css'

class AddVehicle extends Component {
    state = {
        vimage: '',
        vname: '',
        vdetails: '',
        vprice: '',
        config: {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    fileHandler = (e)=>{
        this.setState({
            vimage : e.target.files[0]
        })
    }

    submitData = (e) => {
        e.preventDefault();
        const data = new FormData() //new line

        data.append('vimage', this.state.vimage)
        data.append('vname', this.state.vname)
        data.append('vdetails', this.state.vdetails)
        data.append('vprice', this.state.vprice)

        console.log(data)

        axios.post('http://localhost:90/vehicle/insert',data)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
            // window.location.reload()
    }
    render() {
        return (
            
            <div id='update-section'>
            <h1>Add Vehicle</h1>
                <form>
                    <div className='updateText-box'>
                        <label for ='VehicleImage'><b>Vehicle Image</b></label>
                        <input type="file" name="vimage" onChange={this.fileHandler}/>
                    </div>
                    <div className='updateText-box'>
                        <label for='VehicleName'><b>Vehicle Name</b></label>
                        <span></span>
                        <input type="text" name="vname" value={this.state.vname} onChange={this.changeHandler} />
                    </div>

                    <div className='updateText-box'> 
                    <label for='VehicleDetails'><b>Vehicle Details</b></label>
                    <span></span>
                    <input type="text" name="vdetails" value={this.state.vdetails} onChange={this.changeHandler} />
                    </div>

                    <div className='updateText-box'>
                    <label for='VehiclePrice'><b>Vehicle Price</b></label>
                    <span></span>
                        <input type="text" name="vprice" value={this.state.vprice} onChange={this.changeHandler} />
                    </div>

                    <button onClick ={this.submitData} className= "Update-button">
                   Add Vehicle
                    </button>
                </form>
            </div>

        )
    }
}

export default AddVehicle