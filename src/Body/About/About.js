import { Component } from "react"
import './About.css'

class About extends Component{
    render(){
        return(
                <div className='about-container'>
                    <div className='about-text'>
                        <h1 className='heading'>ABOUT US</h1>

                        <p className='para1'>We are an ordinary Tour providers but with extraordinary tour
                             packages at extraordinary prices. Well, when it comes to the 
                             vacation, price isn’t the big deal but we know that you need a 
                             stress free exploration so we don’t let the high cost put some 
                             stresses on you. We just put the amazing beauty of nature  infront of you.</p>


                        <h1 className='heading2'>OUR MISSION</h1>

                        <p className='para2'>A vacation is all you need to give yourself some time in this 
                            busy lifes. Enjoy the beauty that nature has to offer, 
                            compiled with the perfect destinations to give you the
                             perfect tour packages to choose from. Give yourself some amp; enjoy the
                              destinations that you choose.</p>

                        <p className='para3'>
                              As the competition for providing excellent tour packages comes 
                              at a great price, it is definitely very important to 
                              stand out of the crowd. We believe that quality not 
                              necessarily comes at a bigger price.So, we aim to provide 
                              excellent and best tour packages at the price one can afford 
                              without having to worry.
                              </p>
                              </div>


                </div>
            )
    }
}

export default About