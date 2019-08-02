// Navbar
import React from 'react'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import './css/custom.css'

const Navbar = () => {
    return(
        <nav>
            <div class="nav-wrapper navStyle z-depth-4">
                <a href="index.html" class="brand-logo" style = {{marginLeft: 10}}><strong>Folder Spark</strong></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="index.html"><strong>Sass</strong></a></li>
                    <li><a href="index.html"><strong>Components</strong></a></li>
                    <li><a href="index.html"><strong>JavaScript</strong></a></li>
                </ul>
            </div>
        </nav>
    )
}



export default Navbar