import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './Style.css'


function Header(){
    
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const logout = () =>{ localStorage.clear()
            window.location.reload()
    }

    const showButton = () =>{
        if(window.innerWidth <=960) {
            setButton(false);
        }else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);
    const token = localStorage.getItem('token')
    const type = localStorage.getItem('type')
    const user = JSON.parse(localStorage.getItem("user"))


    if(token && user.userType == "Admin")
    {
        var header = 
        <>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/vehicle/showall' className= 'nav-links' onClick={closeMobileMenu}>
                                    Vehicle
                                </Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/services' className= 'nav-links' onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className= 'nav-links' onClick={closeMobileMenu}>
                                    AboutUs
                                </Link>
                            </li>
                            {/* {(type==="User")? */}
                         

                            <li className='nav-item'>
            <Link to='#' className= 'nav-links' onClick={closeMobileMenu}>
                Login
            </Link>
        </li>
                        
                           
                                <li className='nav-item'>
                                <Link to='/' className= 'nav-links' onClick={logout}>
                                    Logout
                                </Link>
                            </li>
                                
                           
                         
                        
                           
                        </ul>

        </>
    }




    else if(token && user.userType == "User")
    {
        var header = <>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>

        <li className='nav-item'>
            <Link to='/vehicle/showall' className= 'nav-links' onClick={closeMobileMenu}>
                Vehicle
            </Link>
        </li>

        <li className='nav-item'>
            <Link to='/services' className= 'nav-links' onClick={closeMobileMenu}>
                Services
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/about' className= 'nav-links' onClick={closeMobileMenu}>
                AboutUs
            </Link>
        </li>
        {/* {(type==="User")? */}
        
        <li className='nav-item'>
            <Link to='/Mybooking' className= 'nav-links' onClick={closeMobileMenu}>
                My Booking
            </Link>
        </li>
    

     
        <li className='nav-item'>
            <Link to='#' className= 'nav-links' onClick={closeMobileMenu}>
                Login
            </Link>
        </li>
    
       
            <li className='nav-item'>
            <Link to='/' className= 'nav-links' onClick={logout}>
                Logout
            </Link>
        </li>
            
       
       
    </ul>
    </>

    }



    else
    {
        var header = <>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' className= 'nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>

        <li className='nav-item'>
            <Link to='/vehicle/showall' className= 'nav-links' onClick={closeMobileMenu}>
                Vehicle
            </Link>
        </li>

        <li className='nav-item'>
            <Link to='/services' className= 'nav-links' onClick={closeMobileMenu}>
                Services
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/about' className= 'nav-links' onClick={closeMobileMenu}>
                AboutUs
            </Link>
        </li>
        {/* {(type==="User")? */}
       
            
       
        <li className='nav-item'>
            <Link to='/register' className= 'nav-links' onClick={closeMobileMenu}>
                Sign Up
            </Link>
        </li>
        <li className='nav-item'>
            <Link to='/login' className= 'nav-links' onClick={closeMobileMenu}>
                LogIn
            </Link>
        </li>
    
       
    </ul>
    </>

    }    





        return (
            <>
                <nav className="navbar">
                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            Vehicle Rental <i className='fab fa-typo3'/>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className= { click? 'fas fa-times' : 'fas fa-bars'}/>
                        </div>
                        {header}
                    </div>
                </nav>

                
            </>










            // <>
            // <div className='Navbar'>
            //     <div className = "logo">
            //         <img src="images/logo.png" alt="Travel"></img>
            //     </div>
            
            // <ul>
            //     <Link  to= "/" exact >Home</Link>
            //     <Link to= "/destination/showall" >Destinations</Link>
            //     <Link to= "/services" >Services</Link>
            //     <Link to= "/about" >AboutUs</Link>
            //     <Link to= "/register" >Sign Up</Link>
            //     <Link to= "/login" >Sign In</Link>
            // </ul>
            //     </div>

            // </>

        )
    }


export default Header