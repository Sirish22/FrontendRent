import React, { Component } from 'react'
import axios from 'axios'
import './Mybooking.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class Mybooking extends Component {
    state = {
        Mybooking: [],
        count:'',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

 

    // subtract = (id) => {
    //     console.log(id)
    //     axios.put('http://localhost:90/vehicle/minus/' + id)
    //         .then((response) => {
    //             console.log(response)
    //             window.location.reload()
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })
    // }
     

    deletebooking= (vehicle_id) => {
        axios.delete('http://localhost:90/Mybooking/delete/' + vehicle_id, this.state.config)
            .then((response) => {
                console.log(response)
                window.location.reload()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    componentDidMount() {
        axios.get("http://localhost:90/vehicles/showall", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    Mybooking: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    minuss = (vehicle_id)=>{
        axios.put("http://localhost:90/myBooking/minus/"+vehicle_id,{},this.state.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                window.location.reload();
            }
            else
            {
                alert(response.data.message)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    addd = (vehicle_id)=>{
        axios.put("http://localhost:90/myBooking/add/"+vehicle_id,{},this.state.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                window.location.reload();
            }
            else
            {
                alert(response.data.message)
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }



    render(){
        return (        
            <>
                {/* <ToastContainer/> */}
                    <div className='renting-container'>
                        {/* <div className='rew mb-5'> */}
                            {/* <form className='col-md-12' method='post'> */}
                                {/* <div className='booking-blocks-table'> */}
                                    <table className='rented-table'>
                                        <thead>
                                            <tr>
                                                <th className='Vehicle-img'>Image</th>
                                                <th className='Vehicle-name'>Vehicle</th>
                                                <th className='Vehicle-price'>Price</th>
                                                <th className='Vehicle-Quantity'>Quantity</th>
                                                <th className='Vehicle-total'>Total</th>
                                                <th className='Vehicle-remove'>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.Mybooking.map((v) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td className='Vehicle-imgg'>
                                                                <img src={`http://localhost:90/${v.Vehicle.vimage}`}  />
                                                            </td>
                                                            <td className='Vehicle-name'>
                                                                <h2 className='h5 text-black'>{v.Vehicle.vname}</h2>
                                                            </td>
                                                            <td>Rs.{v.Vehicle.vprice}</td>
                                                            <td>
                                                                <div className="input-group mb-3" style={{ maxWidth: 120 }}>
                                                                    <div className="input-group-prepend">
                                                                        <button className="btn btn-outline-primary js-btn-minus" onClick={this.minuss.bind(this,v._id)}>−</button>
                                                                    </div>
                                                                    <p className={"qty" + v._id}>{v.Qty}</p>
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-outline-primary js-btn-plus"  onClick={this.addd.bind(this,v._id)}>+</button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>${parseInt(v.Vehicle.vprice) * v.Qty}</td>
                                                            <td><Button onClick={this.deletebooking.bind(this,v._id )} className="remove-btn">Remove</Button></td>
                                                        </tr>
                                                    </>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            {/* </form> */}
                        {/* </div> */}
                    {/* </div> */}
            </>

        )
    }
}
             

export default Mybooking