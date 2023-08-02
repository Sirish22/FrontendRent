import React, { Component, state } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom'
import './Vehicles.css'

class Vehicles extends Component {
    state = {
        vehicle: [],
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {
        axios.get("http://localhost:90/vehicle/showall/")
            .then((response) => {
                console.log(response)
                this.setState({
                    vehicle: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    deletevehicle = (vehicle_id) => {
        axios.delete('http://localhost:90/vehicle/delete/' + vehicle_id, this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
            window.location.reload()
    }

    bookvehicle = (Vehicle) => {
       
        axios.post('http://localhost:90/vehicle/book', Vehicle , this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }


    render() {
        const type = localStorage.getItem('type')
        return (
            <Container>
            <Row>
                <div className="vehicle-section">
                    <div id="vehicle">{this.state.vehicle.map((vehicle) => {
                        return (
                            <div className="book" key={vehicle._id}>
                                <Link to={`/vehicle/showall/${vehicle._id}`}>
                                <img src={`http://localhost:90/${vehicle.vimage}`} className='vehicle-image' />

                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/vehicle/showall/${vehicle._id}`} >
                                            {vehicle.vname}
                                        </Link>
                                    </h3>
                                    <span>Rs.{vehicle.vprice}</span>
                                    <p>{vehicle.vdetails}</p>

                                    {/* {(type==='Admin')? <> */}
                                    <div className='Crud-btns'>
                                        <button onClick={this.deletevehicle.bind(this, vehicle._id)} className='delete-btn'>Delete</button>
                                        <button className="update-btn"><Link to={"/update/" + vehicle._id} className='update-link'>Update</Link></button>
                                    </div>
                                    {/* </>:<> */}
                                    <button onClick={this.bookvehicle.bind(this, vehicle)} className='Book-btn'>
                                        <Link to="/Mybooking" className="Book-btn1">
                                            Book
                                    </Link>
                                    </button>
                                    {/* </>
                                    } */}
                                   
                                    
                                </div>
                            </div>

                        )
                    })}</div>
                    <div className='vehicle'>
                        <button className='add-btn'><Link to= {"/AddVehicle"} > Add Vehicle</Link></button>
                    </div>
                    
                </div>
            </Row>
        </Container>
        )
    }
}

export default Vehicles