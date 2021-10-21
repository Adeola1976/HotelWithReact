import React from 'react'
import Logo from '../image/header/Logo.png'
import {Link} from 'react-router-dom'

export default function Header({alt}) {
    return (
    <div>
         <header className="header_area">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
      
                    <a className="navbar-brand logo_h" href="index.html"><img src={Logo} alt={alt}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                 
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
                            <li className="nav-item"><a className="nav-link" href="accomodation.html">Accomodation</a></li>
                            <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        </ul>
                    </div> 
                </nav>
            </div>
        </header>


      </div>
    )
}
Header.defaultProps = {
    alt:"Logo-img",
  
}