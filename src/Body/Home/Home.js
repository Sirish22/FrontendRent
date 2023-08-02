import { Component } from "react";
import { Button } from "../../Header/Button";
import './Home.css'

class Home extends Component {
    render() {
        return (
                <div className='home-container'>
                    {/* <img src = {require('../images/bouddha.jpg')} className='home-image'/> */}
                    <h1>Book your dream car and bike</h1>
                    <p>Go for Adventure</p>

                    <div className='home-btns'>
                        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                          GET STARTED
                        </Button>
                    </div>
                </div>
        )
    }
}
export default Home