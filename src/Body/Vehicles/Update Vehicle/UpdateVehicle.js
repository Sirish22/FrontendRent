import axios from 'axios'
import React, { Component } from 'react'
import './Update Vehicle.css'

class UpdateVehicle extends Component{
    state = {
        vname : "",
        vdetails : "",
        vprice : "",
        id: this.props.match.params.id
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    UpdateVehicle = () => {
        axios.put('http://localhost:90/vehicle/update/' + this.state.id,this.state,this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
            window.location.reload()
    }

    componentDidMount(e){
        axios.get('http://localhost:90/vehicle/single/' + this.state.id)
        .then((response)=>{
            this.setState({
                vname : response.data.vname,
                vdetails : response.data.vdetails,
                vprice : response.data.vprice
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            //<>
            <div id='update-section'>
            <h1>Update</h1>
                <form>
                    <div className='updateText-box'>
                        <label for='Vehicle Name'><b>Vehicle Name</b></label>
                        <span></span>
                        <input type="text" name="vname" value={this.state.vname} onChange={this.inputHandler} />
                    </div>

                    <div className='updateText-box'> 
                    <label for='Vehicle Details'><b>Vehicle Details</b></label>
                    <span></span>
                    <input type="text" name="vdetails" value={this.state.vdetails} onChange={this.inputHandler} />
                    </div>

                    <div className='updateText-box'>
                    <label for='Vehicle Price'><b>Vehicle Price</b></label>
                    <span></span>
                        <input type="text" name="vprice" value={this.state.vprice} onChange={this.inputHandler} />
                    </div>

                    <button onClick={this.UpdateVehicle} className= "Update-button">Update Vehicle</button>
                </form>
            </div>
          //  <div>
              // <h1>dfdgffhgg</h1> 
           // </div>
           // </>
        )
    }
}

export default UpdateVehicle