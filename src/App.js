// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
// import Body from './Body/Home/index'
import Footer  from './Footer/Footer'
import Home from './Body/Home/Home'
import Vehicles from './Body/Vehicles/Vehicles'
import Login from "./Body/Login/Login"
import Register from "./Body/Register/Register"
import Service from './Body/Service/Service'
import About from './Body/About/About'
import Mybooking from './Body/My Booking/My booking'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import UpdateVehicle from './Body/Vehicles/Update Vehicle/UpdateVehicle';
import AddVehicle from './Body/Vehicles/Add Vehicle/Add Vehicle';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
          {/* <Body></Body> */}
                    <Route path = '/' exact component ={Home}/>
                    <Route path = '/vehicle/showall' component = {Vehicles}/>
                    <Route path = '/services' component = {Service}/>
                    <Route path = '/about' component = {About}/>
                    <Route path = '/register' component = {Register}/>
                    <Route path = '/login' component = {Login}/>
                    <Route path = '/Mybooking' component = {Mybooking}/>
                    <Route path = '/update/:id' component = {UpdateVehicle}/>
                    <Route path = '/AddVehicle' component= {AddVehicle}/>



      </Switch>
          {/* <Footer/>  */}
    </Router>
  );
}

export default App;
