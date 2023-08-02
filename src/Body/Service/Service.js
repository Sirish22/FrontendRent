import { Component } from "react";
import './Service.css'
class Service extends Component{
    render(){
        return(
            <div class="services">
            <div class="services-text">
                <p>Services</p>
                <p>Services required</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium adipisci dignissimos assumenda libero facere alias, eveniet harum amet fugiat itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, minima!</p>
            </div>
            <div class="box-container">
                <div class="box-1">
                    <span>1</span>
                    <p class="heading">Web Design</p>
                    <p class="details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem et ducimus rem laudantium dignissimos quos, pariatur, deleniti est eos, maiores mollitia quisquam aspernatur nisi?</p>
                    <button>Read More</button>
                </div>
                <div class="box-2">
                    <span>2</span>
                    <p class="heading">Web Development</p>
                    <p class="details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem et ducimus rem laudantium dignissimos quos, pariatur, deleniti est eos, maiores mollitia quisquam aspernatur nisi?</p>
                    <button>Read More</button>
                </div>
                <div class="box-3">
                    <span>3</span>
                    <p class="heading">Photoshop</p>
                    <p class="details">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem et ducimus rem laudantium dignissimos quos, pariatur, deleniti est eos, maiores mollitia quisquam aspernatur nisi?</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>

        )
    }
}

export default Service