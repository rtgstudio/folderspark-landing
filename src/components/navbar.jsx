// Navbar
import React from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './css/custom.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper red">
                    <a href="index.html" className="brand-logo" style={{marginLeft: 10}}>Folder Spark</a>
                    <a href="index.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/"><strong>Home</strong></Link></li>
                        <li><Link to="/features"><strong>Features</strong></Link></li>
                        <li><Link to="/developers"><strong>Developers</strong></Link></li>
                        <li><Link to="/donate"><strong>Donate</strong></Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/"><strong>Home</strong></Link></li>
                <li><Link to="/features"><strong>Features</strong></Link></li>
                <li><Link to="/developers"><strong>Developers</strong></Link></li>
                <li><Link to="/donate"><strong>Donate</strong></Link></li>
            </ul>
        </>

    )
}



export default Navbar