import React from 'react';
import logo from '../images/logo.svg'
import "./styles/Navbar.css";
import {Link} from 'react-router-dom'

class Navbar extends React.Component{

    render(){
        return(
          <div className="Navbar">
            <div className="container-fluid">
                <Link to="/" className="Navbar__brand">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" weight="120" height="60"/>
                    <span className="font-weight-ligth">Platzi</span>
                    <span className="font-weigth-bold">Conf</span>
                </Link>
            </div>    
          </div>
        )
    }
}

export default Navbar; 