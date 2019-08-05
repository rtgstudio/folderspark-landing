// Navbar
import React from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './css/custom.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <div class="nav-wrapper red z-depth-4">
                <a href="index.html" class="brand-logo" style = {{marginLeft: 10}}><strong>Folder Spark</strong></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to = "/"><strong>Home</strong></Link></li>
                    <li><Link to = "/features"><strong>Features</strong></Link></li>
                    <li><Link to = "/developers"><strong>Developers</strong></Link></li>
                    <li><Link to = "/donate"><strong>Donate</strong></Link></li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar